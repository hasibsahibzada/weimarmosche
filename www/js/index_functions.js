	
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




	function onConfirm(buttonIndex) {
        alert('You selected button ' + buttonIndex);
    }

    // Show a custom confirmation dialog
    function showConfirm() {
        navigator.notification.confirm(
            'You are the winner!', // message
             onConfirm,            // callback to invoke with index of button pressed
            'Game Over',           // title
            ['Yes','No']         // buttonLabels
        );
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

		// create the request url
		request_url = server_add + 'get_posts.php';
		console.log(request_url);

		$.ajax({url: request_url,
			data: {category: cat_id},
            type: 'GET',                  
            async: 'true',
            dataType: 'jsonp',
            
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
            	if (typeof result.status === "undefined") {
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

					var all_body_post ="<div class='row'><div class='thumbnail'>";
					all_body_post += "<p>";

					all_body_post += result.massage ;

					all_body_post += "</p>";


					all_body_post += "</div></div></div>"

					// access the post div 
					var post_div = document.getElementById("posts");

					// insert the new elements in the post div
					post_div.innerHTML = all_body_post;


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