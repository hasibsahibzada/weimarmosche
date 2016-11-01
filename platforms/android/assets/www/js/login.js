
 
// check username and password 
$("#login").click(function CheckPW(){

    if($('#username').val().length > 0 && $('#password').val().length > 0){

            var PWDiv = document.getElementById("loginForm");
            var Uname = document.getElementById("username").value;
            var Pword = document.getElementById("password").value;
            
            // create the request url
            request_url = server_add + 'login.php';

            $.ajax({url: request_url,
                    data: {username:Uname, password: Pword},
                    type: 'GET',                  
                    async: 'true',
                    dataType: 'jsonp',
                    beforeSend: function() {
                        // This callback function will trigger before data is sent
                        console.log("beforesend");
                    },
                    complete: function() {
                        // This callback function will trigger on data sent/received complete
                        console.log("completed");
                    },
                    success: function (result) {
                        if(result.status) { // If the status is true
                            console.log("login success!!");

                            // save username and name to Provide presistant connection
                            LogInit(result.name,result.username);


                        } else {
                            console.log(result.massage);
                            PWDiv.innerHTML +="Login failed ! " + "<br>";
                        }
                    },
                    error: function (request,error) {
                        // This callback function will trigger on unsuccessful action               
                        alert('Network error has occurred please try again!');
                    }
                });              
        } else {
            //alert('Please fill all necessary fields!');
            PWDiv.innerHTML +="please fill all fields" + "<br>";
        }  
    return false;

    }
);


         
// login Initialization 
 function LogInit(name, username){

        window.localStorage.setItem("username", username);

        window.localStorage.setItem("name",name);
        
        window.location.href = "index.html";


                // get back the value
                // var value = window.localStorage.getItem("key");

                // remove key 
                //  window.localStorage.removeItem("key");
                //  window.localStorage.clear();
                
 }



//  cancel button
$("#cancel").click(function cancel_login(){

        // redirect back to index page
        window.location.href = "index.html";
 return false;

    }
);



