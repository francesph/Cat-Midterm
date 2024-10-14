let flip = 0;
let i = 1; // increases when mouse is clicked
let i2 = 1; // increases when purr

let meow;

let outputDevice; // will reference the first available MIDI output device
let modVal; // value of the modwheel control change to send

function preload() {
  meow = loadSound('meow.wav');
}

function setup() {
  createCanvas(400, 400);
}

  // try to setup WebMIDI and set outputDevice to the first available device
  navigator.requestMIDIAccess()
  .then(function(midiAccess) {
    // Get the first available MIDI output port
    outputDevice = midiAccess.outputs.values().next().value;
  })
  .catch(function(error) {
    console.error("Error accessing MIDI devices");
    //console.error(error);
  });


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
      // Send a MIDI note on message
    outputDevice.send([176, 1, 127]); // Note on, middle C, velocity 127

  // After a delay, send a MIDI note off message
    setTimeout(function() {
      outputDevice.send([176, 1, 0]); // Note off, middle C
    }, 1000); // 1000 milliseconds == 1 second
    //meow.play();
    //console.log('no flip');
  } else if (i % 2 == 1) {
    coinFlip();
    //console.log(counter % 2);
    //console.log('flip');
  }
}
// sometimes theres a glitch where meow and flip play at the same time on the first input


//50 percent chance of purr or hiss
//if purr, increase i2 by one
//when i2 is greater than 5, signal the end of the performance

function coinFlip() {
  var flip = random(100);

  if (flip < 50) {
    text('speaker 1 purr', 50, 80);
    console.log('purr')
    outputDevice.send([176, 2, 127]); // Note on, middle C, velocity 127

  // After a delay, send a MIDI note off message
    setTimeout(function() {
      outputDevice.send([176, 2, 0]); // Note off, middle C
    }, 1000); // 1000 milliseconds == 1 second
    i2++
  } else {
      text('speaker 1 hiss', 50, 90);
      console.log('hiss')
      outputDevice.send([176, 3, 127]); // Note on, middle C, velocity 127

      // After a delay, send a MIDI note off message
        setTimeout(function() {
          outputDevice.send([176, 3, 0]); // Note off, middle C
        }, 1000); // 1000 milliseconds == 1 second
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


// switching speakers

// when the coresponding key is pressed,
// send midi output for that speaker
// turn off midi output for all the other speakers

function keyPressed() {
  if (key === '1') {
    text('speaker 1 on', 30, 200);
    outputDevice.send([176, 4, 127]);
    outputDevice.send([176, 5, 0]);
    outputDevice.send([176, 6, 0]);
    outputDevice.send([176, 7, 0]);
  } else if (key === '2') {
    text('speaker 2 on', 120, 200);
    outputDevice.send([176, 4, 0]);
    outputDevice.send([176, 5, 127]);
    outputDevice.send([176, 6, 0]);
    outputDevice.send([176, 7, 0]);
  } else if (key === '3') {
    text('speaker 3 on', 210, 200);
    outputDevice.send([176, 4, 0]);
    outputDevice.send([176, 5, 0]);
    outputDevice.send([176, 6, 127]);
    outputDevice.send([176, 7, 0]);
  } else if (key === '4') {
    text('speaker 4 on', 290, 200);
    outputDevice.send([176, 4, 0]);
    outputDevice.send([176, 5, 0]);
    outputDevice.send([176, 6, 0]);
    outputDevice.send([176, 7, 127]);
  }
}

/*
 it would be nice if i could have the text for this one not fade away
 but scared moving it to draw function will break it
 i'll test later
 */