<?php

 header('Access-Control-Allow-Origin: *');
 
    // We don't need action for this tutorial, but in a complex code you need a way to determine Ajax action nature
    $action = $_POST['action'];
     
    // Decode parameters into readable PHP object
    parse_str($_POST['formData'], $output);
  
    // Get username
    $username = $output['username'];
    // Get password
    $password = $output['password'];
  
    // Let's say everything is in order
    $output = array('status' => true, 'massage' => $username);
    echo json_encode($output);
?>