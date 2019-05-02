// To read and set any environment variables with dotenv
require("dotenv").config();

// Import keys.js and store as variable
const keys = require("./keys.js");

// SPOTIFY API and NODE
const SPOTIFY = require("node-spotify-api");
const spotify = new Spotify(keys.spotify);

// OMDB API
let omdb = (keys.omdb);

// BANDSINTOWN API
let bandsintown = (keys.bandsintown);

// User input and command
let userInput = process.argv[2];
let userQuery =  process.argv[3];

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
        default:
            console.log("Sorry idgi");
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

