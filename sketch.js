

var name,input,value

function setup(){

    createCanvas(800,800);


   
    input = createInput();
    input.position(200,200);
    input.changed(newText);
   // value= input.changed(newText);
   




}

function draw(){
   // if(value!==defined){
   //text("Welcome : " + value,200,300)
    //}
   // newText();
}

function newText(){
    
    console.log(input.value());
    var value=input.value();
    textSize(32);
    fill("black");
    text("Welcome : " + value,200,250);
}