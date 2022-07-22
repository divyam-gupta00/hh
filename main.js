song="";
function preload(){
    
}
function setup(){
    canvas= createCanvas(500,400)
    canvas.center()
    video= createCapture(VIDEO)
    video.hide()
    posenet = ml5.poseNet(video, modelLoded)
    posenet.on("pose", gotResult)
    
}
function draw(){
    image(video, 0,0,600, 500)
}
function play1(){
    song.play()
}
function stop1(){
    song.stop()
}
function modelLoded(){
    console("modelloaded")
}
function gotResult(r){
if(r.length > 0){
    console.log(r)
leftwristx=r[0].pose.leftWrist.x
leftwristy=r[0].pose.leftWrist.y
console.log("lx="+ leftwristx+ " ly="+ leftwristy)
rightwristx=r[0].pose.rightWrist.x
rightwristy=r[0].pose.rightWrist.y
console.log("rx="+ rightwristx+ " ry="+ rightwristy)
}
}