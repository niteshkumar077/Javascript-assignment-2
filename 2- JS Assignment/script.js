// VARIABLE NAMES: LEGAL & ILLEGAL

// 1. Declare 3 variables in one statement.
let a=1 , b=2 , c=3;
alert(b);
//    OR
let a1 = b1 = c1 = 10;
alert(c1);

// 2. Declare 5 legal & 5 illegal variable names.

// -Legal Variable Names in JavaScript:

let saylaniMassItTraining; 
// recommended camel case
let _underscore;
let $dollar;
let myNumber123;
let Capital;

// -Illegal Variable Names in JavaScript:

// let 123number;
// (Cannot start with a number)
// let my-var;
// (Hyphens are not allowed)
// let var;
// (Cannot use reserved keywords)
// let user space;
// (Cannot have spaces)
// let @amount;
// (Special characters like @ are not allowed)

// 3. Display this in your browser
// a) A heading stating “Rules for naming JS variables”
// b) Variable names can only contain ______, ______,
// ______ and ______.
// For example $my_1stVariable
// c) Variables must begin with a ______, ______ or
// _____. For example $name, _name or name
// d) Variable names are case _________
// e) Variable names should not be JS _________


document.write("<h1>Rules for naming JS variables</h1>");
document.write("Variable names can only contain , numbers , $ and _ .For example : $my_1stVariable. <br> ")
document.write("Variables must begin with a letter , dollar or _ . For example $name, _name or name. <br> ")
document.write("Variable names are case sensitive. <br> ")
document.write("Variable names should not be JS Keywords. <br>")




// MATH EXPRESSIONS
// 1. Write a program that take two numbers & add them in a new variable. Show the result in your browser.
let calculate = 1+2
document.write(`<h2> Sum of 1 and 2 is ${calculate} <h2>`)

// 2. Repeat task1 for subtraction, multiplication, division & modulus.
let subtraction = 9-4
document.write(` SUB 9-4 = ${subtraction} <br>`)

let multiplication = 4*9
document.write(` MULTIPLY 4*9 = ${multiplication} <br>`)

let division = 15/3
document.write(` DIVIDE 15/3 = ${division} <br>`)

let modulus = 15 % 6
document.write(` MODULUS 15 % 6 = ${modulus} <br> `)


// 3. Do the following using JS Mathematic Expressions :
// a. Declare a variable.
// b. Show the value of variable in your browser like “Value after variable declaration is: ??”.
// c. Initialize the variable with some number.
// d. Show the value of variable in your browser like “Initial value: 5”.
// e. Increment the variable.
// f. Show the value of variable in your browser like “Value after increment is: 6”.
// g. Add 7 to the variable.
// h. Show the value of variable in your browser like “Value after addition is: 13”.
// i. Decrement the variable.
// j. Show the value of variable in your browser like “Value after decrement is: 12”.
// k. Show the remainder after dividing the variable’s value by 3.
// l. Output : “The remainder is : 0”.



let f,g,h = 10  
document.write( `Value after variable declaration is ${f} <br>` )  

let numbers5= 5
document.write( `Initial value: ${numbers5} <br>`)

let x = 5
let y = ++x
document.write(`Value after increment is: ${y} <br>`)

let z = y+7
document.write(`Value after addition is: ${z} <br>`)

let decrement_Z = z-1
document.write( `Value after decrement is: ${decrement_Z} <br>` )  

let remainder = decrement_Z % 3
document.write(`The remainder is: ${remainder} <br>`) 

// 4. Cost of one movie ticket is 600 PKR. Write a script to store ticket price in a variable & calculate the cost of buying 5 tickets to a movie. Example output:

let ticket = 600
let ticket_5 = ticket*5
document.write(`Total cost to buy 5 tickets to a movie is ${ticket_5} <br>`)

// 5. Write a script to display multiplication table of any number in your browser. E.g

document.write("<h2> Table of 4 <h2>")
let table_1 = 4*1
document.write(`4x1= ${table_1} <br>`)
let table_2 = 4*2
document.write(`4x2= ${table_2} <br>`)
let table_3 = 4*3
document.write(`4x3= ${table_3} <br>`)
let table_4 = 4*4
document.write(`4x4= ${table_4} <br>`)
let table_5 = 4*5
document.write(`4x5= ${table_5} <br>`)
let table_6 = 4*6
document.write(`4x6= ${table_6} <br>`)
let table_7 = 4*7
document.write(`4x7= ${table_7} <br>`)
let table_8 = 4*8
document.write(`4x8= ${table_8} <br>`)
let table_9 = 4*9
document.write(`4x9= ${table_9} <br>`)
let table_10 = 4*10
document.write(`4x10= ${table_10} <br>`)


// 6. The Temperature Converter: It’s hot out! Let’s make a converter based on the steps here.
// a. Store a Celsius temperature into a variable.
// b. Convert it to Fahrenheit & output “NNoC is NNoF”.
// c. Now store a Fahrenheit temperature into a variable.
// d. Convert it to Celsius & output “NNoF is NNoC”.

// Conversion Formulae:

let cTemperature = 25
let cConversion = (cTemperature*9/5)+32
document.write(`25°C is ${cConversion}°F <br>`)  

let fTemperature = 70
let fConversion = (fTemperature-32)*5/9
document.write(`70°F is ${fConversion}°C <br>`)


// 7. Write a program to implement checkout process of a shopping cart system for an e-commerce website. Store the following in variables
// a. Price of item 1
// b. Price of item 2
// c. Ordered quantity of item 1
// d. Ordered Quantity of item 2
// e. Shipping charges

// Compute the total cost & show the receipt in your browser.

document.write("<h1>Shopping Cart</h1>");


let priceofitem1 = 650
document.write(`Price of item 1 is ${priceofitem1} <br>`)
let quantityofitem1 = 3
document.write(`Ordered quantity of item 1 is ${quantityofitem1}<br>`)
let priceofitem2 = 100
document.write(`Price of item 2 is ${priceofitem2}<br>`)
let quantityofitem2 = 7
document.write(`Ordered quantity of item 2 is ${quantityofitem2}<br>`)
let shippingCharges = 100
document.write(`shipping Charges is ${shippingCharges}<br>`)

document.write(`<h3>Total Cost of your order is ${priceofitem1*quantityofitem1+priceofitem2*quantityofitem2+shippingCharges} <br>  </h3>`)


// 8. Store total marks & marks obtained by a student in 2 variables. Compute the percentage & show the result in your browser

document.write("<h1> Marks Sheet </h1>")

let tMarks = 980 
document.write(`Total Marks: ${tMarks}<br>`)
let oMarks = 804
document.write(`Obtained Marks: ${oMarks} <br>`)

document.write(`<h3> Percentage: ${oMarks/tMarks*100}% <br> </h3>`)

// 9. Assume we have 10 US dollars & 25 Saudi Riyals. Write a script to convert the total currency to Pakistani Rupees. Perform all calculations in a single expression. (Exchange rates : 1 US Dollar = 104.80 Pakistani Rupee and 1 Saudi Riyal = 28 Pakistani Rupee)

document.write("<h1> Currency in PKR </h1>")

let currencyConverter = 10*104.80+25*28
document.write(`<h3> Total Currency in PKR: ${currencyConverter} </h3>`)


// 10. Write a program to initialize a variable with some number and do arithmetic in following sequence:
// a. Add 5
// b. Multiply by 10
// c. Divide the result by 2
// Perform all calculations in a single expression

let randomcalculation = (52+5*10)/2
document.write(`<h2> ARITHMETIC CALCULATIONS = ${randomcalculation} <br> </h2>`)


// 11. The Age Calculator: Forgot how old someone is? Calculate it!
// a. Store the current year in a variable.
// b. Store their birth year in a variable.
// c. Calculate their 2 possible ages based on the stored
// values.
// Output them to the screen like so: “They are either NN or NN
// years old”.


document.write("<h1> Age Calculator </h1>")

let currentyear = 2016
document.write(`Current Year: ${currentyear} <br>`)
let birthyear = 1992
document.write(`Birth Year: ${birthyear} <br>`)
let realAge =  2016-1992

document.write(`<h3> Your Age is: ${realAge} <br> </h3>`)



// 12. The Geometrizer: Calculate properties of a circle.
// a. Store a radius into a variable.
// b. Calculate the circumference based on the radius, and
// output “The circumference is NN”.
// (Hint : Circumference of a circle = 2 π r , π = 3.142)
// Calculate the area based on the radius, and output “The
// area is NN”. (Hint : Area of a circle = π r2, π = 3.142)


document.write(`<h2>The Geometrizer</h2>`)

let radius = 20
document.write(`Radius of a circle is: ${radius} <br>`)
let circumference = 2*3.142*20
document.write(`The circumference is: ${circumference} <br>`)
let area = 3.142*(20*2)
document.write(`The area is: ${area} <br>`)


// 13. The Lifetime Supply Calculator: Ever wonder how much a “lifetime supply” of your favorite snack is? Wonder no more.
// a. Store your favorite snack into a variable
// b. Store your current age into a variable.
// c. Store a maximum age into a variable.
// d. Store an estimated amount per day (as a number).
// e. Calculate how many would you eat total for the rest of your life.
// Output the result to the screen like so: “You will need
// NNNN to last you until the ripe old age of NN”.

document.write(`<h2>The Lifetime Supply Calculator</h2>`)

let favSnack = "kurleez"
document.write(`Favourite Snack: ${favSnack} <br>`)
let currentAge = 19
document.write(`Current age: ${currentAge} <br>`)
let maximumAge = 100
document.write(`Estimated maximum age: ${maximumAge} <br>`)
let estimatedeatamount = 2
document.write(`Amount of snacks per day: ${estimatedeatamount}<br>`)

let totalneedforeat = 81*365*2

document.write(`You will need ${totalneedforeat} kurleez to last untill the ripe old age of ${maximumAge} <br>`)



// MATH EXPRESSIONS 2nd part

// 1. Write a program to take a number in a variable, do the required arithmetic to display the following result in your browser:

let aaa = 10
document.write(`<h2>The value of a is: ${aaa} </h2><br>`)
let bbb = ++aaa
document.write(`The value of ++a is: ${bbb} <br>`)
document.write(`Now the value of a is:${bbb} <br>`)
let ccc = aaa++
document.write(`The value of a++ is: ${ccc} <br>`)
let fff = aaa
document.write(`Now the value of a is: ${fff} <br>`)
let ddd = --aaa
document.write(`The value of --a is: ${ddd} <br>`)
document.write(`Now the value of a is:${ddd} <br>`)
let eee = aaa--
document.write(`The value of a-- is: ${eee} <br>`)
let ggg = aaa
document.write(`Now the value of a is: ${ggg} <br>`)

document.write(`<h3>Result: </h3> The value of a is: ${aaa} <br>`)

// 2. What will be the output in variables a, b & result after execution of the following script:
// var a = 2, b = 1;
// var result = --a - --b + ++b + b--;
// Explain the output at each stage:
// --a;
// --a - --b;
// --a - --b + ++b;
// --a - --b + ++b + b--;

var a11 = 2, b11 = 1;
document.write(`<h2>a is : ${a11} </h2>`)
document.write(`b is : ${b11} <br>`)

var result = --a11 - --b11 + ++b11 + b11--;
document.write(`Result is : ${result} <br>`)

   //   EXPLANATION :
// --a;  = 1
// --a - --b; = 1 - 0 = 1
// --a - --b + ++b;   = 1 + 1 =2
// --a - --b + ++b + b--;   = 2 + 1 = 3

// 3. Write a program that takes input a name from user & greet the user.

let person = prompt("Enter Your Name:")
alert(`Hello! how are you ? ${person}` )


// 4. Write a program to take input a number from user & display it’s multiplication table on your browser. If user does not enter a new number, multiplication table of 5 should be displayed by default.

let Multiplytable = prompt("Write any number to get multiplication table of it")
alert(`Multiplication table of ${Multiplytable} are following below:`)

document.write(`<h2> Table of ${Multiplytable}  <h2>`)
let table_11 = Multiplytable*1
document.write(`${Multiplytable}x1= ${table_11} <br>`)
let table_22 = Multiplytable*2
document.write(`${Multiplytable}x2= ${table_22} <br>`)
let table_33 = Multiplytable*3
document.write(`${Multiplytable}x3= ${table_33} <br>`)
let table_44 = Multiplytable*4
document.write(`${Multiplytable}x4= ${table_44} <br>`)
let table_55 = Multiplytable*5
document.write(`${Multiplytable}x5= ${table_55} <br>`)
let table_66 = Multiplytable*6
document.write(`${Multiplytable}x6= ${table_66} <br>`)
let table_77 = Multiplytable*7
document.write(`${Multiplytable}x7= ${table_77} <br>`)
let table_88 = Multiplytable*8
document.write(`${Multiplytable}x8= ${table_88} <br>`)
let table_99 = Multiplytable*9
document.write(`${Multiplytable}x9= ${table_99} <br>`)
let table_100 = Multiplytable*10
document.write(`${Multiplytable}x10= ${table_100} <br>`)

// 6. Take
// a) Take three subjects name from user and store them in 3 different variables.
// b) Total marks for each subject is 100, store it in another variable.
// c) Take obtained marks for first subject from user and stored it in different variable.
// d) Take obtained marks for remaining 2 subjects from user and store them in variables.
// e) Now calculate total marks and percentage and show the result in browser like this.(Hint: user table)

alert("Write name of any 3 subjects:")
let books1 = prompt("SUBJECT 1: ")
let books2 = prompt("SUBJECT 2: ")
let books3 = prompt("SUBJECT 3: ")

let subject1 = 100
let subject2 = 100
let subject3 = 100

let marks1 = Number(prompt("write obtained marks of first subject:"));
let marks2 = Number(prompt("write obtained marks of second subject:"));
let marks3 = Number(prompt("write obtained marks of third subject:"));

let subject1percentage = marks1/subject1*100 
let subject2percentage = marks2/subject2*100
let subject3percentage = marks3/subject3*100


document.write(`<h1>Subjects:</h1>`)
document.write(`<h3>${books1} => total marks = ${subject1} || obtained marks = ${marks1} || percentage = ${subject1percentage}% </h3><br> `)
document.write(`<h3>${books2} => total marks = ${subject2} || obtained marks = ${marks2} || percentage = ${subject2percentage}% </h3><br> `)
document.write(`<h3>${books3} => total marks = ${subject3} || obtained marks = ${marks3} || percentage = ${subject3percentage}% </h3><br> `)

let totalmarks = subject1+subject2+subject3;
document.write(`<h2>Total Marks = ${totalmarks} </h2>`)
let totalobtainedmarks = marks1+marks2+marks3;
document.write(`<h2>Total Obtained Marks = ${totalobtainedmarks} </h2>`)
let totalpercentage = (totalobtainedmarks/totalmarks)*100;
document.write(`<h2>Total Percentage = ${totalpercentage}% </h2>`)

