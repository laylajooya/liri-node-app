require("dotenv").config();

var keys = require("./keys.js");

// SPOTIFY API and NODE
var SPOTIFY = require("node-spotify-api");
var spotify = new Spotify(keys.spotify);

// OMDB API
var omdb = (keys.omdb);

// BANDSINTOWN API
var bandsintown = (keys.bandsintown);
