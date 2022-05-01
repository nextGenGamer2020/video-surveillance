video = ""

function preload(){
    video = createVideo("video.mp4")
    video.hide()
}


function setup(){
    
    canvas = createCanvas(350,350)
    canvas.center()

}


function draw(){
    image(video, 0, 0, 350,350)
}