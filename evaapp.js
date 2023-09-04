function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

let choice = getRandomInt(choices.length);
console.log("Number of elements in array: " + choices.length)
console.log("choice: " + choice)
// result += choice + ": " + choices[choice];
let result = (choices[choice]);
// console.log(result);
//const html = ""
// document.getElementById("root").style.color = "black";
document.getElementById("output").innerHTML = result[0];
document.getElementById("image").src = result[1];
