
 narizx = 0
 narizy = 0


function preload(){

    filtro = loadImage("https://i.postimg.cc/8c8DNb8V/bigode.png")

}

function setup(){
    canvas = createCanvas (300,300) 
    video = createCapture(VIDEO)
    video.size(300,300)
    video.hide()
    posenet = ml5.poseNet(video, modelLoaded)
    posenet.on("pose",gotPoses)     
}

function modelLoaded(){
    console.log("posenet foi inicializado")
}

function gotPoses(results){
    if( results.length>0){
        console.log(results)
        narizx = results[0].pose.nose.x
        narizy = results[0].pose.nose.y
    }
}

function draw(){

    image(video,0,0,300,300)
    image(filtro,narizx,narizy,150,150)

}

function takeSnapshot(){
    save("foto com filtro.png")
}