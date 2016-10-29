

// load the post detail
function Load_Post_Detail(){

	// get the current post id that was clicked
	var post_id = window.localStorage.getItem("postid");


	//var postname = document.getElementById("product_detail");

	//postname.innerHTML = postid + " is the thing we want to show <br>";


	// query the database to load that post
	$.ajax({url: 'http://10.0.0.48/weimarmosche/server/webserver/get_post_detail.php',
			data: {PostId: post_id},
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
				   	var body_post ="";

				   	console.log(result);

				   	body_post += "<div class='row'>";

				   	body_post += "<h3 style='text-align:center;' >" + result.title + "</h3>";
					
	   				body_post += "<img src='" + result.img_url +"' class='img-responsive' style='margin-left: auto; margin-right: auto;'></div>";

	   				body_post += "<div class='row'><div class='thumbnail'>";
						
					body_post += "<p>" + result.body + "</p>";    
					
					body_post += "</div></div>";

					// access the post div 
					var post_div = document.getElementById("product_detail");

					// insert the new elements in the post div
					post_div.innerHTML = body_post;

					

				} else {   // if something went wrong
				  
					
            		if (typeof result.status === "undefined") {// meaning there is no posts
            		
            		}

            		else {

            		/*
					var all_body_post ="<div class='row'><div class='thumbnail'>";
					all_body_post += "<p>";

					all_body_post += "There is no post for this category!" ;

					all_body_post += "</p>";


					all_body_post += "</div></div></div>"

					// access the post div 
					var post_div = document.getElementById("posts");

					// insert the new elements in the post div
					post_div.innerHTML = all_body_post;

					*/
            		}

            		if (typeof result.wrong === "undefined") {// meaning there is no posts

            		}
            		else {

            			/*
					var all_body_post ="<div class='row'><div class='thumbnail'>";
					all_body_post += "<p>";

					all_body_post += "Something went wrong!" ;

					all_body_post += "</p>";


					all_body_post += "</div></div></div>"

					// access the post div 
					var post_div = document.getElementById("posts");

					// insert the new elements in the post div
					post_div.innerHTML = all_body_post;
					
						*/
            	}	

				}

            	
                
               
        	},

        	error: function (request,error) {
            	// This callback function will trigger on unsuccessful action  

                //alert('Network error has occurred please try again!');
                /*
                var all_body_post ="<div class='row'><div class='thumbnail'>";
					all_body_post += "<p>";

					all_body_post += "network Something went wrong!" ;

					all_body_post += "</p>";


					all_body_post += "</div></div></div>"

					// access the post div 
					var post_div = document.getElementById("posts");

					// insert the new elements in the post div
					post_div.innerHTML = all_body_post;

					*/
            }

        }); 

	}




// post comments
function Load_Post_Comments(){

// get the current post id that was clicked
	var post_id = window.localStorage.getItem("postid");

// query the database to load that post
	$.ajax({url: 'http://10.0.0.48/weimarmosche/server/webserver/get_comments.php',
			data: {PostId: post_id},
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
				   	var body_comment ="";

				   	for (i = 0; i < result.length; i++) {

				   		body_comment += "<div class='thumbnail'><div class='row'>";
						
						body_comment += "<div class='col-xs-4 col-sm-4 col-md-4'>";

						body_comment += "<img src='img/uc.png' class='img-responsive'></div>";

						body_comment += "<div class='col-xs-8 col-sm-8 col-md-8'>";	

						body_comment +=	"<h4>" + result[i].author +"</h4>";

						body_comment += "<h5>" + result[i].date +"</h5></div></div>";

						body_comment += "<div class='row'><div class='col-md-9'>";

						body_comment += "<p>" + result[i].comment + "</p>";
		
						body_comment += "</div></div></div>";

				   	}

			

					// access the post div 
					var comment_div = document.getElementById("all_comments");

					// insert the new elements in the post div
					comment_div.innerHTML = body_comment;
		

				} else {   // if something went wrong
				  
					
            		if (typeof result.status === "undefined") {// meaning there is no posts
            		
            		}

            		else {

            		/*
					var all_body_post ="<div class='row'><div class='thumbnail'>";
					all_body_post += "<p>";

					all_body_post += "There is no post for this category!" ;

					all_body_post += "</p>";


					all_body_post += "</div></div></div>"

					// access the post div 
					var post_div = document.getElementById("posts");

					// insert the new elements in the post div
					post_div.innerHTML = all_body_post;

					*/
            		}

            		if (typeof result.wrong === "undefined") {// meaning there is no posts

            		}
            		else {

            			/*
					var all_body_post ="<div class='row'><div class='thumbnail'>";
					all_body_post += "<p>";

					all_body_post += "Something went wrong!" ;

					all_body_post += "</p>";


					all_body_post += "</div></div></div>"

					// access the post div 
					var post_div = document.getElementById("posts");

					// insert the new elements in the post div
					post_div.innerHTML = all_body_post;
					
						*/
            	}	

				}

            	
                
               
        	},

        	error: function (request,error) {
            	// This callback function will trigger on unsuccessful action  

                //alert('Network error has occurred please try again!');
                /*
                var all_body_post ="<div class='row'><div class='thumbnail'>";
					all_body_post += "<p>";

					all_body_post += "network Something went wrong!" ;

					all_body_post += "</p>";


					all_body_post += "</div></div></div>"

					// access the post div 
					var post_div = document.getElementById("posts");

					// insert the new elements in the post div
					post_div.innerHTML = all_body_post;

					*/
            }

        }); 



}