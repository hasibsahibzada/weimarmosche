<?php header('content-type: application/json; charset=utf-8');

	
	//the database connection is included
 	require_once('connect.php');


 	// sql satetment
 	$sql = "SELECT * FROM category";

 	// query the database
    $result = $conn->query($sql);

    // create the array
    $category = array();


    if ($result->num_rows > 0) { 

    	// include the All keyword for category
    	$output = array('cat_id' => '0', 'cat_name' => 'All');
    	
    	// push the category to array
		array_push($category,$output);

		while($row = $result->fetch_assoc()) {

			$output = array('cat_id' => $row['cat_id'], 'cat_name' => $row['cat_name']);

		    // push the category to array
		    array_push($category,$output);

		}

		// encode the array to json format
		echo $_GET['callback'] . '('.json_encode($category).')';

	} 
	else {

		// The categories were not found
		$output = array('status' => false, 'massage' => "No category found");
		echo $_GET['callback'] . '('.json_encode($output).')';

	}

	
?>