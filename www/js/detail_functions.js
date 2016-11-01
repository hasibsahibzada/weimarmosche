

// load the post detail
function Load_Post_Detail(){

	// get the current post id that was clicked
	var post_id = window.localStorage.getItem("postid");

	// create the request url
	request_url = server_add + 'get_post_detail.php';
	console.log(request_url);
	// query the database to load that post
	$.ajax({url: request_url,
			data: {PostId: post_id},
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
				  
					
            		body_post += "<div class='row'>";

	   				body_post += "<div class='row'><div class='thumbnail'>";
						
					body_post += "<p>" + result.massage + "</p>";    
					
					body_post += "</div></div>";

					// access the post div 
					var post_div = document.getElementById("product_detail");

					// insert the new elements in the post div
					post_div.innerHTML = body_post;


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

	// create the request url 
	request_url = server_add + 'get_comments.php';

	// access the post div 
	var comment_div = document.getElementById("all_comments");

	// query the database to load that post
	$.ajax({url: request_url,
			data: {PostId: post_id},
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

		
					// insert the new elements in the post div
					comment_div.innerHTML = body_comment;
		

				} else {   // if something went wrong

            		body_comment += "<div class='thumbnail'><div class='row'>";
						
				
					body_comment += "<p>" + result[i].massage + "</p>";
		
					body_comment += "</div></div>";
					
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