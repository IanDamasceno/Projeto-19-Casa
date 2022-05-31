var PLAY = 1;
var END = 0;
var gamestate = PLAY;

var moeda, moedaImg;
var yoshi, yoshiImg;
var bloco, blocoA; 
var fundo, fundoImg;
var oponente, goombaImg, inimigoImg, plantaCImg;
var chao;
var score;
var gameover, gameoverimagem;
var restart, restartimagem;

function preload(){
  //  yoshiImg.loadAnimation()
    fundoImg = loadImage("fundo.jpg");

    goombaImg = loadImage("Goomba.webp");
    inimigoImg = loadImage("inimigo1.png");
    plantaCImg = loadImage("planta carnivora.png.png");
    yoshiImg = loadImage("yoshi.png");
   
    gameoverimagem = loadImage("gameOver.png");
    restartimagem = loadImage("restart.png");

}

function setup() {
    createCanvas(400,700);
    fundo = createSprite(250,400);
    fundo.addImage(fundoImg);
    
    fundo.scale = 0.8;

    yoshi = createSprite(40,580);
    yoshi.addImage(yoshiImg);
    yoshi.scale = 0.06;
    yoshi.velocityX = 0;

    chao = createSprite(100,620,600,20);
    chao.visible = false;

    gameover = createSprite(200,200);
    gameover.addImage(gameoverimagem);

    restart = createSprite(200,350);
    restart.addImage(restartimagem);

    score = 0;
}

function draw() {
    
    text("Pontuação: "+ score, 200,50);
    if(gamestate = "PLAY"){
        
        fundo.velocityX = -1;

        if(fundo.x < 100){
         fundo.x = 200;
        }

        if(keyDown("SPACE")&& yoshi.y > 500){
        yoshi.velocityY = -10; 
        }    
        
        yoshi.velocityY += 0.8;

        criarOp();

        gameover.visible = false;
        restart.visible = false;

        if(oponente.isTouching(yoshi)){
            gamestate = END;
        }
    }
    else if(gamestate = END){
        fundo.velocityX = 0;

        yoshi.destroy();
        oponente.destroy();
        yoshi.velocityY = 0;
        gameover.visible = true;
        restart.visible = true;
    }
    yoshi.collide(chao);

    drawSprites();
}


function criarOp(){
    if(frameCount%300 === 0){
        oponente = createSprite(600,580);
        var aleatorioOp = Math.round(random(1,3));
        switch(aleatorioOp){
            case 1:
                oponente.addImage(goombaImg);
                oponente.scale = 0.08;
                break;
            case 2:
                oponente.addImage(inimigoImg);
                oponente.scale = 0.03;
                break;
            case 3:
                oponente.addImage(plantaCImg);
                oponente.scale = 0.04;
                break;
            default: 
                break;
        }
        oponente.velocityX = fundo.velocityX;
        
    }
}