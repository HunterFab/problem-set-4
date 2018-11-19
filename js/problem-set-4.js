/*
 * Hello. 2 points.
 */

function hello() {

  var div = document.getElementById("output1");
  div.innerHTML = "Hello, AP Computer Science Principles!";

  ////////////////// DO NOT MODIFY
  check("hello"); // DO NOT MODIFY
  ////////////////// DO NOT MODIFY
}

/*
 * Hello, Again. 3 points.
 */

function helloAgain() {

  //////////// DO NOT MODIFY
  let name; // DO NOT MODIFY
  //////////// DO NOT MODIFY

  // Use the name variable declared above to store the user's response. You
  // do not need to re-declare it, only assign it a value.

    name = prompt("Enter your name");
    var div = document.getElementById("output2");
    div.innerHTML = "Hello, " + name + "!";

  ///////////////////////////// DO NOT MODIFY
  check("helloAgain", name); // DO NOT MODIFY
  ///////////////////////////// DO NOT MODIFY
}

/*
 * Celsius. 5 points.
 */

function celsius() {

  //////////////////////////////////////////////////////// DO NOT MODIFY
  let cels = ((Math.random() * 1001) - 100).toFixed(2); // DO NOT MODIFY
  //////////////////////////////////////////////////////// DO NOT MODIFY

  // The above code generates a random number between -100 and 1000
  // (inclusive), and rounds this value to 2 decimal places.

    far = ((cels * 9/5) + 32).toFixed(2);
    var div = document.getElementById("output3");
    div.innerHTML = cels + " degrees Celsius equals " + far + " degrees Fahrenheit.";

  ////////////////////////// DO NOT MODIFY
  check("celsius", cels); // DO NOT MODIFY
  ////////////////////////// DO NOT MODIFY
}

/*
 * Fahrenheit. 5 points.
 */

function fahrenheit() {

  //////////////////////////////////////////////////////// DO NOT MODIFY
  let fahr = ((Math.random() * 1001) - 100).toFixed(2); // DO NOT MODIFY
  //////////////////////////////////////////////////////// DO NOT MODIFY

  // The above code generates a random number between -100 and 1000
  // (inclusive), and rounds this value to 2 decimal places.

    cel = ((fahr - 32) * 5/9).toFixed(2);
    var div = document.getElementById("output4");
    div.innerHTML = fahr + " degrees Fahrenheit equals " + cel + " degrees Celsius.";

  ///////////////////////////// DO NOT MODIFY
  check("fahrenheit", fahr); // DO NOT MODIFY
  ///////////////////////////// DO NOT MODIFY
}

/*
 * Inches. 5 points.
 */

function inches() {

    /////////////////////////////////////////////////////// DO NOT MODIFY
    let input = prompt("Enter a non-negative integer."); // DO NOT MODIFY
    /////////////////////////////////////////////////////// DO NOT MODIFY

    // You are free to modify the value of inches, which you'll likely
    // need to do. Please do not modify the value of input.
    ////////////////////// DO NOT MODIFY
    let inches = Math.floor(((input % 63360) % 36) % 12); // DO NOT MODIFY
    ////////////////////// DO NOT MODIFY

  let miles = Math.floor(input / 63360);
  let yards = Math.floor((input % 63360) / 36);
  let feet = Math.floor(((input % 63360) % 36) / 12);

  var div = document.getElementById("output5");
  div.innerHTML = `Miles: ${miles}<br/>Yards: ${yards}<br/>Feet: ${feet}<br/>Inches: ${inches}`;

  ////////////////////////// DO NOT MODIFY
  check("inches", input); // DO NOT MODIFY
  ////////////////////////// DO NOT MODIFY
}

/*
 * Centimeters. 5 points.
 */

function centimeters() {

  /////////////////////////////////////////////////////// DO NOT MODIFY
  let input = prompt("Enter a non-negative integer."); // DO NOT MODIFY
  /////////////////////////////////////////////////////// DO NOT MODIFY

  // You are free to modify the value of centimeters, which you'll
  // likely need to do. Please do not modify the value of input.

  /////////////////////////// DO NOT MODIFY
  let centimeters = Math.floor((input % 100000) % 1000); // DO NOT MODIFY
  ////////////////////// DO NOT MODIFY

let kilometers = Math.floor(input / 100000);
let meters = Math.floor((input % 100000) / 1000);
var div = document.getElementById("output6");
div.innerHTML = `Kilometers: ${kilometers}<br/>Meters: ${meters}<br/>Centimeters: ${centimeters}`;

  /////////////////////////////// DO NOT MODIFY
  check("centimeters", input); // DO NOT MODIFY
  /////////////////////////////// DO NOT MODIFY
}

/*
 * Fluid Ounces. 5 points.
 */

function fluidOunces() {

  /////////////////////////////////////////////////////// DO NOT MODIFY
  let input = prompt("Enter a non-negative integer."); // DO NOT MODIFY
  /////////////////////////////////////////////////////// DO NOT MODIFY

  // You are free to modify the value of fluidOunces, which you'll
  // likely need to do. Please do not modify the value of input.

  /////////////////////////// DO NOT MODIFY
  let fluidOunces = Math.floor((((input % 128) % 32) % 16) % 8); // DO NOT MODIFY
  ////////////////////// DO NOT MODIFY

let gallons = Math.floor(input / 128);
let quarts = Math.floor((input % 128) / 32);
let pints = Math.floor(((input % 128) % 32) / 16);
let cups = Math.floor((((input % 128) % 32) % 16) / 8);
var div = document.getElementById("output7");
div.innerHTML = `Gallons: ${gallons}<br/>Quarts: ${quarts}<br/>Pints: ${pints}<br/>Cups: ${cups}<br/>Fluid Ounces: ${fluidOunces}`;

  /////////////////////////////// DO NOT MODIFY
  check("fluidOunces", input); // DO NOT MODIFY
  /////////////////////////////// DO NOT MODIFY
}

/*
 * Ounces. 5 points.
 */

function ounces() {

  /////////////////////////////////////////////////////// DO NOT MODIFY
  let input = prompt("Enter a non-negative integer."); // DO NOT MODIFY
  /////////////////////////////////////////////////////// DO NOT MODIFY

  // You are free to modify the value of ounces, which you'll likely
  // need to do. Please do not modify the value of input.

  ////////////////////// DO NOT MODIFY
  let ounces = Math.floor((input % 32000) % 16); // DO NOT MODIFY
  ////////////////////// DO NOT MODIFY

let tons = Math.floor(input / 32000);
let pounds = Math.floor((input % 32000) / 16);
var div = document.getElementById("output8");
div.innerHTML = `Tons: ${tons}<br/>Pounds: ${pounds}<br/>Ounces: ${ounces}`;
  ////////////////////////// DO NOT MODIFY
  check("ounces", input); // DO NOT MODIFY
  ////////////////////////// DO NOT MODIFY
}

/*
 * Money. 7 points.
 */

function money() {

  /////////////////////////////////////////////////////// DO NOT MODIFY
  let input = prompt("Enter a non-negative integer."); // DO NOT MODIFY
  /////////////////////////////////////////////////////// DO NOT MODIFY

  // You are free to modify the value of pennies, which you'll likely
  // need to do. Please do not modify the value of input.

  /////////////////////// DO NOT MODIFY
  let pennies = Math.floor((((input % 100) % 25) % 10) % 5); // DO NOT MODIFY
  ////////////////////// DO NOT MODIFY

let dollars = Math.floor(input % 100);
let quarters = Math.floor((input % 100) / 25);
let dimes = Math.floor(((input % 100) % 25) / 10);
let nickels = Math.floor((((input % 100) % 25) % 10) / 5);
var div = document.getElementById("output9");
div.innerHTML = `Dollars: ${dollars}<br/>Quarters: ${quarters}<br/>Dimes: ${dimes}<br/>Nickels: ${nickels}<br/>Pennies: ${pennies}`;


  ///////////////////////// DO NOT MODIFY
  check("money", input); // DO NOT MODIFY
  ///////////////////////// DO NOT MODIFY
}

/*
 * Change. 8 points.
 */

function change() {

  ///////////////////////////////////////////////////////////////////// DO NOT MODIFY
  let input = prompt("Enter a non-negative number less than 1.00."); // DO NOT MODIFY
  ///////////////////////////////////////////////////////////////////// DO NOT MODIFY

  // You are free to modify the value of amount, which you'll likely
  // need to do. Please do not modify the value of input.

  ////////////////////// DO NOT MODIFY
  let amount = input; // DO NOT MODIFY
  ////////////////////// DO NOT MODIFY

  let quarters = Math.floor(amount * 100 / 25);
  let dimes = Math.floor(amount * 100 % 25 / 10);
  let nickels = Math.floor(amount * 100 % 25 % 10 / 5);
  let pennies = Math.floor(amount * 100 % 25 % 10 % 5);
  let coin = (quarters + dimes + nickels + pennies);
  var div = document.getElementById("output10");
  if (coin > 1) {
    div.innerHTML = (coin + " coins.");
  }
  else {
    div.innerHTML = (coin + " coin.")
  }
  ////////////////////////// DO NOT MODIFY
  check("change", input); // DO NOT MODIFY
  ////////////////////////// DO NOT MODIFY
  }
