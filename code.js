var snows = [];
var r = 0;
var rSpeed = .25;
var bells = [
  {
    x:150,
    y:150,
    size: 150,
  },
  {
    x:250,
    y:450,
    size: 220,
  },
  {
    x:400,
    y:100,
    size: 20,
  },
  {
    x:400,
    y:300,
    size: 60,
  },
  {
    x:650,
    y:100,
    size: 100,
  },
  {
    x:650,
    y:400,
    size: 180,
  },

];

var Sound;

function preload() {
  soundFormats("wav");
  Sound = loadSound("Sbell.wav");
}


function setup() {
  createCanvas(800, 600);

  // create snow
  for (var i = 0; i < 1000; i++) {
    var snow = {
      x: random(width),
      y: random(height),
      radius: random(1, 6)
    };
    snows.push(snow);
  }

  // create bells
//   for (var l = 0; l < 5; l++) {
//     var bell = {
//       x: random(width),
//       y: random(height),
//       size: random(50, 200),

//     };
//     bells.push(bell);
//   }
}

function draw() {
  background(50);

  noStroke();
  rectMode(CENTER);
  angleMode(DEGREES);

  // ref from bubble
  for (var i = 0; i < snows.length; i++) {
    var snow = snows[i];
    fill(255);
    ellipse(snow.x, snow.y, snow.radius);
    snow.x += random(-.2, 0.2); // snow slightly shaking
    snow.y += random(-.2, .2);

    snow.y += .2; // move snow

    // reset snow height for infinit snow
    if (snow.y > height + 20) {
      snow.y = 0;
    }
  }

  for (var l = 0; l < bells.length; l++) {
    var bell = bells[l];
    r += rSpeed;
    // if (r >= 180) {
    //   r *= -1;
    // }
    push();
    if (dist(mouseX, mouseY, bell.x, bell.y) < bell.size / 2) {
      translate(bell.x, bell.y);
      rotate(r);
      fill(255, 210, 0);
      //Sound.playMode('restart');
      Sound.play(0,1,1,0,1);
      square(0, 0, bell.size, 100, 100, 1, 1);
      

    } else {
      fill(255, 210, 0);
     // Sound.pause();
      square(bell.x, bell.y, bell.size, 100, 100, 1, 1);
      
    
    }
    if (r >= 45) {
      rSpeed *= -1;
    }
    if (r <= -45) {
      rSpeed *= -1;
    }
   

    pop();

  }

}
