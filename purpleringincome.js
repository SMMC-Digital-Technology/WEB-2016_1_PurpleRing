/* DOCTYPE Javascipt */

//variables
var income = document.getElementById("number");
var difference;
var product;
var sum;
//constants below listed as var due to some browsers not supporting “const”
//income brackets
var BRAC1 = 16000;
var BRAC2 = 52500;
var BRAC3 = 113000;
var BRAC4 = 184500;
//tax percentages 
var TAXPER1 = 0.1;
var TAXPER2 = 0.16;
var TAXPER3 = 0.24;
var TAXPER4 = 0.36;
//additional tax
var ADDTAX1 = 3650;
var ADDTAX2 = 13330;
var ADDTAX3 = 30490;

//income tax calculator
Function calculateTax (( if (income < BRAC1) {
  console.log ("No Taxes due");
  
} else if (income < BRAC2) {
  console.log ("Taxes due");
   difference = income - BRAC1;
   product = difference * TAXPER1 ;
  console.log ( "Your  tax  is " + product);
  
} else if (income < BRAC3) {
  console.log ("Taxes due");
  difference = income - BRAC2;
  product = difference * TAXPER2;
  sum = product + ADDTAX1;
  console.log ( "Your tax is " + sum);
  
} else if (income < BRAC4) {
  console.log (" Taxes due");
  difference = income - BRAC3;
  product = difference * TAXPER3;
  sum = product + ADDTAX2;
  console.log ( "Your tax is " + sum);
   
} else {
  console.log ("Taxes due");
  difference = income - BRAC4;
  product = difference * TAXPER4;
  sum = product + ADDTAX3;
  console.log ( "Your tax is" + sum)
  ))
  { return var sum}