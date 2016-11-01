<?php header('content-type: application/json; charset=utf-8');

 // get the connection to database
 require_once('connect.php');


if (isset($_GET["category"]))
{
 
 // get the post category
 $cat_id = $_GET["category"];


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

 if ($result->num_rows > 0) {  // meaning there are available posts 
    	
    // make image folder path	
 	$image_folder_path = "http://weimarmoschee.byethost18.com/images/";


	while($row = $result->fetch_assoc()) {

		// create the full image url
		$img_url = $image_folder_path . $row['p_image'];

	    // create associative array
	   	$output = array('p_id' => $row['p_id'],'title' => $row['p_name'], 'body' => $row['p_body'],'img_url' =>$img_url);

	    array_push($all_posts,$output);
			

		}

		// encode the array to json
		echo $_GET['callback'] . '('.json_encode($all_posts).')';
	
	} 
	else {

		//There is no post to that category
		$output = array('status' => false, 'massage' => "No post found");
		echo $_GET['callback'] . '('.json_encode($output).')';

	}



} 
else 
{
  
	//The category id is not set
	$output = array('status' => false, 'massage' => "category is not set");
	echo $_GET['callback'] . '('.json_encode($output).')';

}


?>