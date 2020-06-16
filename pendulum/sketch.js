
var scx = 0;
var scy = 0;

var radius = 200;

var initang = Math.PI/4;
var angle = Math.PI/4;

var step = Math.PI/(16*16);

var px = radius*Math.cos(initang);
var py = radius*Math.sin(initang);





function setup(){
    createCanvas(windowWidth,windowHeight);
    slider = createSlider(20,350,200,1);
    slider.position(0,50);

    // slider2 = createSlider(0,8,1,1);
    // slider2.position(0,150);
}

function draw(){

    let val1 = slider.value();
    radius = val1;

    // let val2 = slider2.value();
    // angle = PI/4+PI/16*val2;

    translate(width/2,height/2);
    background(0,0,0);
    ellipseMode(CENTER); 
    // px = mouseX-width/2;
    // py = mouseY-height/2;

    fill(255,255,0);
    ellipse(scx,scy,10,10);
    fill(255,255,255);
    ball(px,py);
    stroke(255);
    rope(scx,scy,px,py);


    px = radius*Math.cos(angle);
    py = radius*Math.sin(angle);


    if(angle<-initang+PI/2){
        step = - step; 
    }else if(angle>initang+PI/2){
        step = -step;
    }
    angle = angle + step;
    
    textSize(20);
    text('radius: '+radius.toString(),-width/2+10,-height/2+110);

    
}

function ball(x,y){
    ellipse(x,y,20,20);
}
function rope(sx,sy,x,y){
    line(sx,sy,x,y)
}