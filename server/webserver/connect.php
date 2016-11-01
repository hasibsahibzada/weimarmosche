<?php

// Online database  
/*
$username 	= "b18_19040626";
$password 	= "weimarmasjid12345";
$db_name  	= "b18_19040626_wmdb";

$servername = "sql112.byethost18.com";
*/


// local database
$username 	= "root";
$password 	= "root";
$db_name  	= "weimar_mosche";

$servername = "localhost";


// connection to database
$conn = new mysqli($servername, $username, $password, $db_name);

// check the database connection errors
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
