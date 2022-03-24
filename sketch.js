var path,boy, leftBoundary,rightBoundary;
var pathImg,boyImg;
var i;
var pista 

function preload(){
pathImg = loadImage("path.png");

    boyImg = loadAnimation("Runner-1.png","Runner-2.png");
    
    bomb = loadImage("bomb.png")     
    
    coin = loadImage("coin.png")     
    
    energyDrink = loadImage("energyDrink.png") 

}

function setup(){
 createCanvas(400,400);

// Movendo o fundo 
    path = createSprite(200,160,600,1)
    path.addImage(pathImg) 
    path.velocityY=5



//Criando menino que corre 
    boy = createSprite(50,160,20,50);
    boy.addAnimation("running",boyImg);
    boy.scale=0.05
    boy.x = 200
    boy.y = 350



// Criando Boundary (Limite) esquerdo  
leftBoundary=createSprite(0,0,100,800);
leftBoundary.visible = false;


//Crie Boundary direito 
rightBoundary=createSprite(400,400,100,800)
rightBoundary.visible = false;




}


function draw() {
background(0);


// Menino se movendo no eixo X com o mouse
    edges = createEdgeSprites();
    boy.collide(edges[3]);
    



 //Reiniciar o fundo
    if (path.y>400){
    
        path.y=150;


    }

    boy.x = mouseX
    boy.bounceOff(rightBoundary)
    boy.bounceOff(leftBoundary)
  
    drawSprites();
}






