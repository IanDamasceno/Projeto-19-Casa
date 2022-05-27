var moeda;
var yoshi, oponente;
var bloco, blocoA;
var yoshiImg;
var fundo, fundoImg;
var goombaImg, inimigoImg, plantaCImg;

function preload(){
  //  yoshiImg.loadAnimation()
    fundoImg = loadImage("fundo.jpg");

    goombaImg = loadImage("Goomba.webp");
    inimigoImg = loadImage("inimigo1.png");
    plantaCImg = loadImage("planta carnivora.png.png");
}

function setup() {
    createCanvas(400,700);
    fundo = createSprite(250,400);
    fundo.addImage(fundoImg);
    fundo.velocityX = -1;
    fundo.scale = 0.8;

   /* yoshi.createSprite();
    yoshi.addImage(yoshi.png);
    yoshi.scale = 0.5;
    yoshi.velocityX = 1;*/


}

function draw() {
    if(fundo.x < 100){
         fundo.x = 200;
 }
 criarOp();
 drawSprites();
}

function criarOp(){
    if(frameCount%300 === 0){
        oponente = createSprite(600,600);
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