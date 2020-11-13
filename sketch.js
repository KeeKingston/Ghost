var t,ti,c,ci,d,di,g,gi,dgroup,cgroup,ig,i,gamestate="play",s;
function preload() {
 ti=loadImage("tower.png");
  di=loadImage("door.png");
  dgroup=new Group();
   ci=loadImage("climber.png");
  cgroup=new Group();
  gi=loadImage("ghost-standing.png")
s=loadSound("spooky.wav");
}
function setup(){
createCanvas(600,400);
s.loop();
t=createSprite(300,300);
t.addImage(ti);
  t.velocityY=5;
 g=createSprite(200,300);
  g.scale=0.4;
g.addImage(gi);
ig=new Group();

}
function draw(){
  if(t.y>400){
    t.y=300;
  }
  if(gamestate==="play"){
  
  
  spawnDoors();
  
  if(keyDown("space")){
    g.velocityY=-5; 
  }
  g.velocityY=g.velocityY+0.8;
  if(keyDown("left_arrow")){
    g.x=g.x-3;
  }
   if(keyDown("right_arrow")){
    g.x=g.x+3;
  }
  if(cgroup.isTouching(g)){
    g.velocityY=0;
  }
  if(ig.isTouching(g)||g.y>600){  
    g.destroy();
    gamestate="end";
  }
  
  drawSprites();
}
if(gamestate==="end"){
  stroke("black");
  textSize(50);
  text("GameOver",200,200);
}
}
function spawnDoors(){
if(frameCount%200===0){
  var d =createSprite(250,-50);
   var i=createSprite(250,50);
  d.addImage(di);
  d.velocityY=5
  d.lifetime=500;
  d.x=Math.round(random(100,400));
  dgroup.add(d);
  g.depth=d.depth;
  g.depth+=1;
  
  var c =createSprite(250,10);
  c.addImage(ci);
  c.velocityY=5
  c.x=d.x;
  c.lifetime=500;
  cgroup.add(c);
  i.width=c.width;
  i.height=2;
  i.x=d.x;
  i.velocityY=5;
} 
}






