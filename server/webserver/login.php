<?php header('content-type: application/json; charset=utf-8');

	//the database connection is included
 	require_once('connect.php');

    // get username and password
    $username = $_GET['username'];
    $password = $_GET['password'];

    // create the SQL statement
    $sql = "select * from account WHERE username ='$username' AND password ='$password'";

    // query the database
    $result = $conn->query($sql);

  
    if ($result->num_rows > 0) {  // meaning the password and username is matched

		    while($row = $result->fetch_assoc()) 
		    {

		    //get the user's firstname
		    $name 	   = $row['name'];
		    $user_name = $row['username'];
		    // Create a response message
		    $output = array('status' => true, 'name' => $name,'username'=>$user_name);

		    // encode the array to json format 
			echo $_GET['callback'] . '('.json_encode($output).')';

		    }

	} else {

		// The username or password did not matched
		$output = array('status' => false, 'massage' => "login failed");
	    echo $_GET['callback'] . '('.json_encode($output).')';

		}

   
?>






