//ITERATION 1

const charactersArray = []; 

var mrGreen = {
    first_name: 'Jacob', 
    last_name: 'Green', 
    color: 'green', 
    description: 'He has a lot of connections', 
    age: 45, 
    image: 'https://pbs.twimg.com/profile_images/506787499331428352/65jTv2uC.jpeg', 
    occupation: 'Entrepreneur'
}; 

var drOrchid = {
    first_name: 'Doctor', 
    last_name: 'Orchid', 
    color: 'white', 
    description: 'PhD in plant toxicology. Adopted daughter of Mr. Boddy', 
    age: 26, 
    image: 'http://www.radiotimes.com/uploads/images/Original/111967.jpg',
    occupation: 'Scientist', 
}; 

var profPlum = {
    first_name: 'Victor', 
    last_name: 'Plum', 
    color: 'purple', 
    description: 'Billionaire video game designer',
    age: 22, 
    image: 'https://metrouk2.files.wordpress.com/2016/07/professor-plum.jpg', 
    occupation: 'Designer', 
}; 

var missScarlet = {
    first_name: 'Kasandra', 
    last_name: 'Scarlet', 
    color: 'red', 
    description: 'She is an A-list movie star with a dark past', 
    age: 31, 
    image: 'https://metrouk2.files.wordpress.com/2016/07/miss-scarlett.jpg', 
    occupation: 'Actor', 
}; 

var mrsPeacock = {
    first_name: 'Eleanor', 
    last_name: 'Peacock', 
    color: 'blue', 
    description: 'She is from a wealthy family and uses her status and money to earn popularity', 
    age: 36, 
    image: 'https://metrouk2.files.wordpress.com/2016/07/mrs-peacock.jpg', 
    occupation: 'Socialité', 
}; 

var mrMustard = {
    first_name: 'Jack', 
    last_name: 'Mustard', 
    color: 'yellow', 
    description: 'He is a former football player who tries to get by on his former glory', 
    age: 62, 
    image: 'https://metrouk2.files.wordpress.com/2016/07/colonel-mustard.jpg', 
    occupation: 'Retired Football player', 
}

charactersArray.push(mrGreen, drOrchid, profPlum, missScarlet, mrsPeacock, mrMustard); 

console.log (charactersArray); 

// Weapons Collection

const weaponsArray = []

var rope = {
    weapon:'rope',
    weight:10
}; 

var knife = {
    weapon: 'knife',
    weight:8
}; 

var candlestick = {
    weapon: 'candlestick', 
    weight:2
}; 

var dumbbell = {
    weapon: 'dumbbell',
    weight:30
}; 

var poison = {
    weapon: 'poison',
    weight: 2
}; 

var axe = {
    weapon: 'axe', 
    weight: 15
}; 

var bat = {
    weapon: 'bat',
    weight: 13,
}; 

var trophy = {
    weapon: 'trophy', 
    weight: 25
}; 

var pistol = {
    weapon: 'pistol', 
    weight: 20
}

weaponsArray.push(rope, knife, candlestick, dumbbell, poison, axe, bat, trophy, pistol); 

console.log (weaponsArray); 

//Other way of doing it : keys and values have been written directly in the array
/*
const weaponsArray = [
    {weapon:'rope', weight:10},
    {weapon:'knife', weight:8}, 
    {weapon:'candlestick', weight:2},
    {weapon:'dumbbell', weight:30},
    {weapon:'poison', weight:2},
    {weapon:'axe', weight:15},
    {weapon:'bat', weight:13},
    {weapon:'trophy', weight:25},
    {weapon:'pistol', weight:20},
];
*/ 

// Rooms Collection

const roomsArray = []

var diningRoom = {room: 'Dining Room'};
var conservatory = {room: 'Conservatory'}; 
var kitchen = {room: 'Kitchen'}; 
var study = {room: 'Study'};
var library = {room: 'Library'}; 
var billiardRoom = {room: 'Billiard Room'}; 
var lounge = {room: 'Lounge'}; 
var ballroom = {room: 'Ballroom'}; 
var hall = {room: 'Hall'}; 
var spa = {room: 'Spa'}; 
var livingRoom = {room: 'Living Room'}; 
var observatory = {room: 'Observatory'}; 
var theater = {room: 'Theater'}; 
var guestHouse = {room: 'Guest House'}; 
var patio = {room: 'Patio'}; 

roomsArray.push(diningRoom, conservatory, kitchen, study, library, billiardRoom, lounge, ballroom, hall, spa, livingRoom, observatory, theater, guestHouse, patio); 

console.log (roomsArray); 

//ITERATION 2

function randomSelector(anArr) {
    let rand = Math.random(); 
    let randElement = Math.floor (rand * anArr.length); 
    return randElement
}
roomsArray[randomSelector(roomsArray)]


function pickMystery() {
    let room = roomsArray[randomSelector(roomsArray)]
    let weapon = weaponsArray[randomSelector(weaponsArray)]
    let character = charactersArray[randomSelector(charactersArray)]
    let solutionArray = [room, weapon, character]
    return solutionArray
}

let misteryEnvelope = pickMystery();
console.log (misteryEnvelope);

/* let clueGame = {
//     weaponsArray: [],
//     pickMystery: function() {
        let someVar
        return someVar
//     }
// }

clueGame.pickMystery() 
=> in an object, keys can be the name of a function and the value the actual value of the function */

//ITERATION 3
function revealMistery(misteryEnvelope) {
    console.log(`${misteryEnvelope[2].first_name} ${misteryEnvelope[2].last_name} killed Mr.Boddy using the ${misteryEnvelope[1].weapon} in the ${misteryEnvelope[0].room}!!!!`);  
}

revealMistery(misteryEnvelope);
