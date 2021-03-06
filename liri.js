var Spotify = require('node-spotify-api');

var dotenv = require("dotenv").config();

var keys = require("./keys");

var axiois = require("axios");

var fs = require("fs");

var request = require('request');

var spotify = new Spotify(keys.spotify);

var choose = function (caseinfo, functionData) {

  switch (caseinfo) {
    case "spotify-this-song":
      getresultspotify(functionData);
      break;
    case "movie-this":
      getresultmovie(functionData);
      break;
    case "do-this":
      bandsintown(functionData);
      break;
    case "read-file":
      readFile(functionData);
      break;
    default: console.log("unknown");
  }
};
var getresultspotify = function (songName) {

  if (songName === undefined) {
    return (songName);
  }

  spotify.search({ type: 'track', query: songName }, function (err, data) {
    if (err) {
      return console.log('Error occurred: ' + err);
    }

    console.log(data.tracks.items[0].artists);

  });
  console.log(songName);

  songName = "thriller";
}
var getresultmovie = function (movieName) {

  request("http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=trilogy", function (error, response, body) {

    console.log('statusCode:', response && response.statusCode);
    console.log('error:', error);

    var jsondata = JSON.parse(body);

    console.log("Title:" + jsondata.Title);
    console.log("Year: " + jsondata.Year);
    console.log("Rated: " + jsondata.Rated);
    console.log("Country: " + jsondata.Country);
    console.log("Language: " + jsondata.Language);
    console.log("Plot: " + jsondata.Plot);
    console.log("Actors: " + jsondata.Actors);
  });

}

var runme = function (arr1, arr2) {

  choose(arr1, arr2);
};
runme(process.argv[2], process.argv[3]

);


var runme = function (arr1, arr2) {

  choose(arr1, arr2);
};
runme(process.argv[2], process.argv[3]

);

var bandsintown = function (bandname) {

require('bandsintown')("https://rest.bandsintown.com/artists/?app_id=codingbootcamp");

bandsintown

  .getArtistEventList("")

  .then(function (events) {
  });
}


var readFile= function () {
  fs.readFile("random.txt", "utf8", function (error, data) {
    if (error)
      throw error;

    var dataArr = data.split(",")
    if (dataArr.length == 2) {


      pick(dataArr[0], dataArr[1]);
    } else if (dataArr.length == 1) {
      pick(dataArr[0]);
    }
  });
  console.log(readFile);
}
readFile();


