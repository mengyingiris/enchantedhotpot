
let button1;
let button2;
let button3;
let button4;
let button5;
let button6;
let button7;

let m;
var count = 0;

let num = 400;
let range = 400;

let ax = [];
let ay = [];

//let teaMenu;



let rSlider;
let gSlider;
let bSlider;
let canvas;
let backButton;



function setup(){

  canvas = createCanvas(800,400);
  canvas.style('z-index', '-1');
  canvas.position(windowWidth/2-400,windowHeight/2-200);
   backButton = createButton("BACK");

  button1 = createButton("VIEW");
  button2 = createButton("ENTER");
  button3 = createButton("NEXT");
  button4 = createButton("2019.01.23 16:03:45");
  button5 = createButton("2019-03-27 20:19:12");
  button6 = createButton("2019-03-31 18:34:12");
  button7 = createButton("2019-05-12 16:04:43");
  button1.addClass("button1");
  button2.addClass("button2");
  button3.addClass("button3");
button4.addClass("button4");
button5.addClass("button5");
button6.addClass("button6");
button7.addClass("button7");
backButton.addClass("backButton");
  button2.hide();

  for ( let i = 0; i < num; i++ ) {
    ax[i] = width/9 ;
    ay[i] = height/8;
  }
  frameRate(random(400));



  startShopping();
  // rSlider= createSlider(0,255,0);
  // rSlider.addClass("rSlider");
  // gSlider= createSlider(0,255,0);
  // bSlider= createSlider(0,255,0);
  //teaMenu = createSelect();
}

function  startShopping(){
  background(240);
  textSize(105);
  fill(0);
  textFont('san-serif');
  text('welcome',100,220);



  loadImage('images/logo.png',img =>{image(img,20,200,400,300);
  });
  button1.show();
  button2.hide();
  button4.hide();
  button5.hide();
  button6.hide();
  button7.hide();
  button3.hide();
  backButton.hide();
    button1.mousePressed(tea1);
    button2.mousePressed(tea2);
    button3.mousePressed(tea2);



}
function time(){
  background(0,0,0);
  button4.show();
    button5.show();
      button6.show();
        button7.show();
  button1.hide();
  button2.hide();
  button3.hide();
  backButton.hide();
    button4.mousePressed(tea1);
    button5.mousePressed(tea2);
      button6.mousePressed(tea3);
        button7.mousePressed(tea4);


}

function tea1(){
  background(232, 219, 188);
  textSize(25);
  textFont('serif')
  fill(0,0,0,210);
  text('LOCATION:  Xinzhongguan DP Shop',60,100);
  textSize(45);
  textFont('serif')
  fill(0,0,0,210);
  text('PROCESSING',60,150);
  textSize(14);
  textFont('san-serif');
  fill(0,0,0,180);
  text('ORDER NUMBER:  010003201901231603458442',60,250);
  textSize(14);
  text('ORDER TIME:  2019-01-23 16:03:45',60,300);
  fill(0,0,0,180);
  textSize(14);
  text('PRICE:  $9.7',60,280);
  fill(0);
    backButton.hide();
  backButton.mousePressed(startShopping);
  button2.hide();
  button3.show();
  button1.hide();
  button4.hide();
  button5.hide();
  button6.hide();
  button7.hide();
  loadImage('images/t1.png',img =>{image(img,40,169,120,120);
  });
  loadImage('images/t2.png',img =>{image(img,150,170,114,114);
  });

  button3.mousePressed(tea2);

}


function tea2(){
  background(232, 210, 210);
  textSize(25);
  textFont('serif')
  fill(0,0,0,210);
  text('LOCATION:  SOLANA Pink Shop',60,100);
  textSize(14);
  textFont('san-serif');
  fill(0,0,0,180);
  text('ORDER NUMBER:  010005201903311834198826',60,250);
  textSize(45);
  textFont('serif')
  fill(0,0,0,210);
  text('PROCESSING',60,150);
  textSize(14);
  text('ORDER TIME:  2019-03-27 20:19:12',60,300);
  fill(0,0,0,180);
  textSize(14);
  text('PRICE:  $12.5',60,280);
  fill(0);
    backButton.hide();
  backButton.mousePressed(startShopping);
  button2.hide();
  button3.show();
  button1.hide();
  button4.hide();
  button5.hide();
  button6.hide();
  button7.hide();

  button3.mousePressed(tea3);

}

function tea3(){
  background(225, 200, 168);
  textSize(25);
  textFont('serif')
  fill(0,0,0,210);
  text('LOCATION:  Wangjing Kylin Shop',60,100);
  textSize(45);
  textFont('serif')
  fill(0,0,0,210);
  text('PROCESSING',60,150);
  textSize(14);
  textFont('san-serif');
  fill(0,0,0,180);
  text('ORDER NUMBER:  010005201901211357018325',60,250);
  textSize(14);
  text('ORDER TIME:  2019-03-31 18:34:12',60,300);
  fill(0,0,0,180);
  textSize(14);
  text('PRICE:  $13.8',60,280);
  fill(0);
    backButton.hide();
  backButton.mousePressed(startShopping);
  button2.hide();
  button3.show();
  button1.hide();
  button4.hide();
  button5.hide();
  button6.hide();
  button7.hide();
  loadImage('images/t6.png',img =>{image(img,40,169,120,112);
  });
  loadImage('images/t2.png',img =>{image(img,150,170,114,114);
  });
  loadImage('images/t9.png',img =>{image(img,260,170,114,114);
  });

button3.mousePressed(tea4);
}


function tea4(){
  background(204, 177, 177);
  textSize(25);
  textFont('serif')
  fill(0,0,0,210);
  text('LOCATION:  SOLANA Pink Shop',60,100);
  textSize(45);
  textFont('serif')
  fill(0,0,0,210);
  text('PROCESSING',60,150);
  textSize(14);
  textFont('san-serif');
  fill(0,0,0,180);
  text('ORDER NUMBER:  010003201905121604418535',60,250);
  textSize(14);
  text('ORDER TIME:  2019-05-12 16:04:41',60,300);
  fill(0,0,0,180);
  textSize(14);
  text('PRICE:  $20.8',60,280);
  fill(0);
    backButton.hide();
  backButton.mousePressed(startShopping);
  button2.show();
  button3.hide();
  button1.hide();
  button4.hide();
  button5.hide();
  button6.hide();
  button7.hide();
  loadImage('images/t3.png',img =>{image(img,40,179,120,112);
  });
  loadImage('images/t7.png',img =>{image(img,150,170,114,114);
  });
  loadImage('images/t6.png',img =>{image(img,260,170,114,114);
  });
  loadImage('images/t4.png',img =>{image(img,370,170,114,114);
  });
  button2.mousePressed(openlink);
button3.mousePressed(tea1);
}
function openlink(){
  window.open("space.html");

}

function i4(){
  background(204, 177, 177);
  loadImage('images/ch.png',img =>{image(img,275,169,200,135);
  });
  loadImage('images/bu.png',img =>{image(img,782,169,200,134);
  });
  loadImage('images/fr.png',img =>{image(img,536,169,200,153);
  });
  button2.hide();
  button3.hide();
  backButton.show();
  backButton.mousePressed(startShopping);
  textSize(16);
  fill(0,0,0,120);
  text('Cheese Layer',338,350);

  textSize(16);
  text('Bubbles',870,350);
  fill(0,0,0,120);

  textSize(16);
  text('Fruits',610,350);
  fill(0,0,0,120);

}


function draw(){

  background(255,250,250,10);

   // Shift all elements 1 place to the left
   for ( let i = 1; i < num; i++ ) {
     ax[i - 1] = ax[i];
     ay[i - 1] = ay[i];
   }

   // Put a new value at the end of the array
   ax[num - 1] += random(-1500,2000);
   ay[num - 1] += random(-1800, 1800);

   // Constrain all points to the screen
   ax[num - 1] = constrain(ax[num - 1], 0, width);
   ay[num - 1] = constrain(ay[num - 1], 0, height);

   // Draw a line connecting the points
   for ( let j = 1; j < num; j++ ) {
     let val = j / num * 1000.0 + 50;
     stroke(5,5,10,90);
     strokeWeight(0.07);
     line(ax[j - 1], ay[j - 1], ax[j], ay[j]);
   }



     button1.mousePressed(tea1);







//  background(rSlider.value(),gSlider.value(),bSlider.value());

}


function windowResized (){
  //resizeCanvas(1240,530);
}
