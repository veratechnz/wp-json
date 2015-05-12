// My Custom JS


//data is already a preset object via the json api. 
function listPosts(data){

	var output = '<h3> Your Blog Posts </h3>';

		// //'searchposts' links the unordered list to the forms id
		// //+= means the previous 'output' variable content is retained. 
		// output += '<ul data-role="listview" data-filter="true" data-input="#searchposts">';

		//Now we will go through each list element using jQuery .each
		//each post will be scanned by the function key value.
		$.each(data.posts, function(index, val){
			output += '<li>';
			output += '<a href="#blogpost" onclick="showPost(' + val.id + ')">';
			// console.log(val.attachments[0].url);
			output += '<h3>' + val.title + '</h3>';
			//Here we shorten the paragraph to 60 characters. 
			var str = val.excerpt;
			var paraInfo = str.slice(0, 60);
			output += '<p>' + paraInfo + '</p>';
			//Closing off the the closing html tags
			output += '</a>';
			output += '</li>';

		});//Go through each post

		output += '</ul>';//Close the unordered list. 

		//Use Jquery to add the variable content to the html
		$('#postList').html(output);

}//listPosts ends





function showPost(id){

	$.getJSON('http://veratech.co.nz/blog/?json=get_post&post_id=' + id + '&callback=?', function(data){
			var output = '<h3>' + data.post.title + '</h3>';
			output += data.post.content;
			$('#myPost').html(output);
	});

 } //listPosts Ends





 function listVideos(data){
 	//The data varaible acceses the youtube object data.
 	console.log(data);
 	for (var i = 0; i < data.feed.entry.length; i++) {
 		var title = data.feed.entry[i].title.$t;
 		var thumbnail = data.feed.entry[i].media$group.media$thumbnail[0].url;
 		var description = data.feed.entry[i].media$group.media$description.$t;
 		var id = data.feed.entry[i].id.$t.substring(38);

 		//Here is a modulo or remaider variable. 
 		var blocktype = ((i % 2 === 1)) ? 'b' : 'a';

 		var output = '<div class="ui-block' + blocktype + '"> \
					  <h3 class="movieTitle">' + title + '</h3> \
					  <img src="' + thumbnail + '"alt="' + title + '"> \
					  </div>';

 	} //entries loop
 	$('#videoList').html(output);
 } //listVideos ends

    

