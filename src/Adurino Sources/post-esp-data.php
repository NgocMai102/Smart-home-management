<?php
$username = "root"; 
$password = ""; 
$dbname = "esp32_data";
$servername = "192.168.43.184";
 
$conn = new mysqli($servername, $username, $password, $dbname); 
if ($conn->connect_error) { 
    die("Connection failed: " . $conn->connect_error); 
}

$temperature = $_POST['temperature'];
$humidity = $_POST['humidity'];
$light = $_POST['light'];
 
$sql = "INSERT INTO sensor_data (temperature, humidity, light) VALUES ('$temperature', '$humidity', '$light')";

if ($conn->query($sql) === TRUE) {
    echo "New record created successfully";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close(); 
?>
