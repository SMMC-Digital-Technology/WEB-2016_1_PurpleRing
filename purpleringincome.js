/* DOCTYPE Javascipt */

//variables
var incomeField= document.getElementById("incomeField");
var difference;
var product;
var sum;
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
//Statement Display variable
var statementDisplay= document.getElementById("taxDue");
var displayZero = " No tax " ;
var displayResult= " Your tax is " ;

//income tax calculator
function calculateTax() { 
    var income=incomeField.value;
    var tax = incomeTax(income);
    statementDisplay.innerHTML= displayResult + tax;
}

function incomeTax(income) {
    var tax;
if (income < BRAC1) {
            tax = displayZero;
    
} else if (income < BRAC2) {;
   difference = income - BRAC1;
   product = difference * TAXPER1 ;
    tax = product;
                                
} else if (income < BRAC3) {; 
  difference = income - BRAC2;
  product = difference * TAXPER2;
  sum = product + ADDTAX1;
tax  = sum;
} else if (income < BRAC4) {
  difference = income - BRAC3;
  product = difference * TAXPER3;
  sum = product + ADDTAX2;
  tax = sum;
 
} else { 
  difference = income - BRAC4;
  product = difference * TAXPER4;
  sum = product + ADDTAX3;
  tax = sum;  
}
    return tax;
}

function incomeTax(){}
function drawGraph(){}