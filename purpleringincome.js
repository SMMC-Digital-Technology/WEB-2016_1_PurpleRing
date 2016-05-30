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
var statementDisplay.innerHTML("Tax");
var displayZero = "No tax";
var displayProduct = " Your Tax is " + product ;
var displaySum = " Your Tax is" + sum ;


//income tax calculator

    function calculateTax() {
        
    
 if (incomeField < BRAC1) {
  return 0;
                                 statementDisplay.innerHTML= displayZero;
    
} else if (incomeField < BRAC2) {;
   difference = income - BRAC1;
   product = difference * TAXPER1 ;
    return product;
                                 statementDisplay.innerHTML= displayProduct;
                                
} else if (incomeField < BRAC3) {; 
  difference = income - BRAC2;
  product = difference * TAXPER2;
  sum = product + ADDTAX1;
  return sum;
                                 statementDisplay.innerhtml= displaySum;
 
} else if (incomeField < BRAC4) {
  difference = income - BRAC3;
  product = difference * TAXPER3;
  sum = product + ADDTAX2;
  return sum;
                                 statementDisplay.innerhtml= displaySum;
       
 
} else { 
  difference = incomeField - BRAC4;
  product = difference * TAXPER4;
  sum = product + ADDTAX3;
  return sum;
                                 statementDisplay.innerHTML = displaySum;
  
}}





  
  