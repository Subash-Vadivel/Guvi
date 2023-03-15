<?php

if ($_SERVER['REQUEST_METHOD'] == 'POST')
{
    header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept');
header('Access-Control-Allow-Methods: POST, GET, OPTIONS');


$dob=$_POST['DOB'];
$phone=$_POST['Phone'];
$uname = $_POST['Name'];
$email=$_POST['Email'];
$pass=$_POST['Password'];


//  Connect to the database in AWS
$servername = "guvi.c8dazahfss6a.us-east-1.rds.amazonaws.com";
$username = "admin";
$password = "administrator";
$dbname = "guvi";

$conn = new mysqli($servername, $username, $password,$dbname);

// Check connection
if ($conn->connect_error) {
    $t='mysqlError';
  die(json_encode(array("text" => $t/* and anything else you want */)));
}

// prepare and bind
$stmt = $conn->prepare("INSERT INTO Users (uname, pass, email) VALUES (?, ?, ?)");
$stmt->bind_param("sss", $uname, $pass, $email);

// set parameters and execute

$stmt->execute();
$text='success';
die(json_encode(array('text' => $text /* and anything else you want */)));
// $stmt->close();
$conn->close();


// $text='<p>Hello World </p>';
// die(json_encode(array('text' => $text /* and anything else you want */,'Name'=>$name)));
}


?>