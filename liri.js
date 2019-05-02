// To read and set any environment variables with dotenv
require("dotenv").config();

// Import keys.js and store as variable
var keys = require("./keys.js");

// SPOTIFY API and NODE
var SPOTIFY = require("node-spotify-api");
var spotify = new Spotify(keys.spotify);

// OMDB API
var omdb = (keys.omdb);

// BANDSINTOWN API
var bandsintown = (keys.bandsintown);

// User input and command
var userInput = process.argv[2];
var userQuery =  process.argv[3];

function userCommand(userInput, userQuery) {
    switch (userInput) {
        case "concert-this":
            concertThis();
            break;
        case "spotify-this-song":
            spotifyThis();
            break;
        case "movie-this":
            movieThis();
            break;
        case "do-what-it-says":
            doThis();
            break;

    }
}

userCommand(userInput, userQuery);

function concertThis(){

}

function spotifyThis(){

}

function movieThis(){

}

function doThis(){
    
}

