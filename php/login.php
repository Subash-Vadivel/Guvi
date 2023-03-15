<?php

$servername = "guvi.c8dazahfss6a.us-east-1.rds.amazonaws.com";
$username = "admin";
$password = "administrator";
$dbname = "guvi";

$conn = new mysqli($servername, $username, $password);

// Check connection
if ($conn->connect_error) {
  printf("Connection failed: " . $conn->connect_error);
  exit();
}
printf("Connected Successfully");
$conn->close();
?>