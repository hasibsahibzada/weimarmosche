<?php header('Access-Control-Allow-Origin: *');

 // get the connection to database
 require_once('connect.php');


if (isset($_POST["category"]))
{
 
 // get the post category
 $cat_id = $_POST["category"];


 // prepare the query 
 $sql ="";

 if ($cat_id != "0"){ // Posts for only the category

	// query to the database about that category
 	$sql = "SELECT * FROM posts WHERE cat_id= '$cat_id' ";

 }
 else{	// All posts in the category
 	// query to the database about that category
 	$sql = "SELECT * FROM posts";

 }
 

 // query the database
 $result = $conn->query($sql);

 // all post array
 $all_posts = array();

 if ($result->num_rows > 0) {  // meaning the password and username is matched
    	
    // make image folder path	
 	$current_file_path = $_SERVER['HTTP_HOST'] . $_SERVER['REQUEST_URI'];
 	$current_path 		=  substr($current_file_path,0,strlen($current_file_path)-13); // 13 is the lenght of (get_posts.php)
 	$image_folder_path = "http://" . $current_path . "Images/";


	while($row = $result->fetch_assoc()) {

		// create the full image url
		$img_url = $image_folder_path . $row['p_image'];

	    // create associative array
	   	$output = array('title' => $row['p_name'], 'body' => $row['p_body'],'img_url' =>$img_url);

	    array_push($all_posts,$output);
			

		}

		// encode the array to json
		echo json_encode($all_posts);
	
	} 
	else {

		//There is no post to that category
		$output = array('status' => false, 'massage' => "");
	    echo json_encode($output);

	}



} 
else 
{
  
	//The category id is not set
	$output = array('wrong' => false, 'massage' => "cat is not set");
	echo json_encode($output);

}






	
?>