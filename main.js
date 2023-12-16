img = "";
status = "";
objects= [];
function preload()    {
    img= loadImage("https://tse3.mm.bing.net/th?id=OIP.FrNQpi-g6unCMX62JOgi0QHaEK&pid=Api&P=0&h=180");
}
function setup()    {
    canvas= createCanvas(500,400);
    canvas.center();
    objectDetector= ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("name").innerHTML= "Object Matched as:";
}

function modelLoaded()  {
    console.log("CocoSSD has been initialized");
   status= true;
   objectDetector.detect(img, gotResult);
}
function gotResult(error, results)    {
    if(error){
        console.log( error);
    }
    console.log(results);
    objects= results;
}
    
    function draw() {
        image (img, 0, 0, 500, 400);
        if (status != "" ){
            for (i=0; i< objects.length; i++) {
                 document.getElementById("name").innerHTML="Data Matched from the Database";
                 percent= floor(objects[i].confidence*100);
                 text(objects[i].label+ "" + percent+ "%" , objects[i].x, objects[i].y);
                 stroke('lightseagreen');
                 fill('lightseagreen');
                 noFill('lightseagreen');
                 rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);
            }
        }
    }