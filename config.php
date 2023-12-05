<?php 

$con=mysqli_connect("localhost","Intern123","Kamsoft123","eployee_info");
$connect = new PDO("mysql:host=localhost;dbname=eployee_info", "Intern123", "Kamsoft123");
$mysqli = new mysqli("localhost", "Intern123", "Kamsoft123", "eployee_info");
// Check connection
if ($con->connect_error) {
    die("Connection failed: " . $con->connect_error);

}
?>