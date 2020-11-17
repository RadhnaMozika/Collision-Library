var movingrect, fixedrect;
var ob1, ob2, ob3, ob4;

function setup() {
  createCanvas(800,400);
  movingrect = createSprite(200, 200, 50, 100);
  fixedrect = createSprite(200, 350, 100, 50);

  ob1 = createSprite(100, 50, 40, 40);
  ob2 = createSprite(200, 50, 40, 40);
  ob3 = createSprite(300, 50, 40, 40);
  ob4 = createSprite(400, 50, 40, 40);

  movingrect.shapeColor="green";
  fixedrect.shapeColor="green";

  movingrect.debug=true;
  fixedrect.debug=true;

  //movingrect.velocityY=3;
  //fixedrect.velocityY=-3;

  ob1.velocityX=3;
  ob2.velocityX=-3;

}

function draw() {
  background(0);  

  //movingrect.x=mouseX;
  //movingrect.y=mouseY;

if (isTouching(ob1, movingrect)){
  movingrect.shapeColor="red";
  ob1.shapeColor="red";
} 
else {
  movingrect.shapeColor="green";
  ob1.shapeColor="green";
}

bounceOff(ob1, ob2);

  
drawSprites();
}

