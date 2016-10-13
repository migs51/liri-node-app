var request = require('request');
var fs = require('fs');
var inquirer = require('inquirer');


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

/*spotify.get({query, hollaback)*/

var spotify = require('spotify');
 
spotify.get({ type: 'track', query: 'dancing in the moonlight' }, function(err, data) {
    if ( err ) {
        console.log('Error occurred: ' + err);
        return;
    }
 
   console.log(data);
});






// node argument //

var nodeArg = process.argv; 

var command = "";

for (var i=2; i<nodeArg.length; i++){
	command = nodeArg[i];
}

console.log(command);


//======Switch Expression=======//

switch(command){	
	case "my-tweets": 
		//do something
		getData();
		break;
	case "spotify-this-song '<song name here>'":
		//do something
		break;
	case "movie-this":
		//do something
		break;
	case "do-what-it-says":
		//do something
		break;
	default:
		console.log("invalid value");
}



