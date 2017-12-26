<?php
header("Content-Type: text/html");
//$name = $_GET['name'];
extract($_GET);
$ctrl = ['+', '-', '/', 'x', "*"];

// echo "<response>";


// $arr = explode(" ", $text);


// if (count(array_intersect($arr, $ctrl)) === 0) {
//   // No values from array1 are in array 2
// } else {
//   // There is at least one value from array1 present in array2
// }
if ($text!="") {
	$text = str_replace("x", "*", $text);
	if (!in_array(substr($text, strlen($text)-1),$ctrl)) {
		echo "Ans = ";
		echo eval("echo $text;");
	}else{
		echo ".";
	}
	# code...
}
else echo ".";
// echo "</response>";

?>