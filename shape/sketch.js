var radius = 100;
var corner = 5;
var innerrad= 50;
var bigger=1;
var osc = -1;
var control = 0;
var lincol=[0,120,255];
function setup(){
    createCanvas(windowWidth,windowHeight);
}
function draw(){
    background(0);
    textSize(20);
    fill(255);
    text('corner: '+corner.toString(),10,100);
    text('radius: '+radius.toString(),10,150);
    fill(255);
    noFill();
    //stroke(random(255),random(255),random(255));
    strokeWeight(0.1);
    translate(width/2,height/2);
    ellipse(0,0,radius*2,radius*2);
    ellipse(0,0,innerrad*2,innerrad*2);
    beginShape();
    for(var c=0;c<corner;c++){
        stroke(lincol);
        strokeWeight(2);
        rotate(2*PI/corner)
        line(0,-innerrad,0,-radius*bigger*c/corner);  
        
    }
    // for(var cc=0;cc<corner*2;cc++){
    //     stroke(0,255,0);
    //     strokeWeight(2);
    //     rotate(2*PI/corner/2)
    //     line(0,-innerrad/2,0,-innerrad*bigger*cc/corner);  
    // }
    // for(var ccc=0;ccc<corner*4;ccc++){
    //     strokeWeight(2);
    //     stroke(255,0,0);
    //     rotate(2*PI/corner/4)
    //     line(0,-3*innerrad/2,0,-innerrad*bigger*ccc/corner);  
    // }
    endShape();
    stroke(255);
    strokeWeight(1);
    
    bigger += 0.01;
    corner += 0.02;
    radius += osc * 0.5;

    if(radius== -100){
        control=1;
    }
    if(radius==100){
        control=0;
    }

    if(control == 0){
        lincol = [0,120,255];
        osc =-1;
    }else if (control==1){
        lincol = [120,0,255];
        osc = 1;
    }
    
    
}
