alert ("Welcome to my website!");

alert("Hello! I am learning JavaScript.");

    alert("Welcome to JS landing page!");

     alert("Welcome to JS Land...");
     alert("Happy Coding!");

  console.log("Hello... I can run JS. 5");
  var username;
  

  var myName = "Hammad Muzaffar";
 document.write(myName);

 var message;
message = "Hello World";
alert(message);

var studentName = "Hammad Muzaffar";
var studentAge = "20 years old";
var studentCourse = "Certified Web & App Development <3 ";

alert(studentName);
alert(studentAge);
alert(studentCourse);


var book = "A smarter way to learn JavaScript";
alert("I am trying to learn from the Book " + book);


var age = 20;
alert("I am " + age + " years old");

var visitorName = "pak talha";
  var productTitle = "T-shirt(s)";
  var quantity = 5;

  document.write(visitorName + " ordered " + quantity + " " + productTitle + " on apna clothing store");

  var name, age, country;

  // 2. Legal variable names 
  var $price, _value, firstName, totalAmount, myVariable;



  // 3. Display rules
  document.write("<h2>Rules for naming JS variables</h2>");
  document.write("<p>Variable names can only contain <b>letters</b>, <b>numbers</b>, <b>$</b>, and <b>_</b>.<br>For example: <code>$my_1stVariable</code></p>");
  document.write("<p>Variables must begin with a <b>letter</b>, <b>$</b>, or <b>_</b>.<br>For example: <code>$name</code>, <code>_name</code>, or <code>name</code></p>");
  document.write("<p>Variable names are case <b>sensitive</b>.</p>");
  document.write("<p>Variable names should not be JS <b>reserved keywords</b>.</p>");

  //  Add two numbers
var a = 10;
var b = 5;
var sum = a + b;
document.write("Sum of " + a + " and " + b + " is " + sum + "<br><br>");

// 2. Subtraction, Multiplication, Division, Modulus
document.write("Subtraction: " + (a - b) + "<br>");
document.write("Multiplication: " + (a * b) + "<br>");
document.write("Division: " + (a / b) + "<br>");
document.write("Modulus: " + (a % b) + "<br><br>");

// Math Expressions
var num;
document.write("Value after variable declaration is: " + num + "<br>");
num = 5;
document.write("Initial value: " + num + "<br>");
num++;
document.write("Value after increment is: " + num + "<br>");
num = num + 7;
document.write("Value after addition is: " + num + "<br>");
num--;
document.write("Value after decrement is: " + num + "<br>");
var remainder = num % 3;
document.write("The remainder is: " + remainder + "<br><br>");

// Movie Ticket Cost
var ticketPrice = 600;
var totalCost = ticketPrice * 5;
document.write("Total cost to buy 5 tickets is " + totalCost + " PKR<br><br>");

// Multiplication Table of 4
document.write("Table of 4<br>");
document.write("4 x 1 = " + (4*1) + "<br>");
document.write("4 x 2 = " + (4*2) + "<br>");
document.write("4 x 3 = " + (4*3) + "<br>");
document.write("4 x 4 = " + (4*4) + "<br>");
document.write("4 x 5 = " + (4*5) + "<br>");
document.write("4 x 6 = " + (4*6) + "<br>");
document.write("4 x 7 = " + (4*7) + "<br>");
document.write("4 x 8 = " + (4*8) + "<br>");
document.write("4 x 9 = " + (4*9) + "<br>");
document.write("4 x 10 = " + (4*10) + "<br><br>");

//  Temperature Converter
var celsius = 25;
var fahrenheit = (celsius * 9/5) + 32;
document.write(celsius + "°C is " + fahrenheit + "°F<br>");
var fahren = 70;
var cels = (fahren - 32) * 5/9;
document.write(fahren + "°F is " + cels + "°C<br><br>");

//  Shopping Cart
var price1 = 650;
var price2 = 100;
var qty1 = 3;
var qty2 = 7;
var shipping = 100;
var total = (price1 * qty1) + (price2 * qty2) + shipping;
document.write("Total cost of your order is " + total + " PKR<br><br>");

//  Percentage
var totalMarks = 980;
var marksObtained = 804;
var percentage = (marksObtained / totalMarks) * 100;
document.write("Percentage: " + percentage + "%<br><br>");

// Currency Converter
var usd = 10;
var riyal = 25;
var pkr = (usd * 104.80) + (riyal * 28);
document.write("Total currency in PKR: " + pkr + "<br><br>");

//  Arithmetic Sequence
var num10 = 5;
var result = ((num10 + 5) * 10) / 2;
document.write("Result: " + result + "<br><br>");

//  Age Calculator
var currentYear = 2024;
var birthYear = 2005;
var age1 = currentYear - birthYear;
var age2 = age1 - 1;
document.write("They are either " + age1 + " or " + age2 + " years old<br><br>");

//  Geometrizer
var radius = 20;
var pi = 3.142;
var circumference = 2 * pi * radius;
var area = pi * radius * radius;
document.write("The circumference is " + circumference + "<br>");
document.write("The area is " + area + "<br><br>");

//  Lifetime Supply Calculator
var snack = "Chips";
var age = 15;
var maxAge = 65;
var perDay = 3;
var totalSnacks = (maxAge - age) * 365 * perDay;
document.write("You will need " + totalSnacks + " " + snack + " to last you until the ripe old age of " + maxAge);



//Arithmetic Result
var number = 10;
document.write("Result of arithmetic on number 10:<br>");
document.write("Original number: " + number + "<br>");
number += 5;
document.write("After adding 5: " + number + "<br>");
number *= 2;
document.write("After multiplying by 2: " + number + "<br>");
number -= 4;
document.write("After subtracting 4: " + number + "<br><br>");

// Complex Expression
var a = 2, b = 1;
var result = --a - --b + ++b + b--;


document.write("a is " + a + "<br>");
document.write("b is " + b + "<br>");
document.write("result is " + result + "<br><br>");

//  Greet user by name
var userName = prompt("Enter your name:");
document.write("Hello, " + userName + "! Welcome.<br><br>");

//  Multiplication Table
var tableNum = prompt("Enter a number for multiplication table", 5);
document.write("Multiplication Table of " + tableNum + "<br>");
document.write(tableNum + " x 1 = " + (tableNum * 1) + "<br>");
document.write(tableNum + " x 2 = " + (tableNum * 2) + "<br>");
document.write(tableNum + " x 3 = " + (tableNum * 3) + "<br>");
document.write(tableNum + " x 4 = " + (tableNum * 4) + "<br>");
document.write(tableNum + " x 5 = " + (tableNum * 5) + "<br>");
document.write(tableNum + " x 6 = " + (tableNum * 6) + "<br>");
document.write(tableNum + " x 7 = " + (tableNum * 7) + "<br>");
document.write(tableNum + " x 8 = " + (tableNum * 8) + "<br>");
document.write(tableNum + " x 9 = " + (tableNum * 9) + "<br>");
document.write(tableNum + " x 10 = " + (tableNum * 10) + "<br><br>");

// Subject Marks and Percentage
var subject1 = prompt("Enter name of first subject:");
var subject2 = prompt("Enter name of second subject:");
var subject3 = prompt("Enter name of third subject:");
var totalMarksEach = 100;
var obtained1 = +prompt("Enter obtained marks for " + subject1);
var obtained2 = +prompt("Enter obtained marks for " + subject2);
var obtained3 = +prompt("Enter obtained marks for " + subject3);
var totalObtained = obtained1 + obtained2 + obtained3;
var totalMarks = totalMarksEach * 3;
var percentage = (totalObtained / totalMarks) * 100;

document.write("<table border='1' cellspacing='0'>");
document.write("<tr><th>Subject</th><th>Total Marks</th><th>Obtained Marks</th></tr>");
document.write("<tr><td>" + subject1 + "</td><td>100</td><td>" + obtained1 + "</td></tr>");
document.write("<tr><td>" + subject2 + "</td><td>100</td><td>" + obtained2 + "</td></tr>");
document.write("<tr><td>" + subject3 + "</td><td>100</td><td>" + obtained3 + "</td></tr>");
document.write("<tr><th colspan='2'>Total</th><th>" + totalObtained + "</th></tr>");
document.write("</table>");
document.write("<br>Percentage: " + percentage.toFixed(2) + "%");



