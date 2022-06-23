
difference=0;
leftwristX=0;
rightwristX=0;
function setup() {
    video=createCapture(VIDEO);
    video.size(550,500);
canvas=createCanvas(550,550);
canvas.position(550,130);
poseNet=ml5.poseNet(video,modelLoaded);
poseNet.on('pose',gotPoses);
}
function modelLoaded() {
    console.log('Posenet is intialised');
}
function draw() {
    background('#ffc0cb');
    textSize(difference);
    fill('#0000FF');
    text('Sukhleen Kaur',50,400);
}
function gotPoses(results) {
    if(results.length>0) {
        console.log(results);
        leftwristX=results[0].pose.leftWrist.x;
        rightwristX=results[0].pose.rightWrist.x;
        difference=floor(leftwristX-rightwristX);
        console.log("leftwristX= "+leftwristX+"rightwristX= "+rightwristX+"difference= "+difference);
    }
}