let mobilenet;

let diode;

let input;
let img;



function handleFile(file) {
  print(file);
  if (file.type === 'image') {
    img = createImg(file.data, '');
    img.hide();
  } else {
    img = null;
  }
}
function modelReady(){

  console.log("Model is Ready!!!!!");
  mobilenet.predict(img, (error, results) => {
    if (error){
      createP(error);
      console.error(error);
    }
    if (results) {
      console.log(results);
createP("prediction complete");
    createP(results[0].label);
createP(results[0].confidence);
      let label = results[0];
      fill(0);
      textSize(64);
      
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
input = createFileInput(handleFile);
  input.position(0, 0);

  diode.hide();

  mobilenet = ml5.imageClassifier("MobileNet", modelReady);
}

function draw() {
if (img) {
    image(img, 0, 0, 400 , 400);
  }
}
