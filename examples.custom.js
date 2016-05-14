// custom.js

// -----------------------------------------
// Example 0
// -----------------------------------------

// Do it yourself:
// Open Developer Tools > Console and see that we select the div#example0 node.
// console.log() is like the print() function
console.log("Example 0:");
console.log(d3.select("body").select("div#example0"));

// // Add to this division
// // Note that whitespace does not matter in JS.
// // You can chain methods just like Python.
d3.select("body").select("div, #example0")
  .append("p")
  .text("This line appears because of D3.js.")

// -----------------------------------------
// Example 1
// -----------------------------------------
// Define a dummy dataset as an array.
// Arrays in JS are like lists in Python. You can different data types in the same array.
// Indexing starts from 0 in JS.
var arrayDataset = [10, 20, 30, "hello", 50];

// Print the arrayDataset to the console.
// Open Developer Tools > Console to see this output.
console.log("Example 1:");
console.log("First element of arrayDataset = " + arrayDataset[0]); // Indexing starts from 0 in JS.

// Define a simple function
var simpleFunction = function(x) {
  return x;
};

// Write this arrayDataset to Example 1
// First, we add a simple text sentence that tells us what we're adding.
d3.select("body").select("div#example1")
  .append("p")
  .text("Our arrayDataset looks like this:")

d3.select("body").select("div#example1").selectAll("p#arrayDataset")
  .data(arrayDataset)
  .enter()
  .append("p")
  .text(simpleFunction);

// -----------------------------------------
// Example 2
// -----------------------------------------
// Define a dummy dataset as a JavaScript Object.
// JavaScript Object Notation (JSON) is the format you use to specify JS Objects.
// In fact, JSON originally comes from JS!
// If you don't know JSON, JS Objects are like dictionaries in Python or named lists in R.
var objectDataset1 = {firstName: "James", lastName: "Bond", codeNumber: "007"}
var objectDataset2 = {firstName: "Jason", lastName: "Bourne", codeNumber: "unknown"}

// Print the objectDataset1 to the console.
// Open Developer Tools > Console to see this output.
console.log("Example 2:");
console.log("Name = " + objectDataset1.firstName + " " + objectDataset1.lastName);
console.log("Code = " + objectDataset1.codeNumber + ", with a license to kill.");

// Create an array of Objects
var arrayObjects = [objectDataset1, objectDataset2]

// Use this arrayDataset to write out something
d3.select("body").select("div#example2").selectAll("p#objectDataset")
  .data(arrayObjects)
  .enter()
  .append("p")
  .text(function(x) {
    console.log(x);
    return x.firstName + " " + x.lastName + ", " + x.codeNumber;
  });


// -----------------------------------------
// Example 3
// -----------------------------------------
console.log("Example 3:");

// Read a CSV file
// Inspect the output on the Console.
csvFileLocation = "./diamonds.csv" // This file must exist!
var csvDataset; // Global variable

var printCSVDataset = function() {
  // Print out this csv file
  d3.select("body").select("div#example3").selectAll("p#csv")
  .data(csvDataset)
  .enter()
  .append("p")
  .text(function(rowObject) {
    // rowObject is a JS Object
    console.log(rowObject);
    return rowObject.carat + " " + rowObject.cut + " " + rowObject.table;
  });
}

// Note that d3.csv() is an async method.
// Refer to the loaded dataset from within the callback function.
d3.csv(csvFileLocation, function(error, data) {
    if (error) {
      // If you're here, then the error was not null.
      // Print the error to console.
      console.log(error);
    } else {
      // No error!
      // Print the dataset to console.
      // data is basically an array of Objects
      console.log("Successfully loaded " + csvFileLocation);
      console.log(data);
      console.log(typeof data);

      // data is a local variable.
      // Copy data into csvDataset (global variable) so it's available to use later.
      csvDataset = data;

      // Print this data to HTML file.
      printCSVDataset();
      makeBarChart();
      interactiveBarChart();
    }
});

// -----------------------------------------
// Example 4
// -----------------------------------------
console.log("Example 4:");

var makeBarChart = function() {
  // Create an SVG object.
  // This will act like our canvas.
  svg = d3.select("body").select("div#example4").append("svg")

  // Set the width and height (in pixels) of the SVG object.
  svg.attr("width", 200)
     .attr("height", 200);

  // Create a barchart for "table" column in the CSV file.
  svg.selectAll("rect")
     .data(csvDataset)
     .enter()
     .append("rect")
     .attr("x", function(d, i) {
       return i * (200/csvDataset.length);
     })
     .attr("width", 200/csvDataset.length - 1)
     .attr("height", function(d) {
      // d is basically csvDataset[i]
      return d.table * 2;
     })
     .attr("y", function(d) {
      // d is basically csvDataset[i]
      return 200 - d.table * 2;
     })
     .attr("fill", function(d) {
      // d is basically csvDataset[i]
      return "rgb(100, " + d.table * 3 + ", 100)";
     });
}

// -----------------------------------------
// Example 5
// -----------------------------------------
var interactiveBarChart = function() {
  console.log("Example 5:");

  // Create an SVG object.
  // This will act like our canvas.
  svg = d3.select("body").select("div#example5").append("svg")

  // Set the width and height (in pixels) of the SVG object.
  var w = 200;
  var h = 200;
  svg.attr("width", w)
     .attr("height", h);

  // This time we will use scales.
  // Setup a scale for the x-axis. We are plotting categorical data on the x-axis.
  var xScale = d3.scale.ordinal()
                 .domain(d3.range(csvDataset.length))
                 .rangeRoundBands([0, w], 0.05)

  // Setup a scale for y-axis.
  // First we obtain the min and max y values we would like to plot.
  var minValue = 0; // We want everything above 0.
  var maxValue = d3.max(csvDataset, function(d) {
    // d is simply csvDataset[i]
    console.log(d.table);
    return d.table;
  });
  console.log(maxValue);
  // maxValue = 100;
  var yScale = d3.scale.linear()
                 .domain([minValue, maxValue])
                 .range([0, h])

  // Finally, we setup a scale for the color
  var colorScale = d3.scale.linear()
                     .domain([minValue, maxValue])
                     .rangeRound([0, 255]) // Based on a 256-bit color map

  // Setup the SVG barchart
  svg.selectAll("rect")
     .data(csvDataset)
     .enter()
     .append("rect")
     .attr("x", function(d, i) {
      // d is simply csvDataset[i]
      return xScale(i);
     })
     .attr("width", xScale.rangeBand())
     .attr("y", function(d) {
      // d is simply csvDataset[i]
      return h - yScale(d.table);
     })
     .attr("height", function(d) {
      // d is simply csvDataset[i]
      return yScale(d.table);
     })
     .attr("fill", function(d) {
      // d is simply csvDataset[i]
      return "rgb("  + colorScale(d.table) + ", 200, 100)";
     })
     .on("mouseover", function(d) {
      // d is simply csvDataset[i]
      d3.select(this)
        .attr("fill", "rgb("  + colorScale(d.table) + ", 100, 100)");
     })
     .on("mouseout", function(d) {
      // d is simply csvDataset[i]
      d3.select(this)
        .attr("fill", "rgb("  + colorScale(d.table) + ", 200, 100)");
     });

};


