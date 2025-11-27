function setup (){
    createCanvas(1470, 835);
}



function draw (){

    //Background
    background (25, 25, 80);


    //Edificio gris
    stroke(0);
    strokeWeight(4);  
    fill(150, 150, 150);
    rect(30, 150, 300, 700);
    //Ventanas arrina
    fill(250, 200, 0);
    rect(70, 200, 75, 75);
    fill(250, 200, 0);
    rect(210, 200, 75, 75);
    //Ventanas dos 
    fill(250, 200, 0);
    rect(70, 310, 75, 75);
    fill(100, 100, 0); //Luz opaca
    rect(210, 310, 75, 75);
    //Ventanas tres
    fill(250, 200, 0);
    rect(70, 420, 75, 75);
    fill(250, 200, 0);
    rect(210, 420, 75, 75);
    //Ventanas cuatro
    fill(100, 100, 0);//Luz opaca
    rect(70, 530, 75, 75);
    fill(250, 200, 0);
    rect(210, 530, 75, 75);
    //Ventanas cinco
    fill(250, 200, 0);
    rect(70, 640, 75, 75);
    fill(250, 200, 0);
    rect(210, 640, 75, 75);
    //Ventanas seis
    fill(250, 200, 0);
    rect(70, 750, 75, 75);
    fill(250, 200, 0);
    rect(210, 750, 75, 75);
    //Letrero
    fill(0, 0, 0);
    rect(80, 80, 5, 70);
    fill(0, 0, 0);
    rect(270, 80, 5, 70);
    fill(80, 80, 80);
    rect(30, 50, 300, 75);


    //Dinosaurio
    stroke(0);
    strokeWeight(1);  
    fill(100, 120, 100);
    triangle(550, 290, 650, 350, 500, 390);//Cabeza
    fill(100, 120, 100);
    rect(650, 450, 70, 20);//brazo abajo
    fill(100, 120, 100);
    rect(778, 720, 30, 100);//pierna abajo
    fill(100, 120, 100);
    rect(768, 800, 40, 20);//pie abajo
    fill(100, 120, 100);
    fill(100, 120, 100);
    triangle(930, 680, 900, 650, 990, 600)//cola
    triangle(930, 680, 650, 350, 800, 780); //Cuerpo (punto cola, punto cabeza, punto pies)
    fill(100, 120, 100);
    rect(660, 465, 60, 20); //Brazo arriba
    fill(100, 120, 100);
    rect(805, 720, 30, 100);//pierna arriba
    fill(100, 120, 100);
    rect(795, 805, 40, 20);//pie arriba


    //Globo aerostático
    noStroke();
    fill(0, 0, 0);
    rect(1160, 255, 2, 100);//Cable derecho
    rect(1235, 255, 2, 100);//Cable izquierdo
    fill(220, 5, 10);
    circle(1200, 175, 185) //Globo
    arc(1200, 200, 150, 160, 0, PI); //Globo
    stroke(0);
    strokeWeight(1); 
    fill(128, 64, 0);
    rect(1150, 320, 95, 50);//Canastilla

}



