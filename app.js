//A. Data types
//String
let name = "Francis";

//Integer
let number = 15;

//boolean
let inCorrect = true;

//undefined 
let surname;

//null
let firstname = null;

//B. Arithmetic and logical operators
// Arithmetic
let x = 5;
let y = 10;

let sum = x + y;
let diff = x - y;
let prod = x * y;
let qou = x / y;
let mod = x % y;

console.log("the sum is " + sum );
console.log("the difference is " + diff );
console.log("the product is " + prod );
console.log("the qoutient is " + qou );
console.log("the modulo is " + mod );

// logical
let num1 = 2;
let num2 = 4;

let result1 = num1 += 10;
let result2 = num1 -= 10;
let result3 = num1 *= 10;
let result4 = num1 /= 10;
let result5 = num1 %= 10;

console.log(result1);
console.log(result2);
console.log(result3);
console.log(result4);
console.log(result5);


//C. Conditional statements

// if statement
let today = new Date().getDate();
 let greetings, greet, impression;

if(today < 15){
    greetings = "HI goodmorning";
}
 console.log(greetings);

//if else statement 
if (today > 10) {
    greet = "Hi how are you";
}
 else {
    greet = "Im fine thankyou";
}
console.log(greet);

// else if statement

if (today > 10) {
    impresstion = "hello madlang people";
} else if (today < 9){
    impression = "mabuhaaaay";
} else {
    impression = "mini miss youuu";
}
console.log(impression);

 //switch statement

 let day = 2;
 let todaysGreeting;

  switch (day){
    case 1:
        todaysGreeting = "Hiii";
        break;
    
    case 2:
        todaysGreeting = "Hellooo";
        break;
    
    case 3:
        todaysGreeting = "Good Morning";
        break; 
    
    case 4:
        todaysGreeting = "Good Afternoon";
        break;
  } 
    console.log(todaysGreeting);
    
//Loops
//for loop

for(let i=0; i < 5; i++ ){
    console.log("The numbers are: " + i);
}

//while loop 
let loop = 0;
   while(loop < 6){
    loop++;
   }
console.log("The numbers are: " + loop);

//do while loop
let s = 1;
 do {
    console.log("The numbers are: " + s);
    s++;
 }while (s < 5);


 //E. functional programming 

 //I. Determine a number if it is odd or even 

 function oddOrEven(num) {
    return num % 2 === 0 ? "Even" : "Odd";
}
console.log(oddOrEven(21));
console.log(oddOrEven(12));
 
//II. Determine a number if it is prime number

function prime(num ) {
    let check = true;
    if(num <= 1) {
        check = false;
    }
    for ( let i = 2; i * i <= num; i++  ) {
        if (num % i === 0 ){
            check =  false;
            break;
        }
    }
      if (check) {
        console.log(num + " is a prime number");
      } else {
        console.log(num + " is not a prime number");
      }
    }
prime(10);
prime(5);

// III. Determine a string if it is a palindrome
   function palindrome (pal) {
    let drome = pal.length - 1; 
    for ( let i = 0; i < pal.length / 2; i++ ) {
       if(pal[i] != pal[drome]) {
        return false;
       }
       drome++;
    }
    return true;
   }
   let pal1 = "John";
   let pal2 = 2;
   let pal3 = "Ray";

   console.log(palindrome(pal1));
   console.log(palindrome(pal2));
   console.log(palindrome(pal3));