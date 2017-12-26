<?php  
header("Content-Type: text/html");
//$name = $_GET['name'];
extract($_GET);

echo "<response>";
$myFam = ['NAFIS', 'NABIL', 'FITRI', 'FIRA', 'AFIF','HABIBI', 'ALYA'];
if (in_array(strtoupper($name), $myFam )) {
	echo "Hello ".htmlentities($name). ", my family";
}elseif (trim($name)=="") {
	echo("Hey who are you? Please enter your name..");
}else{
	echo "Hello ".htmlentities($name);
}
echo "</response>";

?>