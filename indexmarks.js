let prompt = require('prompt-sync')();//It requires the 'prompt-sync'to take user input
let input = prompt('Enter marks:');//you are required to put in the marks
let enteredMarks = parseFloat(input);//We use parse float to change it from a string to a floating-point numnber

function grades(scores){
  if (scores> 79 && scores<=100) {
  return "A"//If its greater than 79 or less than or equal to a 100, returns"A"
} else if (scores>=60 && scores <= 79) {
  return "B"//If its greater than or equal to 60 or less than or equal to 79, ruturn"B"
} else if ( scores>=50 && scores <= 59) {
  return "c"//If its greater than or equal to 50 or less than or equal to 59, return"C"
} else if (scores>=40 && scores <= 49) {
   return "D"// if its greater than or equal to 40 or less than or equal to 49 return"D"
} else if (40<scores)
  return "E"//If the value is less than 40 return "E"
  else {
 return "unrated" //If nono of the abovr condition are met,return"unrated"
  }
}
console.log ("Enter marks: "+ grades(enteredMarks))//It calls the "marks" function with "enteredMarks" as the argument and shows the marks