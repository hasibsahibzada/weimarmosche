	
	// scroll feature functions
	

	function scroll_feature() {
			appscroll = new iScroll('PageWrapper');
			//appscroll = new iScroll('PageWrapper', { vScrollbar: true });

	}


	function load_scroll(){

		document.addEventListener('DOMContentLoaded', scroll_feature, false);

		//document.addEventListener('touchmove', function (e) { e.preventDefault(); }, false);

		//document.addEventListener('DOMContentLoaded', scroll_feature, false);

		//document.addEventListener('DOMContentLoaded', scroll_feature, false);

	}





	// logout 
	function logout(){

				// clear the storage
                window.localStorage.removeItem("key");
                window.localStorage.clear();
                window.location.href = "index.html";

	}

	function view_detail(postid) {

			   var keyName = window.localStorage.key(1);

               window.localStorage.setItem("postid", postid);

		       window.location.href = "detail.html";

	}

	function load_posts(cat_id){

		$.ajax({url: 'http://10.0.0.48/weimarmosche/server/webserver/get_posts.php',
			data: {category: cat_id},
            type: 'post',                  
            async: 'true',
            dataType: 'json',
            
            beforeSend: function() {
                // This callback function will trigger before data is sent
                console.log("post requesting..");
                },

            complete: function() {
                // This callback function will trigger on data sent/received complete
                console.log("posts completed");
                    },

            success: function (result) {
            	// if posts available to the category
            	if (typeof result.status === "undefined" && typeof result.wrong === "undefined") {
				   	var all_body_post ="";
				    for (i = 0; i < result.length; i++) {

				    	all_body_post +="<div class='row'><div class='thumbnail'>";

	   					all_body_post += '<div onclick="view_detail(\'' + result[i].p_id + '\')">';

	   					all_body_post += "<h3>" + result[i].title + "</h3>";

	   					all_body_post += "<p>";

	   					all_body_post += result[i].body;

	   					all_body_post += "</p>";

	   					all_body_post += "<img src='" + result[i].img_url +"' class='img-responsive' style='margin-left: auto; margin-right: auto;'>";
	   					all_body_post += "</div></div></div>"
					}
		
					// access the post div 
					var post_div = document.getElementById("posts");

					// insert the new elements in the post div
					post_div.innerHTML = all_body_post;



				} else {   // if something went wrong
				  
					
            		if (typeof result.status === "undefined") {// meaning there is no posts
            		}

            		else {

					var all_body_post ="<div class='row'><div class='thumbnail'>";
					all_body_post += "<p>";

					all_body_post += "There is no post for this category!" ;

					all_body_post += "</p>";


					all_body_post += "</div></div></div>"

					// access the post div 
					var post_div = document.getElementById("posts");

					// insert the new elements in the post div
					post_div.innerHTML = all_body_post;

            		}

            		if (typeof result.wrong === "undefined") {// meaning there is no posts

            		}
            		else {

					var all_body_post ="<div class='row'><div class='thumbnail'>";
					all_body_post += "<p>";

					all_body_post += "Something went wrong!" ;

					all_body_post += "</p>";


					all_body_post += "</div></div></div>"

					// access the post div 
					var post_div = document.getElementById("posts");

					// insert the new elements in the post div
					post_div.innerHTML = all_body_post;

            	}	

				}

            	
                
               
        	},

        	error: function (request,error) {
            	// This callback function will trigger on unsuccessful action  

                //alert('Network error has occurred please try again!');
                var all_body_post ="<div class='row'><div class='thumbnail'>";
					all_body_post += "<p>";

					all_body_post += "network Something went wrong!" ;

					all_body_post += "</p>";


					all_body_post += "</div></div></div>"

					// access the post div 
					var post_div = document.getElementById("posts");

					// insert the new elements in the post div
					post_div.innerHTML = all_body_post;
            }

        }); 

	}