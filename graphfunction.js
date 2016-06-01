
/**
 * Tutorial on making graphs with plotly.js
 **/


 //This function calculates the income tax owed on an income.
  //Parameters: , income (per year)
 // Returns: the income tax to be payed

//variables
var income; ;
var tax;

/**
 * This function calculates the income tax*/

function incomeTax(income){ 
    return tax;
}



/**
 * This function draws a graph
 */
function drawGraph() {

    // declare all variables (variables inside a function are created when the function is called)
    var income
    var tax; 
    
    //generate the values
    //defines position on graph
    for  (a = 0; a < 250000; a+50) {
        income[a] = a ;
        tax[a] = incomeTax(income);  
    }
    
    /* Trace is an object that stores the x and y values. The x, y and type variables are required mandatory. */
    trace = {
        x:income, // x values
        y:tax, // y values
        type: 'scatter', // the type of graph
        mode: 'lines+markers', // how the data should be displayed
        name: "trace" // a name for the data to appear on the legend (if present)
    };

    // Data is an array that stores the traces we wish to graph. Add further traces to the array for multiple data sets.
    data = [trace];

    /* To add a title and axis labels, we need to create a layout (another object). Setting a layout is optional, but they do improve the graph. */
    layout = {
        title: "Zabututi Income Graph",
        yaxis: {
            title: "Tax", // give the axis a label
            zerolinewidth: 1.5 // makes the zero line thicker
        },
        xaxis: {
            title: "Income",
            zerolinewidth: 1.5,
           // range: [0, 5] // sets a minimum and maximum value for the axis
        }
    };

    /* Finally we tell plotly to put the graph in the 'graph' div.*/
    Plotly.newPlot("graph", data, layout);
}

// Run the function to draw the graph.
drawGraph();

