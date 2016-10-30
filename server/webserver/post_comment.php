<?php

// get the connection to database
require_once('connect.php');


if (isset($_POST["PostId"]))
{
 
 // get the post ID
 $post_id 	= $_POST["PostId"];

 // get the user name
 $user_name = $_POST["UserName"];

 // get the user comment
 $user_comment = $_POST["UserComment"];

 // generate the current date TimeStamp in 24 hour format  (2016-10-07 23:43:12)
 $date = date('Y-m-d G:i:s');

 // prepare the sql statement 
 $sql ="INSERT INTO comments (Author,Date,post_id,comment_text) VALUES ('$user_name','$date','$post_id','$user_comment')";
 
 // execute the sql statement to the database and check for success

 if ($conn->query($sql) === TRUE) {

    $output = array('status' => true, 'massage' => "Success");
	echo json_encode($output);
  
  } 
 else {
	 $output = array('status' => false, 'massage' => $conn->error);
	echo json_encode($output);
  }

} 
else 
{
  
	//The post id is not set
	$output = array('status' => false, 'massage' => "PostId is not set");
	echo json_encode($output);

}



?>