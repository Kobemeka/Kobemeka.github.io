var rw = 0;
var rh = 0;
var radius = 300;
var osc = 1;
var ang = 3;
var colorArray = [];
function setup(){
    
    createCanvas(windowWidth,windowHeight);
    slider = createSlider(1,40,20,1);
    slider.position(10,10)

}
function draw(){
    let val = slider.value();
    ang = val;
    
    fill(255,255,255);
    
    translate(width/2,height/2);
    
    if(rw<1 || rw>-1){
        osc = 1;
    }else{
        osc = -1;
    }
    if(rh<1 || rh>-1){
        osc = 1;
    }else{
        osc = -1;
    }

    rw = rw + osc*Math.PI/(ang*6);
    rh = rh + osc*Math.PI/(60);

    background(0,0,0);
    for(var a=0;a<ang;a++){
        colorArray.push([random(100,255),random(100,255),random(100,255)])
        fill(colorArray[a])
        rotate(PI/ang);
        drel(Math.sin(rw+10*a*2)*radius,0);
    }
    rotate(PI);
    fill(255);
    textSize(30);
    text('# of balls:'+ang.toString(),-width/2+10,-height/2+60);
    
    // rotate(PI/ang);
    // drel(0,Math.cos(rw+10*15)*radius);
    // rotate(PI/ang);
    // drel(Math.sin(rw+10*10)*radius,0);
    // rotate(PI/ang);
    // drel(0,Math.cos(rw+10*10)*radius);
    // rotate(PI/ang);
    // drel(Math.sin(rw+10*5)*radius,0);
    // rotate(PI/ang);
    // drel(0,Math.cos(rw+10*5)*radius);
    // rotate(PI/ang);
    // drel(Math.sin(rw)*radius,0);
    // rotate(PI/ang);
    // drel(0,Math.cos(rw)*radius);
    
    // drel(0,Math.cos(rh)*radius);
    // drel()
    
}
function drel(w,h){
    ellipse(w,h,10**2.3/ang,10**2.3/ang);
}