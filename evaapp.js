import choices from './evaappvariables.js'
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

let choice = getRandomInt(choices.length);
// result += choice + ": " + choices[choice];
//let result = (choices[choice][0]);
// console.log(result);
//const html = ""
// document.getElementById("root").style.color = "black";
document.getElementById("output").innerHTML = choices[choice][0];
document.getElementById("image").src = choices[choice][1];
