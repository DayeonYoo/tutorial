//a,a1,a2,a3=each x
//b,b1,b2,b3=each y
var person;
var a = 0;
var a1=-800;
var a2 = -1600;
var a3 = -2500;
//y=height/2
var b= 650;
var b1= 650;
var b2=650;
var b3=650;
var w= 100;
var h= 50;
// var startX = 0;
// var startY=0;
let pupilX;
let pupilY;
function preload() {
	person = createImg("moving.gif");  
 person2 = createImg("moving.gif");
  person3 = createImg("moving.gif");
  person4 = createImg("moving.gif");
}
function setup() {
  createCanvas(  1500 , 1000);
   smooth();
  frameRate(5);
  rectMode(CENTER);
}

function draw() {
  background(0);
  noFill();

  stroke(255);
  //0-500
   drawEyes(250, 250);
   drawEyes(250, 650);
  // drawEyes(280, 1100);
  // drawEyes(120, 900);
   drawEyes(50, 1350);
  drawEyes(50, 450);
   drawEyes(100, 100);
   drawEyes(340, 390);
  drawEyes(510, 290);
// drawEyes(450, 1400);
//drawEyes(480, 800);
   drawEyes(550, 90);
  //500-1000
//   drawEyes(740, 1280);
//   drawEyes(640, 1030);
   drawEyes(850, 690); 
  drawEyes(750, 200);
  drawEyes(650, 550);

  drawEyes(1200, 380);
  drawEyes(1700, 600);
  drawEyes(1550, 1200);

  
  //people moving
  
  person.size(300, 300);
    person.position(a, b);
  a=a+4;
  if(a>width){
    a=-2500;
    b=650;
  }
  person2.size(300, 300);
  person2.position(a1, b1);
 a1=a1+4;
  if(a1>width){
    a1=-1600;
    b1=650;
  }
   person3.size(300, 300);
  person3.position(a2, b2);
 a2=a2+4;
  if(a2>width){
    a2=-800;
    b2=650;
  }
   person4.size(300, 300);
    person4.position(a3, b3);
  a3=a3+4;
  if(a3>width){
    a3=0;
    b3=650;
  }
}

function drawEyes(x,y){

   //fill(0);
  strokeWeight(3);
  // bezier(x, y, x+50,y-50, x+100,y-50, x+150,y);
  // bezier(x, y, x+50,y+30, x+100,y+30, x+150,y);
  pupilX = x+75;
  pupilY = y-5
  if(random(10)<9){
    if (mouseX > 0 && mouseX < width && mouseY > 0 && mouseY < height) {
        bezier(x, y, x+50,y-50, x+100,y-50, x+150,y);
  bezier(x, y, x+50,y+30, x+100,y+30, x+150,y);
       pupilX = map(mouseX,x+50, x+100, x+50,x+100, true);
    pupilY = map(mouseY, y-3, y-10, y-3, y-10, true);}
     strokeWeight(1);
    ellipse(pupilX,  pupilY, 45, 45);}
  else{
    if(random(10)<=9){
      if (mouseX > 0 && mouseX < width && mouseY > 0 && mouseY < height) {
      bezier(x, y, x+50,y-40, x+100,y-40, x+150,y);
   bezier(x, y, x+50,y+20, x+100,y+20, x+150,y);
        pupilX = map(mouseX,x+50, x+100, x+50,x+100, true);
    pupilY = map(mouseY, y-3, y-10, y-3, y-10, true);
      }
       strokeWeight(1);
    ellipse(pupilX,  pupilY, 36, 36);
    }
   else{ if(random(10)>=8&&random(10)<=9){
    
     bezier(x, y, x+50,y-20, x+100,y-20, x+150,y);
 bezier(x, y, x+50,y+5, x+100,y+5, x+150,y);
 
    }
  else{
       bezier(x, y, x+50,y-10, x+100,y-10, x+150,y);
 bezier(x, y, x+50,y, x+100,y, x+150,y);
    }
  }
       }
  

}




// function mouseDragged() {
//   if ((mouseX > startX - 50) && (mouseX < startX + 50)) {
//     if ((mouseY > startY - 50) && (mouseY < startY + 50)) {
//       startX = mouseX;
//       startY = mouseY
//     }
//   }
//}






function mousePressed() {
  //mouseX<x+width
  if ((mouseX > a) && (mouseX < a + 200)) {
     if ((mouseY > b) && (mouseY < b + 150)) {
	 a = mouseX-150;
  b=mouseY-100;
     }}
   if ((mouseX > a1) && (mouseX < a1 + 200)) {
     if ((mouseY > b1) && (mouseY < b1 + 150)) {
	 a1 = mouseX-150;
  b1=mouseY-100;
     }}
  if ((mouseX > a2) && (mouseX < a2 + 200)) {
     if ((mouseY > b2) && (mouseY < b2 + 150)) {
	 a2 = mouseX-150;
  b2=mouseY-100;
     }}
   if ((mouseX > a3) && (mouseX < a3 + 200)) {
     if ((mouseY > b3) && (mouseY < b3 + 150)) {
	 a3 = mouseX-150;
  b3=mouseY-100;
     }}
}

function mouseDragged() {
if ((mouseX > a ) && (mouseX < a + 200)) {
     if ((mouseY > b) && (mouseY < b + 150)) {
	  a = mouseX-150;
  b = mouseY-100;
     }}
 else if ((mouseX > a1 ) && (mouseX < a1 + 200)) {
     if ((mouseY > b1) && (mouseY < b1 + 150)) {
	  a1 = mouseX-150;
  b1 = mouseY-100;
     }}
  if ((mouseX > a2 ) && (mouseX < a2 + 200)) {
     if ((mouseY > b2) && (mouseY < b2 + 150)) {
	  a2 = mouseX-150;
  b2 = mouseY-100;
     }}
  if ((mouseX > a3 ) && (mouseX < a3 + 200)) {
     if ((mouseY > b3) && (mouseY < b3 + 150)) {
	  a3 = mouseX-150;
  b3 = mouseY-100;
     }}
}

// //how to come back?

function mouseReleased(){
 if(width>a>0 & height>b>0){
   a=a+4;
   b=650;
 }
  if(width>a1>0 & height>b1>0){
   a1=a1+3;
   b1=650;
 }
  if(width>a2>0 & height>b2>0){
   a2=a2+4;
   b2=650;
 }
  if(width>a3>0 & height>b3>0){
   a3=a3+4;
   b3=650;
 }
}

