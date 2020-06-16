var i = 0;
var r = 150;
const hex = 0;



function setup() {
    
    var myc = createCanvas(windowWidth,windowHeight); 
    myc.parent('bc');
    
    
}
  
function draw() {
  r = height/4.4;
  i = 2*second()*Math.PI/(60); //second
  m = 2*minute()*Math.PI/(60); //minute
  h = 4*hour()*Math.PI/(24); //hour
  background((hour()+minute()+second())*(255/(59+59+23)).toString(),(minute()+second())*(255/(59+59)).toString(),(second())*(255/59).toString());

  if(contrast([(hour()+minute()+second())*(255/(59+59+23)),(minute()+second())*(255/(59+59)),second()*(255/59)],[255,255,255])>4.5){
    fill(255,255,255);
    stroke(255,255,255);
    strokeWeight(0);
    
    textSize(50);
    text((hour().toString()+'.'+minute().toString()+'.'+second().toString()),0,height/10);
    textSize(20);
    text('rgb-color: ~ '+(Math.floor((hour()+minute()+second())*(255/(59+59+23))).toString()+'-'+Math.floor((minute()+second())*(255/(59+59))).toString()+'-'+Math.floor((second())*(255/59)).toString()),width*1.5/2,height*1.5/2);
    drawArrowI(i);
    drawArrowM(m);
    drawArrowH(h);
    noFill();
    sArc(i);
    //menu.style.color = "white";
    //strokeWeight(0.5);
    
  }else{
    fill(0,0,0);
    stroke(0,0,0);
    strokeWeight(0);
    
    textSize(50);
    text((hour().toString()+'.'+minute().toString()+'.'+second().toString()),0,height/10);
    textSize(20);
    text('rgb-color: ~ '+(Math.floor((hour()+minute()+second())*(255/(59+59+23))).toString()+'-'+Math.floor((minute()+second())*(255/(59+59))).toString()+'-'+Math.floor((second())*(255/59)).toString()),width*1.5/2,height*1.5/2);
    
    drawArrowI(i);
    drawArrowM(m);
    drawArrowH(h);
    noFill();
    
    sArc(i);
    //menu.style.color = "black";
   
    
    //strokeWeight(0.5);
    
  }
  
}

function luminanace(r, g, b) {
  var a = [r, g, b].map(function (v) {
      v /= 255;
      return v <= 0.03928
          ? v / 12.92
          : Math.pow( (v + 0.055) / 1.055, 2.4 );
  });
  return a[0] * 0.2126 + a[1] * 0.7152 + a[2] * 0.0722;
}
function contrast(rgb1, rgb2) {
  var lum1 = luminanace(rgb1[0], rgb1[1], rgb1[2]);
  var lum2 = luminanace(rgb2[0], rgb2[1], rgb2[2]);
  var brightest = Math.max(lum1, lum2);
  var darkest = Math.min(lum1, lum2);
  return (brightest + 0.05)
       / (darkest + 0.05);
}
var facto = 1.2;
function drawArrowI(i_){
  var sc = 0.9;
  strokeWeight(4);
  line(width/2,height/2, width/2+Math.sin(i_)*r*sc,height/2-Math.cos(i_)*r*sc);
  textSize(30);
  strokeWeight(0);
  text((second()).toString(),width/2+Math.sin(i_)*r*(facto/sc), height/2-Math.cos(i_)*r*(facto/sc));
  
}
function drawArrowM(i_){
  var mc = 0.8;
  strokeWeight(4);
  line(width/2,height/2, width/2+Math.sin(i_)*r*mc, height/2-Math.cos(i_)*r*mc);
  textSize(30);
  strokeWeight(0);
  text((minute()).toString(),width/2+Math.sin(i_)*r*(facto/mc), height/2-Math.cos(i_)*r*(facto/mc));
  
}
function drawArrowH(i_){
  var hc = 0.7;
  strokeWeight(4);
  line(width/2,height/2, width/2+Math.sin(i_)*r*hc, height/2-Math.cos(i_)*r*hc);
  textSize(30);
  strokeWeight(0);
  text((hour()).toString(),width/2+Math.sin(i_)*r*(facto/hc), height/2-Math.cos(i_)*r*(facto/hc));
  
  
}
function sArc(s_){
  strokeWeight(4);
  ellipse(width/2,height/2,2*r,2*r)
  
  
}
