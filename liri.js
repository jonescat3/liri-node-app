require("dotenv").config();

var Twitter = require('twitter');

var keys = require("./keys.js");
    console.log(keys.twitter);

var Spotify = require('node-spotify-api');

// Capture the command passed to the app
var command = process.argv[2];

// Perform a switch/case on the `command` variable
switch(command) {
    // If the command is `my-tweets`
    case 'my-tweets':
        // Then execute the `myTweets` function
        myTweets();
        break;
    case 'spotify-this-song':
        spotifyThisSong();
        break;
    case 'movie-this':
        moviethis();
        break;
    case "doWhatItSays":
        doWhatItSays();
        break;
}

function myTweets() {
    console.log('Running my-tweets');

    var client = new Twitter(keys.twitter);
       
      var params = {screen_name: 'Trina China Foxx'};
      client.get('statuses/user_timeline', params, function(error, tweets, response) {
        if (!error) {
          console.log(tweets);
        for(var i = 0; i < tweets.length; i++){
            console.log(tweets[i].created_at);
            console.log(tweets[i].text);
        }
        }
      });
}
    // Set the user variable, give it a default value
    // You can learn more about how this works here:
    // https://codeburst.io/javascript-what-is-short-circuit-evaluation-ff22b2f5608c

function spotifyThisSong() {
    console.log('Running spotify-this-song');

var spotify = new Spotify({
  id: <f01bd02bed6a4713bece8ae7072dd8a9>,
  secret: <329fb510fd5a425ea820707078ee107a>
  for(var i = 0; i < tweets.length; i++){
            console.log(spotify[i].created_at);
            console.log(spotify[i].text);
});
spotify
  .request('https://api.spotify.com/v1/tracks/7yCPwWs66K8Ba5lFuU2bcx')
  .then(function(data) {
    console.log(data); 
  })
  .catch(function(err) {
    console.error('Error occurred: ' + err); 
  });




function movieThis() {
    console.log('Running movie-this');
}
function doWhatItSays(){
    doWhatItSays: ('Running do-what-it-says');
    console.log(doWhatItSays);
}


// command line call by entering:
// `node liri.js my-tweets`
// `node liri.js spotify-this-song '<song name here>'`
// `node liri.js movie-this '<movie name here>'
// 'node liri.js do-what-it-says'