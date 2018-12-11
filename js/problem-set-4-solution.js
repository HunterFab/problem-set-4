/*
 * SOLUTION: Hello.
 */

function hello() {
  let result = "Hello, AP Computer Science Principles!";
  /*Sets the text to be displayed*/
  document.getElementById("output1").innerHTML = result;
/*Puts the text set by the first line into output 1*/
  check("hello");
}

/*
 * SOLUTION: Hello, Again.
 */

function helloAgain() {
  let name = prompt("What is your name?");
/*Prompts the user for a name and stores it in the variable*/
  let result = "Hello, " + name + "!";
  /*Sets the text to be displayed by putting two strings and the user input together into one phrase.*/
  document.getElementById("output2").innerHTML = result;
  /*Puts the text set by the second line into output 2*/

  check("helloAgain", name);
}

/*
 * SOLUTION: Celsius.
 */

function celsius() {
  let cels = Number(((Math.random() * 1001) - 100).toFixed(2));
/*Sets a variable to a random integer between 0 and roughly 900 to 2 decimal places*/
  let fahr = cels * 9 / 5 + 32;
  /*converts the cels value to its fahrenheit counterpart*/
  let result = cels + " degrees Celsius equals " + fahr.toFixed(2) + " degrees Fahrenheit.";
  /*sets the text to be displayed by putting together strings with the two previously set variables*/
  document.getElementById("output3").innerHTML = result;
    /*Puts the text set by the variable result into output 3*/

  check("celsius", cels);
}

/*
 * SOLUTION: Fahrenheit.
 */

function fahrenheit() {
  let fahr = Number(((Math.random() * 1001) - 100).toFixed(2));
/*Sets a variable to a random integer between 0 and roughly 900 to 2 decimal places*/
  let cels = (fahr - 32) * 5 / 9;
    /*converts the fahr value to its celsius counterpart*/
  let result = fahr + " degrees Fahrenheit equals " +  cels.toFixed(2) + " degrees Celsius.";
    /*sets the text to be displayed by putting together strings with the two previously set variables*/
  document.getElementById("output4").innerHTML = result;
    /*Puts the text set by the variable result into output 4*/
  check("fahrenheit", fahr);
}

/*
 * SOLUTION: Inches.
 */

function inches() {
  const MILE = 63360;
  const YARD = 36;
  const FOOT = 12;
  /*Sets constants used to convert the inches value to different units of measurement*/

  let input = -1;
  while (input < 0) {
    input = Number(prompt("Enter a non-negative integer."));
    /*Sets a prompt that reprompts the user until a non-negative number is entered*/

    if (input === null) {
      break;
    } else if (Number.isNaN(input)) {
      input = -1;
    } else if (!Number.isInteger(input)) {
      input = -1;
    }
  }
  /*A statement that will loop back to the prompt if the user enters a non number, also breaks the code if no number is entered*/

  if (input !== null) {
    let inches = input;
    let miles = Math.floor(inches / MILE);
    inches = inches % MILE;
    let yards = Math.floor(inches / YARD);
    inches = inches % YARD;
    let feet = Math.floor(inches / FOOT);
    inches = inches % FOOT;
    /*A statement that converts the inches to miles, yards, and feet by taking the modulo of the inches value that is reset to accomodate after each conversion*/

    let result = "Miles: " + miles + "<br/>" +
                 "Yards: " + yards + "<br/>" +
                 "Feet: " + feet + "<br/>" +
                 "Inches: " + inches;
 /*sets the text to be displayed by putting together strings with the previously set variables*/
    document.getElementById("output5").innerHTML = result;
  } else {
    document.getElementById("output5").innerHTML = "";
  }
    /*Puts the text set by the variable result into output 5*/

  check("inches", input);
}

/*
 * SOLUTION: Centimeters.
 */

function centimeters() {
  const KILOMETER = 100000;
  const METER = 100;
  /*Sets constants used to convert the centimeters value to different units of measurement*/

  let input = -1;
  while (input < 0) {
    input = Number(prompt("Enter a non-negative integer."));
    /*Sets a prompt that reprompts the user until a non-negative number is entered*/

    if (input === null) {
      break;
    } else if (Number.isNaN(input)) {
      input = -1;
    } else if (!Number.isInteger(input)) {
      input = -1;
    }
  }
  /*A statement that will loop back to the prompt if the user enters a non number, also breaks the code if no number is entered*/

  if (input !== null) {
    let centimeters = input;
    let kilometers = Math.floor(centimeters / KILOMETER);
    centimeters = centimeters % KILOMETER;
    let meters = Math.floor(centimeters / METER);
    centimeters = centimeters % METER;
    /*A statement that converts the inches to meters and kilometers by taking the modulo of the centimeters value that is reset to accomodate after each conversion*/

    let result = "Kilometers: " + kilometers + "<br/>" +
                 "Meters: " + meters + "<br/>" +
                 "Centimeters: " + centimeters;
   /*sets the text to be displayed by putting together strings with the previously set variables*/
    document.getElementById("output6").innerHTML = result;
  } else {
    document.getElementById("output6").innerHTML = "";
  }
  /*Puts the text set by the variable result into output 6*/
  check("centimeters", input);
}

/*
 * SOLUTION: Fluid Ounces.
 */

function fluidOunces() {
  const GALLON = 128;
  const QUART = 32;
  const PINT = 16;
  const CUP = 8;
    /*Sets constants used to convert the fluid ounces value to different units of measurement*/

  let input = -1;
  while (input < 0) {
    input = Number(prompt("Enter a non-negative integer."));

/*sets a prompt that does not accept negative numbers or 0*/
    if (input === null) {
      break;
    } else if (Number.isNaN(input)) {
      input = -1;
    } else if (!Number.isInteger(input)) {
      input = -1;
    }
  }
  /*brings the user back to the prompt if they do not enter a numerical value and breaks the code if no value is entered*/

  if (input !== null) {
    let fluidOunces = input;
    let gallons = Math.floor(fluidOunces / GALLON);
    fluidOunces = fluidOunces % GALLON;
    let quarts = Math.floor(fluidOunces / QUART);
    fluidOunces = fluidOunces % QUART;
    let pints = Math.floor(fluidOunces / PINT);
    fluidOunces = fluidOunces % PINT;
    let cups = Math.floor(fluidOunces / CUP);
    fluidOunces = fluidOunces % CUP;
/*does the necessary conversions and uses modulo to reset the fluid ounces value to apply to the next largest unit of measurement*/
    let result = "Gallons: " + gallons + "<br/>" +
                 "Quarts: " + quarts + "<br/>" +
                 "Pints: " + pints + "<br/>" +
                 "Cups: " + cups + "<br/>" +
                 "Fluid Ounces: " + fluidOunces;
  /*sets the value to be displayed by adding strings to the variables*/
    document.getElementById("output7").innerHTML = result;
  } else {
    document.getElementById("output7").innerHTML = "";
  }
  /*Puts the text set by the variable result into output 7*/
  check("fluidOunces", input);
}

/*
 * SOLUTION: Ounces.
 */

function ounces() {
  const TON = 32000;
  const POUND = 16;
  /*sets constants used for calculation later*/

  let input = -1;
  while (input < 0) {
    input = Number(prompt("Enter a non-negative integer."));
/*prompts the user while only accepting non negative numbers*/

    if (input === null) {
      break;
    } else if (Number.isNaN(input)) {
      input = -1;
    } else if (!Number.isInteger(input)) {
      input = -1;
    }
  }
/*brings the user back to the prompt if they enter a non-numerical value and breaks the code if nothing is entered*/
  if (input !== null) {
    let ounces = input;
    let tons = Math.floor(ounces / TON);
    ounces = ounces % TON;
    let pounds = Math.floor(ounces / POUND);
    ounces = ounces % POUND;
/*does the necessary conversions and uses modulo to reset the ounces value to apply to the next largest unit of measurement*/

    let result = "Tons: " + tons + "<br/>" +
                 "Pounds: " + pounds + "<br/>" +
                 "Ounces: " + ounces;
/*prepares the output by adding strings to the variables*/
    document.getElementById("output8").innerHTML = result;
  } else {
    document.getElementById("output8").innerHTML = "";
  }
/*Puts the text set by the variable result into output 8*/
  check("ounces", input);
}

/*
 * SOLUTION: Money.
 */

function money() {
  const DOLLAR = 100;
  const QUARTER = 25;
  const DIME = 10;
  const NICKEL = 5;
  /*sets constants used later for calculation*/

  let input = -1;
  while (input < 0) {
    input = Number(prompt("Enter a non-negative integer."));
/*prompts the user and reprompts them until a non-negative number is entered*/

    if (input === null) {
      break;
    } else if (Number.isNaN(input)) {
      input = -1;
    } else if (!Number.isInteger(input)) {
      input = -1;
    }
  }
/*brings the user back to the prompt if they do not enter a numerical value and breaks the code if nothing is entered at all */

  if (input !== null) {
    let pennies = input;
    let dollars = Math.floor(pennies / DOLLAR);
    pennies = pennies % DOLLAR;
    let quarters = Math.floor(pennies / QUARTER);
    pennies = pennies % QUARTER;
    let dimes = Math.floor(pennies / DIME);
    pennies = pennies % DIME;
    let nickels = Math.floor(pennies / NICKEL);
    pennies = pennies % NICKEL;

/*does the necessary conversions and uses modulo to reset the pennies value to apply to the next largest unit of measurement*/
    let result = "Dollars: " + dollars + "<br/>" +
                 "Quarters: " + quarters + "<br/>" +
                 "Dimes: " + dimes + "<br/>" +
                 "Nickels: " + nickels + "<br/>" +
                 "Pennies: " + pennies;
  /*prepares the dispayed output by adding strings to the variables*/
    document.getElementById("output9").innerHTML = result;
  } else {
    document.getElementById("output9").innerHTML = "";
  }
/*puts the result into output 9*/
  check("money", input);
}

/*
 * SOLUTION: Change.
 */

function change() {
  const QUARTER = 25;
  const DIME = 10;
  const NICKEL = 5;

  /*sets constants needed for later calculation*/

  let input = -1;
  while (input < 0 || input >= 1) {
    input = Number(prompt("Enter a non-negative number less than 1.00."));

/*prompts the user and reprompts until a non-negative integer is entered*/

    if (input === null) {
      break;
    } else if (Number.isNaN(input)) {
      input = -1;
    }
  }

  /*brings the user back to the prompt if they enter a non-numerical value and breaks the code if nothing is entered at all*/

  if (input !== null) {
    let pennies = input;
    pennies = Number((pennies * 100.00).toFixed(0));
    let quarters = Math.floor(pennies / QUARTER);
    pennies = pennies % QUARTER;
    let dimes = Math.floor(pennies / DIME);
    pennies = pennies % DIME;
    let nickels = Math.floor(pennies / NICKEL);
    pennies = pennies % NICKEL;

  /*does the necessary conversions and uses modulo to reset the pennies value to apply to the next largest unit of measurement*/

    let coins = quarters + dimes + nickels + pennies;

/*sets the value to be displayed as the total number of coins*/

    document.getElementById("output10").innerHTML = coins + (coins === 1 ? " coin." : " coins.");
  } else {
    document.getElementById("output10").innerHTML = "";
  }
  /*displays the coins value and adds it to strings. if there is only 1 coin, the added string changes from "coins." to "coin." for correct grammar use*/

  check("change", input);
}
