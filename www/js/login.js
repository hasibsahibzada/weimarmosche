
// check username and password 
$("#login").click(function CheckPW(){

            
                var PWDiv = document.getElementById("loginForm");
                var Uname = document.getElementById("user").value;
                var Pword = document.getElementById("pass").value;

                // Username should be checked in online database 
                // demo account bellow
                var db_user = "hasib";
                var db_pass = "123456";

                // if username and password match
                if (Uname == db_user && Pword == db_pass ) {

                    PWDiv.innerHTML +="Success" + Uname + "<br>";

                    // Provide presistant connection
                    LogInit(Uname);


                }
                // else show error
                else {

                    PWDiv.innerHTML +="Login failed ! " + "<br>";

                }


                }
            );


         
// login Initialization 
 function LogInit(username){


                var keyName = window.localStorage.key(0);

                window.localStorage.setItem("key", username);

                window.location.href = "index.html";


                // get back the value
                // var value = window.localStorage.getItem("key");

                // remove key 
                //  window.localStorage.removeItem("key");
                //  window.localStorage.clear();
                
 }


