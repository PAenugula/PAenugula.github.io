const header = document.getElementById("name");

var asciiVals = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz ."

console.log(getFitness("Phani", "Phani"));
animateGenetically("PHANIRAJ AENUGULA", header);

function randomize() {
  const header = document.getElementById("name");
  animateGenetically("PHANIRAJ AENUGULA", header);
}

function generalRandom() {
  var val = this.innerHTML;
  animateGenetically(val, this);
}


async function animateGenetically(value, pointer) {
  var ranName = getRandomName(value.length);
  var fitness = getFitness(ranName, value);
  while(fitness != value.length) {
     var nName = mutate(ranName);
     var nFitness = getFitness(nName, value);
     if (fitness < nFitness) {
       fitness = nFitness;
       ranName = nName;
       await sleep(50);
       pointer.innerHTML = ranName;
       console.log("d");
     }
  }
  console.log("done");
}


function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}


function getRandomName(length) {
  var asciiVals = "ABCDEFGHIJKLMNOPQRSTUVWXYZ ."
  var name = "";
  for(var i = 0; i < length; i++) {
    name = name + asciiVals[getRandomInt(28)];
  }
  return name;
}

function mutate(value) {
  var asciiVals = "ABCDEFGHIJKLMNOPQRSTUVWXYZ .";
  var test = asciiVals[getRandomInt(28)];
  var nValue = value;
  var ind = getRandomInt(value.length);
  nValue[ind] = test;
  return value.substring(0, ind) + test + value.substring(ind+1, value.length);
}

function getFitness(val, real) {
  var x = 0;
  for(var i = 0; i < real.length; i++) {
    if(real[i] === val[i]) {
      x = x+1;
    }
  }
  return x;
}

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}
