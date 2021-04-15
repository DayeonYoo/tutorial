var eagle = [];
let cheetah;
let imgcheetah, imgeagle;
var Eagle;
var Cheetah
let x,y;
function preload() {
 imgcheetah = createImg("cheetah.gif");  
	imgeagle = loadImage('eagle.png');
  imageMode(CENTER);
}

function setup() {
    r = random(255);
  g = random(255);
  b = random(255);
	createCanvas(700,700);
	imageMode(CENTER);
	noStroke();

//	cheetah = new Cheetah(width/2, height/2);

}

function draw() {
	background(r,g,b);

	for (var i = 0; i < 20; i++) {
      eagle.push( new Eagle(random(width),0) );
    eagle[i].move();
    eagle[i].display();
   
   }
  ellipse(width/2,height/2,250)
        imgcheetah.size(150, 150);
  imgcheetah.position(width/2-70, height/2-70);
   
	//cheetah.display();
}
 function mousePressed(){
     hasClicked = true;
   var d= dist(mouseX,mouseY,width/2,height/2);
  
  if (d<125){
fill(0);
   ellipse(width/2, height/2);
  imgcheetah.hide();
  background( r,g,b); 
      r = random(255);
    g = random(255);
    b = random(255);
   
  }
}
function mouseReleased(){
  var d= dist(mouseX,mouseY,width/2,height/2)
   if (d<125){
   r = random(255);
    g = random(255);
    b = random(255);
  hasClicked=false;
   }
  fill(255);
    ellipse(width/2, height/2);
    imgcheetah.show();
  
 }
  
function Eagle(x,y) {

		this.x = x;
	this.y = y;
	this.sz = 150;
	this.xspeed = random(1,7);
  this.yspeed=5;
  
 this.move = function() {
    this.x += this.xspeed;
		this.y += this.xspeed;
      
     if(this.x>width+80){
      this.x=-50;}
   if(this.y>height+80){
       this.y=-50;
    }
}
	this.display = function() {
		image(imgeagle,this.x,this.y, this.sz,this.sz);
	}

 
}