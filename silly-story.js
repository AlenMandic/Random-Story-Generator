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
  newStory = newStory.replace(/:insertx:/g, xItem); //Here we .replace all instances (g) of :insertx: in our array,and replace with a randomly chosen array string.
  newStory = newStory.replace(/:inserty:/g, yItem);
  newStory = newStory.replace(/:insertz:/g, zItem);
  if (customName.value !== "") {
    newStory = newStory.replace(/Bob/g, name); //Here we are saying if the input field for a custom name ISNT empty,change the string Bob to whatever name the user inputs.
  }

  //Below is the condition for what happens if the UK radio button is '.checked'.
  //We create 2 new variables that will change the temperature and weight parts of our story,and calculate approximately to the uk standard.

  if (document.getElementById("uk").checked) {
    //For UK standards,we do 2 simple math calculations for pounds to stone,and F to C.Then we reference newStory with them replacing the US standard.

    var weight = Math.round(300 / 14) + " stone";
    var temperature = Math.round((94 - 32) * (5 / 9)) + " centigrade;";

    newStory = newStory.replace("94 fahrenheit", temperature); //Here we create a new instance of the story once the button is clicked,this time with UK standard instead of US.
    newStory = newStory.replace("300 pounds", weight);
  }
  story.textContent = newStory; //Our main story paragraph should always equal newStory(which is equal to myStory but with all the random changes made!).
  story.style.visibility = "visible";
}

//IMPORTANT NOTES BELOW

/* Most important things i learned from this project were how to pick out certain elements of an array and change them,practical use
of if/else conditionals,and how to create a new instance of our story and have it randomly change everytime we click the button.
We achieve this by creating a variable equal to our main text paragraph,and we add all the random changes to that new variable,so that everytime
the button is clicked,a new iteration of the main story paragraph is created,but we certain substitutes(xItem, zItem, etc).
And ofcourse we place most of the above inside the function that is run when the button is clicked.
*/
