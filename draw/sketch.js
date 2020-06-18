var ps=[];
var vs=[];
var vss =[];
var control=0;
var poly =0;
var clk=0;


var corner;
var angle;
var rad = 100;
function setup(){
    createCanvas(windowWidth, windowHeight);
    poly_button = createButton('MAKE REGULAR POLYGON');
    poly_button.position(10,100);
    poly_button.mousePressed(polly);

    save_canvas = createButton("SAVE YOUR CANVAS");
    save_canvas.position(10,150);
    save_canvas.mousePressed(savcan);
       
    
}
function draw(){
    let radx=width/2;
    let rady=height/2;
    
    background(0);
    beginShape();
    for(var p=0;p<vs.length;p++){
        //ps[p].show();
        vs[p].show();
        
    }
    endShape(CLOSE);
    
    
    //console.log(vs);
    if(poly==1){
        //translate(width/2,height/2);
        corner = vs.length;
        angle = 2*PI/corner;
        for(var st=0;st<60;st++){
            for(var c=0;c<vs.length;c++){
                noFill();
                beginShape();
                vs[c].x=radx+rad*Math.cos(angle*c);
                vs[c].y=rady+rad*Math.sin(angle*c);
                // ps[c].x=radx+rad*Math.cos(angle*c);
                // ps[c].y=rady+rad*Math.sin(angle*c);
                endShape(CLOSE);
            }
        }
        
    }
    if(mouseIsPressed===true ){
        poly =0;
        beginShape();
        for(var ck=0;ck<vs.length;ck++){
            
            //ps[ck].clicked();
            vs[ck].clicked();
        }
        endShape(CLOSE);
    }
}

function mousePressed(){
    if(control==1){
        
        //p=new PP(mouseX,mouseY,20);
        v = new VV(mouseX, mouseY,25);

        //ps.push(p);
        vs.push(v);
        //vss.push(v);
    }
    

}
function keyPressed() {
    if(keyCode===CONTROL){
        control = 1;
        poly = 0;
    }
    if(keyCode === SHIFT){
        clk=1;
    }
    
    
}
function keyReleased(){
    control = 0;
}

// class PP {
//     constructor(x,y,r){
//         this.x = x;
//         this.y = y;
//         this.r = r;
//     }
//     show(){
        
//         stroke(255);
//         strokeWeight(4);
//         noFill();
//         ellipse(this.x,this.y,this.r);
//     }
//     clicked(){
//         let d =dist(mouseX,mouseY,this.x,this.y);
//         if(d<this.r){
//             this.x = mouseX;
//             this.y =mouseY;
//         }
//     }
// }
class VV {
    constructor(x,y,r){
        this.x = x;
        this.y = y;
        this.r = r;
    }
    show(){
        stroke(255,100,100,100);
        ellipse(this.x,this.y,this.r);
        stroke(255);
        strokeWeight(4);
        noFill();

        vertex(this.x,this.y);
        
    }
    clicked(){
        let d =dist(mouseX,mouseY,this.x,this.y);
        if(d<this.r){
            this.x = mouseX;
            this.y =mouseY;
        }
    }
}

function polly(){
    poly=1;
}
function savcan(){
    let date = Date.now();
    saveCanvas(date.toString());
}