class Apple{
 constructor(){
   this.coordinate={
      x:0,
      y:0,
   }
 }
 showApple(mas){
   this.coordinate.x = getRandom(mas.length-1,0); 
   this.coordinate.y = getRandom(mas[1].length-1,0);

   if (mas[this.coordinate.x][this.coordinate.y].object == 0){
      mas[this.coordinate.x][this.coordinate.y].object = 3;
   }
   else this.showApple(mas);
 }
   
}
