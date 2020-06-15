var i = 0;
var r = 150;
const hex = 0;

function setup() {
    createCanvas(windowWidth,windowHeight);   
    
}
  
function draw() {
  i = 2*second()*Math.PI/(60); //second
  m = 2*minute()*Math.PI/(60); //minute
  h = 4*hour()*Math.PI/(24); //hour
  background((hour()+minute()+second())*1.8.toString(),(minute()+second())*2.161.toString(),(second())*4.322.toString());
  textSize(50);
  //text((hour().toString()+'.'+minute().toString()+'.'+second().toString()),width/2-tw,height/2-th,tw,th);
  //text((hour().toString()+'.'+minute().toString()+'.'+second().toString()),width/2+Math.sin(i)*r,height/2-Math.cos(i)*r);
  text((hour().toString()+'.'+minute().toString()+'.'+second().toString()),width/10,height/2);
  textSize(20);
  text('rgb-color: ~ '+(Math.floor((hour()+minute()+second())*1.8).toString()+'-'+Math.floor((minute()+second())*2.161).toString()+'-'+Math.floor((second())*4.322).toString()),width*1.5/2,height*1.5/2);
  if(contrast([(hour()+minute()+second())*1.8,(minute()+second())*2.161,second()*4.322],[255,255,255])>4.5){
    drawArrowI(i);
    drawArrowM(m);
    drawArrowH(h);
    stroke(255,255,255);
    //strokeWeight(0.5);
    fill(255,255,255);
  }else{
    drawArrowI(i);
    drawArrowM(m);
    drawArrowH(h);
    stroke(0,0,0);
    //strokeWeight(0.5);
    fill(0,0,0);
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

function drawArrowI(i_){
  line(width/2,height/2, width/2+Math.sin(i_)*r*0.7, height/2-Math.cos(i_)*r*0.7);
  textSize(30);
  text((second()).toString(),width/2+Math.sin(i_)*r*(1/.5), height/2-Math.cos(i_)*r*(1/.5));
  
  //line(width/2+Math.sin(i_)*r*0.7, height/2-Math.cos(i_)*r*0.7,width/2+Math.sin(i_)*r*0.7-10*Math.tan(PI/4), height/2-Math.cos(i_)*r*0.7-10*Math.tan(PI/4));
  //line(width/2+Math.sin(i_)*r, height/2-Math.cos(i_)*r,width/2+Math.sin(i_)*r-100, height/2-Math.cos(i_)*r-100);
}
function drawArrowM(i_){
  line(width/2,height/2, width/2+Math.sin(i_)*r*0.65, height/2-Math.cos(i_)*r*0.65);
  textSize(30);
  text((minute()).toString(),width/2+Math.sin(i_)*r*(1/.65), height/2-Math.cos(i_)*r*(1/.65));
  
  //line(width/2+Math.sin(i_)*r, height/2-Math.cos(i_)*r,width/2+Math.sin(i_)*r+100, height/2-Math.cos(i_)*r+100);
  //line(width/2+Math.sin(i_)*r, height/2-Math.cos(i_)*r,width/2+Math.sin(i_)*r-100, height/2-Math.cos(i_)*r-100);
}
function drawArrowH(i_){
  line(width/2,height/2, width/2+Math.sin(i_)*r*0.5, height/2-Math.cos(i_)*r*0.5);
  textSize(30);
  text((hour()).toString(),width/2+Math.sin(i_)*r*(1/.7), height/2-Math.cos(i_)*r*(1/.7));
  
  //line(width/2+Math.sin(i_)*r, height/2-Math.cos(i_)*r,width/2+Math.sin(i_)*r+100, height/2-Math.cos(i_)*r+100);
  //line(width/2+Math.sin(i_)*r, height/2-Math.cos(i_)*r,width/2+Math.sin(i_)*r-100, height/2-Math.cos(i_)*r-100);
}

// function hexToRGB(h) {
//   let r = 0, g = 0, b = 0;

//   // 3 digits
//   if (h.length == 4) {
//     r = "0x" + h[1] + h[1];
//     g = "0x" + h[2] + h[2];
//     b = "0x" + h[3] + h[3];

//   // 6 digits
//   } else if (h.length == 7) {
//     r = "0x" + h[1] + h[2];
//     g = "0x" + h[3] + h[4];
//     b = "0x" + h[5] + h[6];
//   }
  
//   return r,g,b;
// }
//hexToRGB(parseInt(Date.now().toString(),16))