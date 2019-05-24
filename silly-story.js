//COMPLETE VARIABLE AND FUNCTION DEFINITIONS
//We create a function that picks out a random item from an array,and reference our name input,randomize button,and story text.
var customName = document.getElementById("customname");
var randomize = document.querySelector(".randomize");
var story = document.querySelector(".story");

function randomValueFromArray(array) {
  return array[Math.floor(Math.random() * array.length)];
}

//Here and below we create our random variables for the story,and the main story text we will dynamically change.
var insertx = ["Willy the Goblin", "Father Christmas", "Big Daddy"];
var inserty = ["the soup kitchen", "disneyland", "White House"];
var insertz = [
  "spontaneously combusted",
  "melted into a puddle on the sidewalk",
  "turned into a slug and crawled away"
];

var myStory = `It was 94 fahrenheit outside, so  :insertx: went for a walk. When they got to :inserty: , they stared in horror for a few moments, then insertz . Bob saw the whole thing, but was not surprised — :insertx: weighs 300 pounds, and it was a hot day.`;
var newStory = myStory;

//EVENT LISTENER AND PARTIAL FUNCTION DEFINITION
//We need to call newStory equal to myStory so we can generate the text more than once,in here we also name all the random variables that change the text everytime we click.
//.replace() method is extremely useful here,we also calculate the temperature and weight differently,based on the US or UK radio buttons.
randomize.addEventListener("click", result);

function result() {
  var name = customName.value;
  var newStory = myStory;
  var xItem = randomValueFromArray(insertx);
  var yItem = randomValueFromArray(inserty);
  var zItem = randomValueFromArray(insertz);
  newStory = newStory.replace(/:insertx:/g, xItem);
  newStory = newStory.replace(/:inserty:/g, yItem);
  newStory = newStory.replace(/:insertz:/g, zItem);
  if (customName.value !== "") {
    newStory = newStory.replace(/Bob/g, name);
  }

  if (document.getElementById("uk").checked) {
    //For UK standards,we do 2 simple math calculations for pounds to stone,and F to C.Then we reference newStory with them replacing the US standard.

    var weight = Math.round(300 / 14) + " stone";
    var temperature = Math.round((94 - 32) * (5 / 9)) + " centigrade;";

    newStory = newStory.replace("94 fahrenheit", temperature);
    newStory = newStory.replace("300 pounds", weight);
  }
  story.textContent = newStory;
  story.style.visibility = "visible";
}
