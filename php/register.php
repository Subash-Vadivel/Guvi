<?php

if ($_SERVER['REQUEST_METHOD'] == 'POST')
{
    header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept');
header('Access-Control-Allow-Methods: POST, GET, OPTIONS');

$uname = $_POST['Name'];
$email=$data['Email'];
$password=$data['Password'];
$dob=$data['DOB'];
$phone=$data['Phone'];



//  Connect to the database in AWS
$servername = "guvi.c8dazahfss6a.us-east-1.rds.amazonaws.com";
$username = "admin";
$password = "administrator";
$dbname = "sys";

$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}

// prepare and bind
$stmt = $conn->prepare("INSERT INTO MyGuests (uname, pass, email) VALUES (?, ?, ?)");
$stmt->bind_param("sss", $uname, $password, $email);

// set parameters and execute
$stmt->execute();

echo "New User Created";
$stmt->close();
$conn->close();


// $text='<p>Hello World </p>';
// die(json_encode(array('text' => $text /* and anything else you want */,'Name'=>$name)));
}


?>