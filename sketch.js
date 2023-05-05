function setup() {
    createCanvas(400, 400);
  }
  
  function draw() {
    background("rgb(255,255,141)");
    fill("rgb(236,155,14)");
    textSize(60);
    textAlign(CENTER, CENTER);
    
    
    let maximo = width;
    let minimo = 0;
    // mouseX, 0, width ==> 0, palavra.length
    let palavra = "lanterna";
    let quantidade = map(mouseX, 0 , width, 1 , palavra.length);
    //console.log(quantidade);
    let parcial = palavra.substring(0, quantidade);
    text(parcial, 200, 200);
    
    
   // if (mouseX < 50) {
   //    let palavra = "L";
   //    text(palavra, 200, 200);
   //  } else if (mouseX < 100) {
   //    let palavra = "La";
   //    text(palavra, 200, 200);
   // }  else {
   //    let palavra = "Lanterna";
   //    text(palavra, 200, 200);
   // }
    
  }