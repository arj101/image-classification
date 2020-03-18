let mobilenet;

let diode;

function modelReady() {
  console.log("Model is Ready!!!!!");
  mobilenet.predict(diode, (error, results) => {
    if (error){
      createP(error);
      console.error(error);
    }
    if (results) {
      console.log(results);
      createP(results);
    }
  });
}

function imageReady() {
  image(diode, 0, 0, width, height);
  console.log("Image loaded");
}

function setup() {
  createCanvas(640, 480);
  background(0);
  diode = createImg("images/airplane.jpg", imageReady);
  diode.hide();

  mobilenet = ml5.imageClassifier("MobileNet", modelReady);
}

function draw() {}
