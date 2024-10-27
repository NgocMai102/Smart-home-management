#include <WiFi.h>
#include <PubSubClient.h>
#include <DHT.h>

#define DHTPIN 4        // Pin nối với cảm biến DHT
#define DHTTYPE DHT11   // Chọn loại cảm biến (DHT11 hoặc DHT22)

// Định nghĩa các chân LED
const int led1 = 18;
const int led2 = 19;
const int led3 = 21;

// Định nghĩa chân cảm biến ánh sáng (DO)
const int lightSensorPin = 34;  // Chân DO của cảm biến ánh sáng

// Định nghĩa WiFi và MQTT Broker
const char* ssid = "Duc...";
const char* password = "02122003";
const char* mqtt_server = "192.168.43.184";  // IP broker
const char* mqtt_port = "1883";
const char* mqtt_user = "PhamThiNgocMai";          // Username của MQTT
const char* mqtt_pass = "b21dccn083";       // Password của MQTT

WiFiClient espClient;
PubSubClient client(espClient);
DHT dht(DHTPIN, DHTTYPE);

unsigned long lastDHTReadTime = 0;
const long interval = 2000; // Đọc cảm biến DHT mỗi 2 giây

// Biến để điều khiển bật/tắt cảm biến
bool sensorEnabled = true;

// Hàm kết nối WiFi
void setup_wifi() {
  delay(10);
  Serial.println();
  Serial.print("Connecting to ");
  Serial.println(ssid);

  WiFi.begin(ssid, password);

  while (WiFi.status() != WL_CONNECTED) {
    delay(500);
    Serial.print(".");
  }

  Serial.println("");
  Serial.println("WiFi connected");
  Serial.print("IP Address: ");
  Serial.println(WiFi.localIP());
}

// Hàm xử lý khi nhận dữ liệu từ MQTT
void callback(char* topic, byte* payload, unsigned int length) {
  String message = "";
  for (int i = 0; i < length; i++) {
    message += (char)payload[i];
  }

  // Kiểm tra nếu là lệnh bật tất cả đèn
  if (message == "all-on") {
    // Bật tất cả các đèn
    digitalWrite(led1, HIGH);
    digitalWrite(led2, HIGH);
    digitalWrite(led3, HIGH);

    // Xuất thông báo trạng thái
    String ledStatus = "All LEDs have been turned on";
    client.publish("data/led/status", ledStatus.c_str());
    Serial.println(ledStatus);

  // Kiểm tra nếu là lệnh tắt tất cả đèn
  } else if (message == "all-off") {
    // Tắt tất cả các đèn
    digitalWrite(led1, LOW);
    digitalWrite(led2, LOW);
    digitalWrite(led3, LOW);

    // Xuất thông báo trạng thái
    String ledStatus = "All LEDs have been turned off";
    client.publish("data/led/status", ledStatus.c_str());
    Serial.println(ledStatus);
    
  } else {
    // Điều khiển từng đèn riêng lẻ
    int led = message.substring(0, 1).toInt();
    int state = message.substring(2, 3).toInt();

    // Điều khiển đèn LED
    if (led == 1) {
      digitalWrite(led1, state);
    } else if (led == 2) {
      digitalWrite(led2, state);
    } else if (led == 3) {
      digitalWrite(led3, state);
    }

    // Điều khiển bật/tắt cảm biến qua MQTT
    if (String(topic) == "data/sensor/control") {
      if (message == "on") {
        sensorEnabled = true;
        Serial.println("The sensor is turned on.");
      } else if (message == "off") {
        sensorEnabled = false;
        Serial.println("The sensor is turned off.");
      }
    }

    // Pub lại thông báo khi đèn bật/tắt thành công
    if (state == 1) {
      String ledStatus = "LED " + String(led) + " đã bật";
      client.publish("data/led/status", ledStatus.c_str());
      Serial.println(ledStatus);  // In ra thông báo trạng thái
    } else if (state == 0) {
      String ledStatus = "LED " + String(led) + " đã tắt";
      client.publish("data/led/status", ledStatus.c_str());
      Serial.println(ledStatus);  // In ra thông báo trạng thái
    }
  }
}

// Hàm kết nối tới MQTT broker
void reconnect() {
  while (!client.connected()) {
    Serial.print("Attempting MQTT connection...");
    // Kết nối với username và password MQTT
    if (client.connect("ESP32Client", mqtt_user, mqtt_pass)) {
      Serial.println("connected");
      client.subscribe("data/led");           // Đăng ký lắng nghe lệnh điều khiển LED
      client.subscribe("data/sensor/control"); // Đăng ký lắng nghe lệnh điều khiển cảm biến
    } else {
      Serial.print("failed, rc=");
      Serial.print(client.state());
      Serial.println(" try again in 5 seconds");
      delay(5000);
    }
  }
}

void setup() {
  // Cài đặt Serial, WiFi, MQTT và cảm biến
  Serial.begin(115200);
  setup_wifi();
  client.setServer(mqtt_server, mqtt_port);  // Thiết lập MQTT broker
  client.setCallback(callback);         // Thiết lập hàm callback cho MQTT

  // Thiết lập chân cho LED và cảm biến ánh sáng
  pinMode(led1, OUTPUT);
  pinMode(led2, OUTPUT);
  pinMode(led3, OUTPUT);
  pinMode(lightSensorPin, INPUT);  // Cảm biến ánh sáng (DO) là đầu vào

  // Khởi tạo cảm biến DHT
  dht.begin();
}

void loop() {
  // Đảm bảo kết nối MQTT
  if (!client.connected()) {
    reconnect();
  }
  client.loop();

  // Nếu cảm biến được bật thì đọc dữ liệu
  if (sensorEnabled) {
    unsigned long currentMillis = millis();
    if (currentMillis - lastDHTReadTime >= interval) {
      lastDHTReadTime = currentMillis;

      // Đọc giá trị từ cảm biến DHT
      float temperature = dht.readTemperature();
      float humidity = dht.readHumidity();

      // Đọc giá trị từ cảm biến ánh sáng (0 hoặc 1)
      int lightSensorValue = analogRead(lightSensorPin);

      // Kiểm tra nếu dữ liệu cảm biến hợp lệ
      if (!isnan(temperature) && !isnan(humidity)) {
        // Tạo chuỗi dữ liệu cảm biến để publish
        String payload = "Temperature: " + String(temperature) + " *C, Humidity: " + String(humidity) + " %, Light: " + String(lightSensorValue);
        
        // Publish dữ liệu cảm biến lên topic data/sensor
        client.publish("data/sensor", payload.c_str());

        // In ra màn hình Serial giá trị đo được từ cảm biến
        Serial.println(payload);
      } else {
        Serial.println("Failed to read from DHT sensor!");
      }
    }
  }
}