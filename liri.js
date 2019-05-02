// To read and set any environment variables with dotenv
require("dotenv").config();

// Use Axios for requests and file systems standard to Node
let axios = require("axios");
const fs = require("fs");

// Require moment
const moment = require("moment");

// Import keys.js and store as variable
const keys = require("./keys.js");

// SPOTIFY API and NODE
const Spotify = require("node-spotify-api");
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
            concertThis(userQuery);
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

// Search Bandsintown artist events API for an artist and render: venue name, venue location, event date(MM/DD/YYYY)
// https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp

function concertThis(artist){
    axios.get("https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp")
        .then(function (response) {
            // console.log(response)
            console.log("Venue name:", response.data[0].venue.name); 
            console.log("Venue location:", response.data[0].venue.city);
            // Format event date
            var eventDate = moment(response.data[0].datetime).format("MM/DD/YYYY");
            console.log("Event date:", eventDate);

        })
        .catch(function (error) {
            console.log(error);
        });

}

// Show the following info about song: artist(s), song name, preview link of song, album
// If no song is provided, default to "The Sign" by Ace of Base
function spotifyThis(){

}

// Output the following info: title, year, IMDB rating, Rotten Tomatoes rating, country, language, plot, actors
// If user doesn't type movie, output "Mr. Nobody" data
function movieThis(){

}

// Take the text inside random.txt and use it call one of LIRI's commands
function doThis(){

}

