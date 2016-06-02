/**
 * Tutorial on making graphs with plotly.js
 **/

//this section creates variables and functions to be represnted as data on the graph please refer to purpleringincome.js for more information on variables.

//brackets
var BRAC1;
var BRAC2;
var BRAC3;
var BRAC4;
var BRAC5 = 250000;
//inc means increment
var inc1 = BRAC1 + 500;
var inc2 = BRAC2 + 500;
var inc3 = BRAC3 + 500;
var inc4 = BRAC4 + 500;
//subtract variables
var sub1 = inc1 - BRAC1;
var sub2 = inc2 - BRAC2;
var sub3 = inc3 - BRAC3;
var sub4 = inc4 - BRAC4;
//additional tax refer to purpleringincome.js
var ADDTAX1;
var ADDTAX2;
var ADDTAX3;

//functions, the results are to be displayed on the y axis.
//bt means bracket tax
//bracket 1
function bt1() {
    return (BRAC1 - BRAC1) * 0.1;
}

function bt2() {
    return (sub1 * 0.1);
}

//bracket 2
function bt3() {
    return (BRAC2 - BRAC2) * 0.16 + ADDTAX1;
}

            
function bt4() {
    return (sub2 * 0.16) + ADDTAX1;
}
    
//bracket 3
function bt5() {
    return (BRAC3 - BRAC3) * 0.24 + ADDTAX2;
}

function bt6() {
    return (sub3 * 0.24) + ADDTAX2;
}
    
//bracket 4
function bt7() {
    return (BRAC4 - BRAC4) * 0.36 + ADDTAX3;
}
    
function bt8() {
    return (sub4 - BRAC4) * 0.36 + ADDTAX3;
}
    
//bracket 5
function bt9() {
    return (BRAC5 - BRAC4) * 0.36 + ADDTAX3;
}
    
//y values
var y1 = bt1;
var y2 = bt2;
var y3 = bt3;
var y4 = bt4;
var y5 = bt5;
var y6 = bt6;
var y7 = bt7;
var y8 = bt8;
var y9 = bt9;
//ignore meterial above, attempted use of functions for graph

    
//written as result of bt(N) refer to above functions and variables

//x values to be diplayed refer to income brackets note: x values go up by increments of 500 until 184500 to 250000

    

/**
 * This function draws a graph
 */
function drawGraph() {

    // declare all variables (variables inside a function are created when the function is called)
    var trace, data, layout,

    
    /* Trace is an object that stores the x and y values. The x, y and type variables are required mandatory. */
        trace = {
            x: [16000, 16500, 52500, 53000, 113000, 113500, 184500 , 185000, 250000 ], // x values
            y: [0, 50, 3650, 3730, 13330, 13450, 30490, 30670,  ], // y values
        type: 'scatter', // the type of graph
        mode: 'lines+markers', // how the data should be displayed
        name: "trace" // a name for the data to appear on the legend (if present)
    };

    // Data is an array that stores the traces we wish to graph. Add further traces to the array for multiple data sets.
    data = [trace];

    /* To add a title and axis labels, we need to create a layout (another object). Setting a layout is optional, but they do improve the graph. */
    layout = {
        title: "Tax data from Zabututi income brackets",
        yaxis: {
            title: "tax", // give the axis a label
            zerolinewidth: 1.5, // makes the zero line thicker
            range: [0, 60000]
        },
        xaxis: {
            title: "income",
            zerolinewidth: 1.5,
            range: [0, 250000] // sets a minimum and maximum value for the axis
        }
    };

    /* Finally we tell plotly to put the graph in the 'graph' div.*/
    Plotly.newPlot("graph", data, layout);
}

// Run the function to draw the graph.
drawGraph();
