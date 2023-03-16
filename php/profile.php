<?php
require '../assets/vendor/autoload.php';

if ($_SERVER['REQUEST_METHOD'] == 'POST')
{
    header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept');
header('Access-Control-Allow-Methods: POST, GET, OPTIONS');



$email=$_POST['Email'];


// MongoDB for using Extra details about users

$mongo  = new MongoDB\Client("mongodb+srv://admin:admin@cluster0.oign8db.mongodb.net/?retryWrites=true&w=majority");
$collection = $mongo->Test->Users;
// $database->echo(['ping' => 1]);
$cursor = $collection->find([
  'email' => $email
]);
foreach ($cursor as $document) {
    $cur= $document;
 }
  $t='alreadyExist';
  die(json_encode(array("email" => $cur["email"],"DOB"=>$cur["DOB"],"phone"=>$cur["phone"],"name"=>$cur["name"],"id"=>$cur["gid"])));
  exit();





}


?>