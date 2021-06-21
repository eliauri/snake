class Snake{
 constructor(){
     this.snakeHead={
       x:5,
       y:5,
     }
     this.dir="bottom";
     this.snakeLength = 2;
     this.snake=[];

 }
   show(mas){
      this.move(mas);
      this.updateTale();

      for(let i=0; i<this.snake.length; i++){
         mas[this.snake[i].x][this.snake[i].y].object=2;   
      }
      this.selfEating();

   }
   appleEating(){
      this.snakeLength++;
   }

   selfEating(){ // Проверка на поедание хвоста
      for(let i=0; i < this.snake.length-1; i++){
         if((this.snakeHead.x === this.snake[i].x)  && (this.snakeHead.y === this.snake[i].y)) {
            this.snakeLength=2;
         }
      }
   }

   updateTale(){ // Прорисовка хвоста
      this.snake.push({
         x: this.snakeHead.x,
         y: this.snakeHead.y,
      });
      while(this.snake.length>this.snakeLength){
         this.snake.shift();
      }
   }

   move(mas){ // Движение по направлению
      if (this.dir=="top")  --this.snakeHead.y;
      if (this.dir=="bottom") ++this.snakeHead.y;
      if (this.dir=="right")  ++this.snakeHead.x;
      if (this.dir=="left")   --this.snakeHead.x;
      
      if (this.snakeHead.x >= mas.length) this.snakeHead.x = 0;
      if (this.snakeHead.x < 0) this.snakeHead.x = mas.length-1;
      if (this.snakeHead.y >= mas[1].length) this.snakeHead.y = 0;
      if (this.snakeHead.y < 0) this.snakeHead.y = mas[1].length-1;
   }

   turn(dir){ // Поворот
      if (dir=="ArrowLeft"  && this.dir!="right") this.dir = "left";
      if (dir=='ArrowRight' && this.dir!="left")this.dir = "right";
      if (dir=='ArrowUp' && this.dir!="bottom") this.dir = "top";
      if (dir=='ArrowDown' && this.dir!="top") this.dir = "bottom";
   }
}
