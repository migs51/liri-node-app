




//============Twitter==================//
var twitter = require('twitter');
var twitterKeys = require('./keys.js').twitterKeys;
var T = new twitter(twitterKeys);


var params = {
	screen_name: "bobzm51",
	count: 20,
	q:"bobzm51" 
}

function getData() {
	T.get('search/tweets', params, function(err, data, response) {

		var tweets = data.statuses;
		for (var i = 0; i < tweets.length; i++){
			console.log(tweets[i].text)
			console.log(tweets[i].created_at);
		}
	});
}




//===========Spotify==============//
var spotify = require('spotify');


function getSong(){
	spotify.search({ type: 'track', query: command2 }, function(err, data) {
	    if ( err ) {
	        console.log('Error occurred: ' + err);
	        return;
	    }
	 
	   console.log(data.tracks.items);

	   var items = data.tracks.items;

	   for(i=0; i < items.length; i++){
	   	console.log(items[i].album.name);
	   }

	   for(i=0; i < items.length; i++){
	   	console.log(items[i].name);
	   }

	    for(i=0; i < items.length; i++){
	   	console.log(items[i].artists);
	   }

	    for(i=0; i < items.length; i++){
	   	console.log(items[i].preview_url);
	   }

	});
}

//======================= OMDB ===============================//

var request = require('request');
var queryUrl = 'http://www.omdbapi.com/?t=' + command2 +'&y=&plot=short&r=json';

function getMovie(){
	request(queryUrl, function(error, response, body){
		if(!error && response.statusCode == 200){
			console.log(JSON.parse(body)["Released"])
			console.log(JSON.parse(body)["Title"])
			console.log(JSON.parse(body)["imdbRating"])
			console.log(JSON.parse(body)["Country"])
			console.log(JSON.parse(body)["Language"])
			console.log(JSON.parse(body)["Plot"])
			console.log(JSON.parse(body)["Actors"])
			console.log(JSON.parse(body)["Released"])
			console.log(JSON.parse(body)["Released"])
		}
	});
}

//========================fs============================//

var fs = require('fs');

function doIt(){
fs.readFile("random.txt", "utf8", function(err,data){
	var output = data.split();
	for (var i=0; i<output.length; i++){
		console.log(output[i]);
	}

			function getSong(){
			spotify.search({ type: 'track', query: output[i] }, function(err, data) {
			    if ( err ) {
			        console.log('Error occurred: ' + err);
			        return;
			    }
			 
			   console.log(data.tracks.items);

			   var items = data.tracks.items;

			   for(i=0; i < items.length; i++){
			   	console.log(items[i].album.name);
			   }

			   for(i=0; i < items.length; i++){
			   	console.log(items[i].name);
			   }

			    for(i=0; i < items.length; i++){
			   	console.log(items[i].artists);
			   }

			    for(i=0; i < items.length; i++){
			   	console.log(items[i].preview_url);
			   }

			});
		}
		getSong();
});
}



// node arguments //



var command1 = process.argv[2];

var command2 = "";
var nodeArg = process.argv; 

for (var i=3; i<nodeArg.length; i++){
	command2 = nodeArg[i];
	
}



console.log(command2);


//======Switch Expression=======//

switch(command1 + command2){	
	case "my-tweets": 
		//do something
		getData();
		break;
	case "spotify-this-song" + command2:
		getSong();
		break;
	case "movie-this":
		getMovie();
		break;
	case "do-what-it-says":
		doIt();
		break;
	default:
		console.log("invalid value");
}



