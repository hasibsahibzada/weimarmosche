	
function load_sidebar_menu(){


	// create the request url
	var request_url = server_add + 'get_cathegory.php';
	// sidebar menu
	 $.ajax({url: request_url,
                    type: 'post',                  
                    async: 'true',
                    dataType: 'jsonp',
                    beforeSend: function() {
                        // This callback function will trigger before data is sent
                        //console.log("before send");
                    },
                    complete: function() {
                        // This callback function will trigger on data sent/received complete
                        //console.log("completed");
                    },
                    success: function (result) {
                    	sidebar_menu_list ="<ul>";

                      	for (i = 0; i < result.length; i++) {

                      		var cat_name = result[i].cat_name.toString();
                      		var cat_id   = result[i].cat_id;
   							sidebar_menu_list += '<li onclick =load_posts("' + cat_id + '")><a href="#">' + cat_name + '</a></li>';
						}

						sidebar_menu_list +="</ul>";

						
						// change the sidebar menu
						sidebar_menu.innerHTML = sidebar_menu_list;
                         
                    },
                    error: function (request,error) {
                        // This callback function will trigger on unsuccessful action               
                        //alert('Network error has occurred please try again!');
                        // access the sidebar menu
						var sidebar_menu = document.getElementById("sidbarnav");

						// change the sidebar menu
						sidebar_menu.innerHTML = "Server error";
                    }
                }); 

	
}


function load_bottom_menu(){
	

	
	// Get the current page name
	var path = window.location.href;
	var page = path.split("/").pop();
		
	// if the user is logged in
	if (localStorage.username){   

		//var name = localStorage.getItem("name");
		//var PWDiv = document.getElementById("title");
		//PWDiv.innerHTML +="Login as " + name + "<br>";


		if (page == "detail.html"){ // if detail page

			bottom_menu_list = "<ul> <li><a href='newfeed.html'>Comment</a></li> </ul>";

		}
		else {// if index page

			bottom_menu_list = "<ul> <li><a href='newfeed.html'>Post</a></li> <li><a href='prayertime.html'>Set prayer</a></li> <li><a href='#'' onclick= 'logout();''>Logout</a></li> </ul>";

		}

	}
	else {

		if (page == "detail.html"){ // if detail page

			bottom_menu_list = "<ul> <li><a href='newfeed.html'>Comment</a></li> </ul>";

		}
		else {// if index page

			// change footbar menu
			bottom_menu_list = "<ul> <li><a href='login.html'>Login</a></li> </ul>";

		}


	}


	// write the menu content
	footbar_menu.innerHTML = bottom_menu_list;


}

