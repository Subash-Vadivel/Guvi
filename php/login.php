<?php
require '../assets/vendor/autoload.php';
$mongo  = new MongoDB\Client("mongodb+srv://admin:admin@cluster0.oign8db.mongodb.net/?retryWrites=true&w=majority");
$collection = $mongo->Test->Users;
$document = $collection->findOne(['name' => 'subash']);
// $database->echo(['ping' => 1]);
var_dump($document);
echo "working";
// phpinfo()
?>