<?php header('content-type: application/json; charset=utf-8');
// get the connection to database
 require_once('connect.php');


if (isset($_GET["PostId"]))
{
 
 // get the post category
 $post_id = $_GET["PostId"];


 // prepare the query 
 $sql ="SELECT * FROM posts WHERE p_id = '$post_id'";

 
 // query the database
 $result = $conn->query($sql);

 if ($result->num_rows > 0) {  // Meaning the post is found
    	
    // make image folder path	
 	
	// make image folder path	
 	$image_folder_path = "http://weimarmoschee.byethost18.com/images/";

 	$row = $result->fetch_assoc();

	// create the full image url
	$img_url = $image_folder_path . $row['p_image'];

	// create associative array
	$post = array('title' => $row['p_name'], 'body' => $row['p_body'],'img_url' =>$img_url);

				
	// encode the array to json
	echo $_GET['callback'] . '('.json_encode($post).')';
	
	} 
	else {

		//There is no post to that category
		$output = array('status' => false, 'massage' => "no post found");
		echo $_GET['callback'] . '('.json_encode($output).')';

	}

} 
else 
{
  
	//The category id is not set
	$output = array('status' => false, 'massage' => "PostId is not set");
	echo $_GET['callback'] . '('.json_encode($output).')';

}



?>