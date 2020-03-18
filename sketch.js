let mobilenet;

let diode;

let input;
let img;



function handleFile(file) {
  print(file);
  if (file.type === 'image') {
    img = createImg(file.data, '');

mobilenet = ml5.imageClassifier("MobileNet", modelReady);

  } else {
    img = null;
img.hide();
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
createP((results[0].confidence)* 100);
      let label = results[0];
      fill(0);
      textSize(64);
      
    }
  });
}


function setup() {
  createCanvas(800, 600);
  background(0);
  input = createFileInput(handleFile);
  input.position(0, 0);
  
}

function draw() {
if (img) {
    image(img, 0, 0, width , height);


  }
}
