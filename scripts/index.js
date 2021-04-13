// Set the starting score of the player to 0
let score = 0;

let panorama;

// Set different places where the player will be spawned
var places = [
    [
        {
            lat: 60.171001,
            lng: 24.93935,
        },
        {
            country: 'Finland',
        },
    ], // Helsinki, Finland
    [
        {
            lat: 48.858093,
            lng: 2.294694,
        },
        {
            country: 'France',
        },
    ], // Paris, France
    [
        {
            lat: 51.51002,
            lng: -0.13473,
        },
        {
            country: 'Great Britain',
        },
    ], // London, Great Britain
    [
        {
            lat: 41.8902,
            lng: 12.4922,
        },
        {
            country: 'Italy',
        },
    ], // Rome, Italy
    [
        {
            lat: 25.195302,
            lng: 55.272879,
        },
        {
            country: 'United Arab Emirates',
        },
    ], // Dubai, United Arab Emirates
    [
        {
            lat: 1.283404,
            lng: 103.863134,
        },
        {
            country: 'Singapore',
        },
    ], // Marina Bay, Singapore
    [
        {
            lat: 29.976768,
            lng: 31.135538,
        },
        {
            country: 'Egypt',
        },
    ], // Cairo, Egypt
    [
        {
            lat: 40.757876,
            lng: -73.985592,
        },
        {
            country: 'United States',
        },
    ], // New York, USA
];

let currentPlace = places[Math.floor(Math.random() * places.length)]; // Pick a random place to be spawned
let coordinates = currentPlace[0]; // Get coordinates
let country = currentPlace[1].country; // Get the name of the country

// Reload game environment when a round is over
let reconfigure = () => {
    document.getElementById('score').innerHTML = 'Your current score is: ' + score;
    currentPlace = places[Math.floor(Math.random() * places.length)];
    coordinates = currentPlace[0];
    country = currentPlace[1].country;

    initialize();
};

// Check if guess is correct and then execute reconfiguring function
const guess = () => {
    var guess = window.prompt('Where are we? ');
    if (guess === country) {
        score++;
        alert('Correct! Current Score: ' + score);
        reconfigure();
    } else {
        score = 0;
        alert('Incorrect! Current Score: ' + score);
        reconfigure();
    }
};

// Set and configure streetview
function initialize() {
    panorama = new google.maps.StreetViewPanorama(document.getElementById('street-view'), {
        position: coordinates,
        pov: {
            heading: 165,
            pitch: 0,
        },
        zoom: 1,
    });
}
