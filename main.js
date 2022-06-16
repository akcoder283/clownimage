noseX= 0;
noseY= 0;

function preload(){
    clownImage= loadImage("https://i.postimg.cc/4xqZMsjk/580b57fbd9996e24bc43bed5.png");
}

function setup(){
    canvas=createCanvas(300,300);
    canvas.center();

    video = createCapture(VIDEO)
    video.size(300,300);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on("pose", gotPoses)
}
function draw(){
    image(video,0,0,300,300);
    //fill(255,0,0);
    //stroke(255,0,0);
    //circle(noseX, noseY, 40);
    image(clownImage,noseX,noseY,30,30);
}
function modelLoaded(){
    console.log("Model is loaded");
}
function gotPoses(results){
console.log(results);

noseX= results[0].pose.nose.x-15;
noseY= results[0].pose.nose.y-15;

console.log(noseX, noseY);
}

function take_snapshot(){
   save("clown.jpg") 
}