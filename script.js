Beard = "";
BeardX = "";
BeardY = "";

Sunglasses = "";
SunglassesX = "";
SunglassesY = "";
function preload() {
    Beard = loadImage("https://i.postimg.cc/PqjDjbXW/Beard.png");
    Sunglasses = loadImage("https://i.postimg.cc/gjpvMqsm/Sunglasses.png");
}

function setup() {
    canvas = createCanvas(500, 380);
    camera = createCapture(VIDEO);
    camera.hide();
    canvas.center();

    posenet = ml5.poseNet(camera, modelLoaded);
    posenet.on('pose', gotPoses);
}

function draw() {
    image(camera, 0, 0, 500, 380);

    image(Beard, BeardX, BeardY, 210, 180)
    image(Sunglasses, SunglassesX, SunglassesY, 180, 60)
}

function modelLoaded(){
    console.log("poseNet has been initialized");
}

function gotPoses(result){
    if (result.length > 0){
        console.log(result);
        BeardX = result[0].pose.nose.x -190;
        BeardY = result[0].pose.nose.y -120;

        SunglassesX = result[0].pose.nose.x -170;
        SunglassesY = result[0].pose.nose.y -135;
    }
    else{
        console.log("error");
    }
}
function savePicture(){
    save("Beard.png")
}