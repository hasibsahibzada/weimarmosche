	
	// sidebar menu
	 $.ajax({url: 'http://10.0.0.48/weimarmosche/server/get_cathegory.php',
                    type: 'post',                  
                    async: 'true',
                    dataType: 'json',
                    beforeSend: function() {
                        // This callback function will trigger before data is sent
                        //console.log("before send");
                    },
                    complete: function() {
                        // This callback function will trigger on data sent/received complete
                        //console.log("completed");
                    },
                    success: function (result) {

                    	var sidebar_menu_list ="<ul>";

                      	for (i = 0; i < result.length; i++) {

                      		var cat_name = result[i].cat_name.toString();
                      		var cat_id   = result[i].cat_id;
   							sidebar_menu_list += '<li onclick =load_posts("' + cat_id + '")><a href="#">' + cat_name + '</a></li>';
						}

						sidebar_menu_list +="</ul>";

						// access the sidebar menu
						var sidebar_menu = document.getElementById("sidbarnav");

						// change the sidebar menu
						sidebar_menu.innerHTML = sidebar_menu_list;
                         
                    },
                    error: function (request,error) {
                        // This callback function will trigger on unsuccessful action               
                        alert('Network error has occurred please try again!');
                    }
                }); 

	


	// bottom menu
	if (localStorage.username){   // if the user is logged in

		var name = localStorage.getItem("name");

		//var PWDiv = document.getElementById("title");
		//PWDiv.innerHTML +="Login as " + name + "<br>";

		// change footbar menu
		var user_menu = "<ul> <li><a href='newfeed.html'>Post</a></li> <li><a href='prayertime.html'>Set prayer</a></li> <li><a href='#'' onclick= 'logout();''>Logout</a></li> </ul>";
		var footbar_menu = document.getElementById("FootbarMenu");

		footbar_menu.innerHTML = user_menu;


	}
	else {

		// change footbar menu
		var non_user_menu = "<ul> <li><a href='login.html'>Login</a></li> </ul>";


		var footbar_menu = document.getElementById("FootbarMenu");


		footbar_menu.innerHTML = non_user_menu;


	}




