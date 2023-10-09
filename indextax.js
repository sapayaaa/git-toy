let prompt = require('prompt-sync')();
let input = prompt('Enter Net Salary:');
let payTax = parseFloat(input);


// Calculating the payee according to the information given in the link

function calculatePayee(basicSalary) {
  if (basicSalary <= 24000) {
    return basicSalary * 0.1;
  } else if (basicSalary <= 32333) {
    return 2400 + (basicSalary - 24000) * 0.25;
  } else if (basicSalary <= 500000) {
    return 4813.33 + (basicSalary - 32333) * 0.3;
  } else if (basicSalary <= 800000) {
    return 141000 + (basicSalary - 500000) * 0.325;
  } else {
    return 237500 + (basicSalary - 800000) * 0.35;
  }
}

// Calculate the NHIF contribution based on the basic salary.
function calculateNhif(basicSalary) {
  /* Multiple
line
commennt*///it is determining the amount to be taken out according to what yu earn as your basic salary
  if (basicSalary <= 5999) {
    return 150;
  } else if (basicSalary <= 7999) {
    return 300;
  } else if (basicSalary <= 11999) {
    return 400;
  } else if (basicSalary <= 14999) {
    return 500;
  } else if (basicSalary <= 19999) {
    return 600;
  } else if (basicSalary <= 24999) {
    return 750;
  } else if (basicSalary <= 29999) {
    return 850;
  } else if (basicSalary <= 34999) {
    return 900;
  } else if (basicSalary <= 39999) {
    return 950;
  } else if (basicSalary <= 44999) {
    return 1000;
  } else if (basicSalary <= 49999) {
    return 1100;
  } else if (basicSalary <= 59999) {
    return 1200;
  } else if (basicSalary <= 69999) {
    return 1300;
  } else if (basicSalary <= 79999) {
    return 1400;
  } else if (basicSalary <= 89999) {
    return 1500;
  } else if (basicSalary <= 99999) {
    return 1600;
  } else {
    return 1700;
  }
}

// Calculate the NSSF contribution based on the basic salary you were given
function calculateNssf(basicSalary) {
  return basicSalary * 0.06;
}

/* Multiple
line
commennt*///Calculate the net salary based on the basic salary, benefits, and deductions each in its own step
function calculateNetSalary(basicSalary, benefits) {
  const grossSalary = basicSalary + benefits;
  const payee = calculatePayee(basicSalary);
  const nhif = calculateNhif(basicSalary);
  const nssf = calculateNssf(basicSalary);
  const totalDeductions = payee + nhif + nssf;
  const netSalary = grossSalary - totalDeductions;
  return netSalary;
}

// Get the basic salary and benefits from the user.
const basicSalary = prompt("Enter basic salary: ");
const benefits = prompt("Enter benefits: ");

// Calculate the net salary. of the whole thing
const netSalary = calculateNetSalary(basicSalary, benefits);

// Display the net salary of the calculation to the one using it
console.log("Net salary:", netSalary);