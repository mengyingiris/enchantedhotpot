
let button1;
let button2;
let button3;
let button4;
let button5;
let button6;
let button7;

//let teaMenu;
let img1;
let offset = 0;
let easing= 0.5;


let rSlider;
let gSlider;
let bSlider;
let canvas;
let backButton;

function setup(){

  canvas = createCanvas(1240,530);
  canvas.style('z-index', '-1');
  canvas.position(windowWidth/2-620,windowHeight/2-265);
   backButton = createButton("BACK");

  button1 = createButton("back");
  button2 = createButton("INGREDIENTS");
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



  startShopping();
  // rSlider= createSlider(0,255,0);
  // rSlider.addClass("rSlider");
  // gSlider= createSlider(0,255,0);
  // bSlider= createSlider(0,255,0);
  //teaMenu = createSelect();
}

function  startShopping(){
  background(250);
  textSize(15);
  fill(0);
  text('[Sample analyzing......',30,60);


  button1.show();
  button2.hide();
  button4.hide();
  button5.hide();
  button6.hide();
  button7.hide();
  button3.hide();
  backButton.hide();
    button1.mousePressed(openlink);
    button2.mousePressed(tea2);
    button3.mousePressed(tea2);

  img1 =  loadImage('images/hg.png',img =>{image(img,70,175,180,180);
    });
    loadImage('images/hg2.png',img =>{image(img,310,175,175,175);
    });
    loadImage('images/hg3.png',img =>{image(img,570,175,176,130);
    });
    loadImage('images/hg4.png',img =>{image(img,810,205,176,176);
    });


}

function openlink(){
  window.open("index2.html");

}

function tea1(){
  background(232, 219, 188);
  textSize(32);
  textFont('serif')
  fill(0,0,0,210);
  text('LOCATION:  Xinzhongguan DP Shop',60,70);
  textSize(24);
  textFont('san-serif');
  fill(0,0,0,180);
  text('ORDER NUMBER:  010003201901231603458442',60,350);
  textSize(24);
  text('ORDER TIME:  2019-01-23 16:03:45',60,380);
  fill(0,0,0,180);
  textSize(28);
  text('PRICE:  $9.7',890,380);
  fill(0);
    backButton.hide();
  backButton.mousePressed(startShopping);
  button2.show();
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
  button2.mousePressed(i1);
  button3.mousePressed(tea2);

}
function i1(){
  background(232, 219, 188);
  loadImage('images/b.png',img =>{image(img,310,169,200,150);
  });
  loadImage('images/fr.png',img =>{image(img,740,169,200,160);
  });
  button2.hide();
  button3.hide();
  backButton.show();
  backButton.mousePressed(startShopping);
  textSize(16);
  fill(0,0,0,120);
  text('Bean BoBo',358,350);

  textSize(16);
  text('Fruits',810,350);
  fill(0,0,0,120);



}

function tea2(){
  background(232, 210, 210);
  textSize(32);
  textFont('serif')
  fill(0,0,0,210);
  text('LOCATION:  SOLANA Pink Shop',60,70);
  textSize(24);
  textFont('san-serif');
  fill(0,0,0,180);
  text('ORDER NUMBER:  010005201903311834198826',60,350);
  textSize(24);
  text('ORDER TIME:  2019-03-27 20:19:12',60,380);
  fill(0,0,0,180);
  textSize(28);
  text('PRICE:  $12.5',890,380);
  fill(0);
    backButton.hide();
  backButton.mousePressed(startShopping);
  button2.show();
  button3.show();
  button1.hide();
  button4.hide();
  button5.hide();
  button6.hide();
  button7.hide();
  loadImage('images/t4.png',img =>{image(img,40,169,120,112);
  });
  loadImage('images/t8.png',img =>{image(img,150,170,114,114);
  });
  loadImage('images/t8.png',img =>{image(img,260,170,114,114);
  });
  button2.mousePressed(i2);
  button3.mousePressed(tea3);

}
function i2(){
  background(232, 210, 210);
  loadImage('images/ch.png',img =>{image(img,310,169,200,140);
  });
  loadImage('images/fr.png',img =>{image(img,740,169,200,160);
  });
  button2.hide();
  button3.hide();
  backButton.show();
  backButton.mousePressed(startShopping);
  textSize(16);
  fill(0,0,0,120);
  text('Cheese Layer',358,350);

  textSize(16);
  text('Fruits',810,350);
  fill(0,0,0,120);

}
function tea3(){
  background(225, 200, 168);
  textSize(32);
  textFont('serif')
  fill(0,0,0,210);
  text('LOCATION:  Wangjing Kylin Shop',60,70);
  textSize(24);
  textFont('san-serif');
  fill(0,0,0,180);
  text('ORDER NUMBER:  010005201901211357018325',60,350);
  textSize(24);
  text('ORDER TIME:  2019-03-31 18:34:12',60,380);
  fill(0,0,0,180);
  textSize(28);
  text('PRICE:  $13.8',890,380);
  fill(0);
    backButton.hide();
  backButton.mousePressed(startShopping);
  button2.show();
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
  button2.mousePressed(i3);
button3.mousePressed(tea4);
}

function i3(){
  background(225, 200, 168);
  loadImage('images/ch.png',img =>{image(img,310,169,200,140);
  });
  loadImage('images/fr.png',img =>{image(img,740,169,200,160);
  });
  button2.hide();
  button3.hide();
  backButton.show();
  backButton.mousePressed(startShopping);
  textSize(16);
  fill(0,0,0,120);
  text('Cheese Layer',358,350);

  textSize(16);
  text('Fruits',810,350);
  fill(0,0,0,120);

}

function tea4(){
  background(204, 177, 177);
  textSize(32);
  textFont('serif')
  fill(0,0,0,210);
  text('LOCATION:  SOLANA Pink Shop',60,70);
  textSize(24);
  textFont('san-serif');
  fill(0,0,0,180);
  text('ORDER NUMBER:  010003201905121604418535',60,350);
  textSize(24);
  text('ORDER TIME:  2019-05-12 16:04:41',60,380);
  fill(0,0,0,180);
  textSize(28);
  text('PRICE:  $20.8',890,380);
  fill(0);
    backButton.hide();
  backButton.mousePressed(startShopping);
  button2.show();
  button3.show();
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
  button2.mousePressed(i4);
button3.mousePressed(tea1);
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
  image(img1, 0, 0); // Display at full opacity
    let dx = mouseX - img1.width / 2 - offset;
    offset += dx * easing;
    tint(255, 127); // Display at half opacity
    image(img1, offset, 0);
//  background(rSlider.value(),gSlider.value(),bSlider.value());

}

function windowResized (){
  //resizeCanvas(1240,530);
}
