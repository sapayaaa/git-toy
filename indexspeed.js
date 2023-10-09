let prompt = require('prompt-sync')();
let input = prompt('Enter speed')


const speedlimit = 70

function speedDetector (speed){
if (speed<70){ 
  return "Ok";//If the driver limits the speed to less than 70 its ok
} else {
  let points = Math.floor((speed - 70) / 5);
  /* Multiple
line
commennt*///It calculates the number of demirit points that a driver should receive for speeding
  
if (points>12){
return "License Suspended";
//If the point are greater than two hundred it give back 'License Suspended'
 } else {
return `points: ${points}`;
}
}}
console.log(speedDetector(input))



