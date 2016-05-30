/* DOCTYPE Javascipt */

//variables
var incomeField = document.getElementById("incomeField");
var difference[];
var product [];
var sum= [];
//constants below listed as var due to some browsers not supporting “const”
//constants are in capital letters as per normal convention
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
function calculateTax(income,BRAC1,BRAC2,BRAC3,BRAC4, difference, taxPer, product,addTax, sum ) {

 if (income < BRAC1) {
  return 0;
    
} else if (income < BRAC2) {;
   difference = income - BRAC1;
   product = difference * TAXPER1 ;
    return product;

  
} else if (income < BRAC3) {; 
  difference = income - BRAC2;
  product = difference * TAXPER2;
  sum = product + ADDTAX1;
  return sum;
 
} else if (income < BRAC4) {
  difference = income - BRAC3;
  product = difference * TAXPER3;
  sum = product + ADDTAX2;
  return sum;
 
} else { 
  difference = income - BRAC4;
  product = difference * TAXPER4;
  sum = product + ADDTAX3;
  return sum;
  ))
}
    
function alert(result){
    if (return=0) {
        alert("No Tax Due")
    } else if (return=product) {
        alert (" Your Tax is " + product)
    } else {
        alert ("Your Tax is sum");
    }
}

  
  