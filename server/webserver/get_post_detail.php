<?php header('Access-Control-Allow-Origin: *');
// get the connection to database
 require_once('connect.php');


if (isset($_POST["PostId"]))
{
 
 // get the post category
 $post_id = $_POST["PostId"];


 // prepare the query 
 $sql ="SELECT * FROM posts WHERE p_id = '$post_id'";

 
 // query the database
 $result = $conn->query($sql);

 if ($result->num_rows > 0) {  // Meaning the post is found
    	
    // make image folder path	
 	$current_file_path = $_SERVER['HTTP_HOST'] . $_SERVER['REQUEST_URI'];
 	$current_path 		=  substr($current_file_path,0,strlen($current_file_path)-19); // 13 is the lenght of (get_post_detail.php)
 	$image_folder_path = "http://" . $current_path . "Images/";

 	$row = $result->fetch_assoc();

	// create the full image url
	$img_url = $image_folder_path . $row['p_image'];

	// create associative array
	$post = array('title' => $row['p_name'], 'body' => $row['p_body'],'img_url' =>$img_url);

				
	// encode the array to json
	echo json_encode($post);
	
	} 
	else {

		//There is no post to that category
		$output = array('status' => false, 'massage' => "no post found");
	    echo json_encode($output);

	}

} 
else 
{
  
	//The category id is not set
	$output = array('wrong' => false, 'massage' => "PostId is not set");
	echo json_encode($output);

}



?>