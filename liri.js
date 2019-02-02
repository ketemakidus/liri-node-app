var Spotify = require('node-spotify-api');

var dotenv = require("dotenv").config();

var keys = require("./keys");

var axiois = require("axios");

var fs = require("fs");

var request = require('request');

var spotify = new Spotify(keys.spotify);

var bandsintown = require('bandsintown')("https://rest.bandsintown.com/artists/?app_id=codingbootcamp");

bandsintown

  .getArtistEventList("")

  .then(function (events) {
  });
console.log(bandsintown);


var getresultspotify = function (songName) {

  if (songName === undefined) {

    console.log(songName);

    songName = "thriller";
    
    return (songName);
  }




  spotify.search({ type: 'track', query: songName }, function (err, data) {
    if (err) {
      return console.log('Error occurred: ' + err);
    }

    console.log(data.tracks.items[0].artists);

  });

}

var choose = function (caseinfo, functionData) {

  switch (caseinfo) {
    case "spotify-this-song":
      getresultspotify(functionData);
      break;
    default: console.log("unknown");
  }
};



var runme = function (arr1, arr2) {

  choose(arr1, arr2);
};
runme(process.argv[2], process.argv[3]

);



var getresultmovie = function (movieName) {

  request("http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=trilogy", function (error, response, body) {
    console.log('error:', error);
    console.log('statusCode:', response && response.statusCode);
    console.log('body:', body);
    console.log(JSON.stringify(movieName, null, 2));
    console.log("Title: " + JSON.stringify(movieName));
    			console.log("Year: " + JSON.stringify(Year).Year);
    			console.log("IMDB Rating: " + JSON.stringify(movieName));
    			console.log(" " + movieName);
    			console.log("Country: " + JSON.stringify(movieName).Country);
    			console.log("Language: " + JSON.stringify(movieName));
    			console.log("Plot: " + JSON.stringify(movieName).Plot);
    			console.log("Actors: " + JSON.stringify(movieName).Actors);	
  });

}
var choose = function (caseinfo, functionData) {

  switch (caseinfo) {
    case "movie-this":
      getresultmovie(functionData);
      break;
    default: console.log("unknown");
  }
};

var runme = function (arr1, arr2) {

  choose(arr1, arr2);
};
runme(process.argv[2], process.argv[3]

);


  fs.readFile("random.txt", "utf8", function (err, data) {
    if (err) {
      return
      console.log(data);
    }

    userInput = dataArr[0];
    userQuery = dataArr[1];

    userCommand(userInput, userQuery)

  });
