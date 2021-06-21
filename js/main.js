const canvas = document.getElementById('canvas');
const ctx = canvas.getContext("2d");
const blockSize=50;

canvas.width = canvas.offsetWidth - canvas.offsetWidth % blockSize;
canvas.height = canvas.offsetHeight - canvas.offsetHeight % blockSize;

function getRandom(max,min){
    return Math.floor(Math.random() * (max- min) + min);
}

// Прорисовка игроковой карты
let gamePool = [];
for(let i=0; i < canvas.width/blockSize; i++){ 
    gamePool[i]= [];
    for(let j=0; j < canvas.height/blockSize; j++){
            gamePool[i].push({ x:j, y:i, object:0});
    }
   
}
 
snake = new Snake();

apple = new Apple();
apple.showApple(gamePool);


setInterval(() => {
   cleanGamePool();
   snake.show(gamePool);
   collisionChek();
//    console.log(gamePool);
   fill();
}, 120);

function collisionChek(){// Обработка коллизии змейки и яблока
for(let i=0; i<gamePool.length; i++){ 
    for(let j=0; j<gamePool[i].length; j++){
        if (snake.snakeHead.x == apple.coordinate.x && snake.snakeHead.y == apple.coordinate.y){
            snake.appleEating();
            apple.showApple(gamePool);
        }
    }
}
}
// Вызов функции поворота змейки при клике на клавиатуру
document.addEventListener("keydown",(e)=>{
    snake.turn(e.key);
})

// Прорисовка карты
function  fill(){
    for(let i=0; i<gamePool.length; i++){ 
        for(let j=0; j<gamePool[i].length; j++){

            if (gamePool[i][j].object==0){
                ctx.fillStyle ="white";
                ctx.fillRect(i*blockSize,j*blockSize,blockSize-1,blockSize-1);
            }

            if (gamePool[i][j].object==2){
                ctx.fillStyle ="green";
                ctx.fillRect(i*blockSize,j*blockSize,blockSize-1,blockSize-1);
            }

            if (gamePool[i][j].object==3){
                ctx.fillStyle ="red";
                ctx.fillRect(i*blockSize,j*blockSize,blockSize-1,blockSize-1);
            }
        }
}
}
// Очистка игровой карты
function cleanGamePool(){
    for(let i=0; i < gamePool.length; i++){ 
        for(let j=0; j < gamePool[i].length; j++){
            if(gamePool[i][j].object == 2 )  gamePool[i][j].object=0;
        }
    }
}



