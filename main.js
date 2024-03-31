function capture() {
    Webcam.snap(function (data) {
        document.getElementById("result").innerHTML = '<img id="selfie" src="' + data + '">'

    })
}
function check() {
    img = document.getElementById("selfie")
    classifier.classify(img, gotresult)

}
console.log("version", ml5.version)
Webcam.set({
    width: 350,
    height: 300,
    image_format: "png",
    png_quality: 90
})
camera = document.getElementById("camera")
Webcam.attach("#camera")
classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/gTWkjsCRr/model.json", modelloaded)
function modelloaded() {
    console.log("model is ready");
}
function gotresult(error, result) {
    if (error) {
        console.error(error);
    } else {
        console.log(result);
        document.getElementById("resultObject").innerHTML = result[0].label
        document.getElementById("resultAccuracy").innerHTML = result[0].confidence.toFixed(3)
    }
}