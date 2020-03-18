let mobilenet;

let diode;

let input;
let img;



function handleFile(file) {
  print(file);
  if (file.type === 'image') {
    img = createImg(file.data, '');
    img.hide();
mobilenet = ml5.imageClassifier("MobileNet", modelReady);

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
    createP("prediction: " + results[0].label);
createP("confidence: " nf(results[0].confidence) + "%");

      
    }
  });
}


function setup() {
  createCanvas(640, 480);
  background(0);
  input = createFileInput(handleFile);
  input.position(0, 0);
  
}

function draw() {
if (img) {
    image(img, 0, 0, width , height);
  }
}
