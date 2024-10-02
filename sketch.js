let flip = 0;
let i = 1; // increases when mouse is clicked
let i2 = 1; // increases when purr

let meow;

function preload() {
  meow = loadSound('meow.wav');
}

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(125,10);
}

// when mouse is clicked, 
///increase i
//if i is even, meow
//if i is odd, trigger coinFlip (either purr or hiss)


function mousePressed() {
  i = i + 1
  console.log(i);
  //console.log('click');
  //coinFlip();
  if (i % 2 == 0) {
    text('speaker 1 meow', 50, 50);
    meow.play();
    //console.log('no flip');
  } else if (i % 2 == 1) {
    coinFlip();
    //console.log(counter % 2);
    //console.log('flip');
  }
}



//note: i need it to only run coinFlip when its not running meow
// but somehow running it under "else" breaks it?
// oh somehow its running it continuously instead of once
// oh because its the draw function *facepalm*
// i moved it to mousePressed but now it doesnt start with meow
// i made it start at 1 instead of 0 and that fixed it

// sometimes theres a glitch where meow and flip play at the same time


//50 percent chance of purr or hiss
//if purr, increase i2 by one
//when i2 is greater than 5, signal the end of the performance

function coinFlip() {
  var flip = random(100);

  if (flip < 50) {
    text('speaker 1 purr', 50, 80);
    console.log('purr')
    i2++
  } else {
      text('speaker 1 hiss', 50, 90);
      console.log('hiss')
  }

  if (i2 > 5) {
    console.log('finish');
  }
}





/* 
play meow
if input
stop playing the meow
generate a random variable between 1 and 2
if 1, play hiss
if 2, play purr, and increase purr counter
when purr counter hits 10, indicate the performance is over
*/


