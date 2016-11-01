<?php header('content-type: application/json; charset=utf-8');

// get the connection to database
require_once('connect.php');


if (isset($_POST["PostId"]))
{
 
 // get the post ID
 $post_id = $_POST["PostId"];


 // prepare the query 
 $sql ="SELECT * FROM comments WHERE post_id = '$post_id'";

 
 // query the database
 $result = $conn->query($sql);

  // all post array
 $all_comments = array();

 if ($result->num_rows > 0) {  // Meaning the comments are there
    	 	
 	while($row = $result->fetch_assoc()) {

	    // create associative array
	   	$comment = array('author' => $row['Author'],'date' => $row['Date'],'comment' => $row['comment_text']);

	   	// push the comment to the array
	    array_push($all_comments,$comment);
			

		}		

	// encode the array to json
	echo $_GET['callback'] . '('.json_encode($all_comments).')';
	
	} 
	else {

		//There is no comment to that category
		$output = array('status' => false, 'massage' => "no comments found");
		echo $_GET['callback'] . '('.json_encode($output).')';

	}

} 
else 
{
  
	//The post id is not set
	$output = array('wrong' => false, 'massage' => "PostId is not set");
	echo $_GET['callback'] . '('.json_encode($output).')';

}



?>