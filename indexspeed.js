let prompt = require('prompt-sync')();
let input = prompt('Enter speed')


const speedlimit = 70

function speedDetector (speed){
if (speed<70){ 
  return "ok";
} else {
  let points = Math.floor((speed - 70) / 5);
if (points>12){
return "license suspended";
 } else {
return `points: ${points}`;
}
}}
console.log(speedDetector(input))



