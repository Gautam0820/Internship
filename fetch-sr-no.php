<?php  
 //fetch.php  
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: access");
header("Access-Control-Allow-Methods: GET");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");
//---------------------------------
//Database Connection
//----------------------------------
     include '../config.php';
//----------------------------------
// End Database Connection
//----------------------------------      
$json = file_get_contents('php://input');
 
 // decoding the received JSON and store into $obj variable.
 $obj = json_decode($json,true);
 
// Populate User email from JSON $obj array and store into $email.
// $boothFrom= $_GET['boothFrom'];
// $boothTo= $_GET['boothTo'];

$value=array();
//Applying User Login query with email and password match.
/*$Sql_Query ="SELECT booth.b_id, booth.b_booth , booth.b_srnofr,booth.b_srnoto, users.fulname,users.image,users.phone,booth.$flagType as 'totflagNo'   from booth
LEFT JOIN users on booth.b_booth = users.userToken
where booth.b_partCode ='$pId' ";*/
$Sql_Query ="SELECT * FROM `f00udcv` WHERE sy = '00' and rt = 'NN' and ky like 'W%' ";

$result = $mysqli->query($Sql_Query);
if (@$result->num_rows >0) {
 	while($row[] = $result->fetch_assoc()) {
	 	$item = $row;
	 	$json = json_encode($item,JSON_PRETTY_PRINT);
	}
	echo @$json;
} else {
 	echo json_encode($value,JSON_PRETTY_PRINT);;
}
 	

mysqli_close($con);
?>