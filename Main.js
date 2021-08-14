var Filter_Y = 0;
var Filter_X = 0;
var Filter;

function preload(){
    Filter = loadImage('https://i.postimg.cc/d0pSXBX8/Filter.png');
}

function setup(){
    canvas = createCanvas(300, 300);
    canvas.position(490, 150);
    video = createCapture(VIDEO);
    video.hide();
    video.size(300, 300);

    //Initialising PoseNet
    PoseNet = ml5.poseNet(video, model_loaded);
    PoseNet.on('pose', getPoses);
}

function model_loaded(){
    console.log("PoseNet is Initialised");
}

function getPoses(results){
    if(results.length > 0){
        console.log(results);
    }

    Filter_Y = results[0].pose.nose.y - 140;
    Filter_X = results[0].pose.nose.x - 58;
    console.log("Nose X: " + Filter_X + "Nose y - 50: " + Filter_Y);
}

function draw(){
    image(video, 0, 0, 300, 300);
    image(Filter, Filter_X, Filter_Y, 130, 150)
}

function takeSnapshot(){
    save('Filtered.png');
}
