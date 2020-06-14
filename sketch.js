var i = 0;
var r = 150;
const hex = 0;
function setup() {
    createCanvas(windowWidth,windowHeight);   
    
}
  
function draw() {
  i = 2*second()*Math.PI/(60);
  background((hour()+minute()+second())*1.8.toString(),(minute()+second())*2.161.toString(),(second())*4.322.toString());
  textSize(50);
  //text((hour().toString()+'.'+minute().toString()+'.'+second().toString()),width/2-tw,height/2-th,tw,th);
  text((hour().toString()+'.'+minute().toString()+'.'+second().toString()),width/2+Math.sin(i)*r,height/2-Math.cos(i)*r);
  
  textSize(15);
  text('rgb-color: ~ '+(Math.floor((hour()+minute()+second())*1.8).toString()+'-'+Math.floor((minute()+second())*2.161).toString()+'-'+Math.floor((second())*4.322).toString()),width*1.5/2,height*1.5/2);
  if( contrast([(hour()+minute()+second())*1.8,(minute()+second())*2.161,second()*4.322],[255,255,255])>4.5){
    fill(255,255,255);
  }else{
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