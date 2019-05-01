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

// https://github.com/kat3ng/liri-node-app/blob/master/liri.js
// https://github.com/the-Coding-Boot-Camp-at-UT/UTAUS201902FSF5/blob/master/10-nodejs/02-Homework/Instructions/homework_instructions.md
