/* Task: Write a JavaScript script that compares two variables using different comparison operators 
(==, ===, !=, !==, >, <, >=, <=) and prints the results. */

var a=10;
var b="10";
var c=20;

console.log("== operator");
console.log(a == b);     
console.log(a == c);     

console.log("=== operator");
console.log(a === b);    
console.log(a === 10);   

console.log("!= operator");
console.log(a != b);     
console.log(a != c);    

console.log("!== operator");
console.log(a !== b);    
console.log(a !== 10);   

console.log("> operator");
console.log(a > c);      
console.log(c > a);      

console.log("< operator");
console.log(c < a);      
console.log(a < c);      

console.log(">= operator");
console.log(a >= 10);    
console.log(c >= a);     

console.log("<= operator");
console.log(c <= 20);     
console.log(a <= c);     


/* Write a JavaScript script that uses the ternary operator to determine
 if a number is even or odd.
 */

let d=20;
let result = (d%2===0)?"Even":"odd";
console.log(result);

/* Expand the script to include a ternary operation 
that checks if a user is an adult (18+) or a minor.
 */

let age=23;
let result1 =(age>=18)?"Eligible for vote":"Not Eligible for vote";
console.log(result1);

/* Grade Classification: Declare a variable score and 
set it to a value between 0 and 100.
 Use nested ternary operators to classify the score into grades:
  A (>= 90), B (>= 75), C (>= 60), D (>= 45), and F (below 45).
   Log the grade. */

var marks=99;
let result3=
(marks<0 || marks>100)?"Invalid marks":
(marks>=90)?"A grade":
(marks>=75)?"B grade":
(marks>=60)?"C grade":
(marks>=45)?"D grade":"fail";
console.log(result3);


/*  Temperature Check: Declare a variable temperature and 
 use nested ternary operators to categorize it as "Hot" (above 30),
  "Warm" (20-30), "Cool" (10-19), and "Cold" (below 10). 
  Log the result. */

var temp=-5;
let check=
(temp>=30)?"Hot":
(temp>=20)?"Warm":
(temp>=10)?"Cool":"Cold";
console.log(check);

/*  Age Group: Declare a variable age and 
 use the ternary operator to classify the age into "Child"
  (0-12), "Teen" (13-19), "Adult" (20-64), 
  and "Senior" (65 and above). Log the result. */

let citizen=
(agee>=60)?"Senior citizen":
(agee>=20)?"Adult":
(agee>=12)?"Teen":
(agee>=0)?"Child":"Not a valid age";
console.log(citizen);

