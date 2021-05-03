var nosex=0
var nosey=0
var difference=0
var rightwristx=0
var leftwristx=0
function setup(){
    canvas=createCanvas(300,300)
    canvas.position(500,200)
    video=createCapture(VIDEO)
    video.size(300,300)
  posenet=ml5.poseNet(video, modelLoaded)
  posenet.on('pose',Gotposes)
}

function modelLoaded(){
    console.log("Model is loaded")
}


function draw(){
    background('blue')
    fill('pink')
    stroke('purple')
    textSize(difference);
     fill('#FFE787'); 
     text('Aradhya',nosex,nosey)
}


function Gotposes(poses,error){
    if(error){
        console.error(error);
    }
    else{
        console.log(poses);
        nosex=poses[0].pose.nose.x
        nosey=poses[0].pose.nose.y

        leftwristx=poses[0].pose.leftWrist.x
        rightwristx=poses[0].pose.rightWrist.x
        difference=leftwristx-rightwristx
    }
}

