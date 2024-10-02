let flip = 0;
let counter = 1;

function setup() {
  createCanvas(400, 400);
}


function mousePressed() {
  counter = counter + 1
  //console.log('click');
  //coinFlip();
  if (counter % 2 == 0) {
    text('speaker 1 meow', 50, 50);
    //console.log('no flip');
  } else if (counter % 2 == 1) {
    coinFlip();
    //console.log(counter % 2);
    //console.log('flip');
  }
}


function draw() {
  background(125,10);

}
//note: i need it to only run coinFlip when its not running meow
// but somehow running it under "else" breaks it?
// oh somehow its running it continuously instead of once
// oh because its the draw function *facepalm*
// i moved it to mousePressed but now it doesnt start with meow
// i made it start at 1 instead of 0 and that fixed it

// sometimes theres a glitch where meow and flip play at the same time


function coinFlip() {
  var flip = random(100);

  if (flip < 50) {
    text('speaker 1 purr', 50, 80);
    console.log('purr')
  } else {
      text('speaker 1 hiss', 50, 90);
      console.log('hiss')
  }
}

if (counter > 10) {
  console.log('finish')
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


