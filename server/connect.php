<?php

// database user 
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
