//console.log("Hello!"); //Printing simple statement

//JS variables
// const accountId=12345; //It does not 
// let accountEmail = "abc@gmail.com";
// var accountPassword = "12345";
// let accountCity = "Surat";
// //console.log(accountId);

// //Prefer not to use var due to functional scope and block scope

// //accountId="234n";
// accountEmail="kiya@gmail.com";
// accountPassword="kiya@123";
// console.table([accountId,accountEmail,accountPassword,accountCity]);

//JS Operators
//Arthimetic operators : +,-,*,/,%,**

// let x=8;
// let y=4;
// console.log("x =" ,x , "y=" ,y);
// console.log("x+y =",x+y);
// console.log("x-y =", x-y);
// console.log("x*y =",x*y);
// console.log("x/y =",x/y);
// console.log("x%y =", x%y);
// console.log("x ** y =",x**y);

//Unary Operators ++,--

// let x=7;
// let y=6;

// console.log("x =",x , "y = ",y);
// console.log("x++ =",x++);
// console.log("x =",x);
// console.log("--y =",--y);
// console.log("y =",y);

//Assingment operators ==,+=,-=,*=,%=,**
// let x=8;
// let y=4;

// x+=x;
// console.log("x =",x);
// y-=y;
// console.log("y =",y);
// x*=x;
// console.log("x=",x);
// y%=y;
// console.log("y=",y);
// x**=x;
// console.log("x=",x);

//Comparison operators ==,!=,===,!==,>,>=,<,<=
// let a=5;
// let b=3;

// console.log("Comparison operators: ")
// console.log("a==b =", a ==b);
// console.log("a!=b =", a!=b);
// console.log("a===b =", a===b);
// console.log("a!==b =", a!==b);
// console.log("a>b =" ,a>b);
// console.log("a>=b =",a>=b);
// console.log("a<b =",a<b);
// console.log("a<=b =",a<=b);

//Logical operators
// let x=8;
// let y=2;

// console.log("cond1 && cond2 =" ,x<y && x===8);
// console.log("cond1 || cond2 =", x<y || x===8);
// console.log("!(8<2) = ", !(x<y))

//Datatypes in js - Number,String,Boolean,Null,Undefined,BigInt,Symbol,object

// console.log("Number Datatype");
// let age =23;
// let price=100.25;
// console.log(age);
// console.log(typeof age);

// console.log("String datatype");
// let name="kiya mangukiya";
// console.log(name);
// console.log(typeof name);

// console.log("Boolean datatype");
// let isFollow=true;
// let x=5;
// let y=5;
// let z=7;
// console.log(x==y);
// console.log(x==z);
// console.log(typeof isFollow);

// console.log("Undefined");
// let x;
// console.log(typeof x);

// console.log("Bigint datatype");
// let a=BigInt(12345.00);
// console.log(typeof a);

// console.log("Symbol datatype");
// let x=Symbol("Hello!@");
// console.log(x);
// console.log(typeof x);

// console.log("Object datatype");
// const student = {
//     name:"Kiya mangukiya",
//     age:20,
//     cgpa:9.5,
//     isPass:true
// };

// student["cgpa"]=9.7;
// console.log(student["cgpa"]);
// console.log(typeof student["isPass"]);
// console.log(student);

// const product = {
//     title:"Ball Pen",
//     rating: 4,
//     offer :5,
//     price:300
// };

// product["title"]="Gel Pen";
// console.log(product["title"]);
// console.log(product);
// console.log(typeof product);

//Functions in js

//Adding two numbers
// function add(a,b){
//     console.log(a+b);
// }
// add(10,20);

//Multiply two numbers
// function mul(a,b){
//     console.log(a*b);
//     return a,b;
// }
// mul(3,4);

//Divide two numbers
// function divide(a,b){
//     console.log(a/b);
//     return a,b;
// }
// divide(20,2);

//Objects in JS

// const person = {
//     Firstname:"Kiya",
//     Lastname:"Mangukiya",
//     age:20,
//     city:"surat",
//     FullName: function(){
//         console.log(this.Firstname + " " + this.Lastname);
//         return this.Firstname + " " + this.Lastname;
//     }
// };

// console.log(person);
// person.FullName();

// const x=person; //Create a copy

// x.city="Mumbai";
// x.nationality = "English";
// x.Lastname="Mangukiya";
// delete x.Lastname;
// console.log(x);

// console.log(x.Firstname + " " +"is" + " " + x.age+ " " + "years old");

// function Person(first,last,age,eye){
//     this.firstname=first;
//     this.secondname=second;
//     this.age=age;
//     this.eyecolour=eye;
// }

// console.log(Person);

//Strings in JS

// let str = "Hello Javascript!";

// //Length method
// console.log(str.length);

// //charAt() method
// console.log(str.charAt(7));

// //charCode() method
// console.log(str.charCodeAt(4));

// //at() method
// console.log(str.at(3));

// //slice() method
// console.log(str.slice(7,13));

// let slicestr="Apple,Banana,Kiwi";
// console.log(str.slice(-14,-5));
// console.log(slicestr.slice(-11,-2));

// //Substring method
// console.log(str.substring(-10));
// console.log(slicestr.substring(10,20));

// console.log(str.substr(3,5));
// console.log(str.substr(-10));

// //Uppercase and lowercase
// console.log(str.toUpperCase());
// console.log(slicestr.toUpperCase());
// console.log(str.toLowerCase());

// //Concat
// let text1="Hello";
// let text2="Kiya!";
// console.log(text1.concat(text2));

// //Trim
// let text="       Hello      ";
// console.log(text.trim());

// //Trimstart,Trimend
// let txt="   JavaScript!     ";
// console.log(txt.trimStart());
// console.log(txt.trimEnd());

// //padstart,padend
// let num="5";
// let padded= num.padStart(7,"0");
// let padded1=num.padEnd(6,"x");
// console.log(padded);
// console.log(padded1);

// //repeat
// console.log(str.repeat(5));

// //replace
// let rtext="Please visit Microsoft website";
// console.log(rtext.replace("Microsoft","w3Schools"));

// //replace all
// let rtxt = "I love winter.winter season comes under 3 months";
// console.log(rtxt.replaceAll("winter","Moonsoon")); 

// //split
// console.log(str.split(" "));

//String search
// let text = "Please locate where 'locate' occurs!";
// console.log(text.indexOf('locate'));  //indexof
// console.log(text.lastIndexOf('locate')); //lastindexof
// console.log(text.search('occurs')); //search

//match
// let text = "The rain in Spain stays mainly in the rain/g";
// //console.log(text.match('ain'));
// //console.log(text.matchAll('ain/g' ));
// console.log(text.includes('rain'));
// console.log(text.startsWith())

//JS numbers
//Adding two numbers using no quotes
// let x=10
// let y=20
// let z=x+y
// console.log(z)

//Adding two strings using quotes which concates two strings
// let a="30"
// let b="40"
// let c=a+b
// console.log(c)

//Adding strings and numbers
// let a=50
// let b=40
// let c="string"
// let result=a+b+c
// console.log(result)

//JS Arrays
//Two ways to create array
const cars = ["BMW","Volvo","Mercedes"];
console.log(cars)
const fruits = new Array("Apple","Banana","Peach");
console.log(fruits)
const num =[1,2,3,4]
console.log(num)

//Accessing array elements
console.log(cars[2])
console.log(fruits[0])

//Changing array elements
console.log(cars[1]="Porsche")
console.log(cars)
console.log(fruits[2]="Berries")
console.log(fruits)

//array methods
console.log(cars.length) //length
console.log(fruits.length)
console.log(cars.sort()) //sort
console.log(fruits.sort())

let n=num.toString() //toString
console.log(n,typeof n)

console.log(fruits.join("and"),typeof fruits) //join joins all the element
console.log(fruits.pop()) //pop removes last element
console.log(fruits)

console.log(fruits.push("Peach")) //push adds new element
console.log(fruits)

console.log(num.shift(),num) //shift removes first element and returns it

console.log(num.unshift(100),num) //unshift adds the new element at the begin and returns array element

console.log(delete num[3]) //Deletes an element from the array
console.log(num.length)

//concat two or three arrays
let n1=[1,2,3,4,5,6,7,8,9,10]
let n2=[11,12,13,14,15,16,17,18,19,20]
console.log(n1.concat(n2))

//Using three arrays
let n3=["abc","xyz",'pqr',"rst"]
console.log(n1,n2,n3)
console.log(n1.concat(n2,n3))

//Sort
let s1=[20,10,99,75,43,33,12]
console.log(s1.sort())
console.log(s1)

//reverse
console.log("reverse")
console.log(s1.reverse())

//splice
let s2=[1012,22,23,99,55,34,29,100]
let deletedValues = s2.splice(2,2,88,77,66)
console.log(s2)
console.log(deletedValues)
//slice
console.log(s2.slice(3))

//Array search methods
let colors=["red","blue","green","pink","blue","yellow"]
console.log(colors)

//indexof
console.log(colors.indexOf("pink")) 

//lastindexof
console.log(colors.lastIndexOf("blue"))

//includes
console.log(colors.includes("pink"))

//find
const number=[22,44,32,12,11]
console.log(number.find(myFunc))

function myFunc(val,index,array){
    return val>20
}

//findindexof
const number1=[44,55,77,88]
console.log(number1.findIndex(myifunc))

function myifunc(val,index,array){
    return val>70
}

//JS array iteration methods

//for loop
console.log("For loop")
let numb=[8,9,7,6,5]
for(let i=0; i<numb.length; i++){
    console.log(numb[i])
}
//foreach
console.log("For each loop")
numb.forEach((element) =>{
    console.log(element*element)
})

//JS Math object
//PI Value
console.log(Math.PI)

//Round
console.log(Math.round(8.6))

//Ceil
console.log(Math.ceil(4.3))

//Floor
console.log(Math.floor(3.2))

//Log
console.log(Math.log(5))

//Random
console.log(Math.random())

//Max
console.log(Math.max(23,99,76,55,101))

//Min
console.log(Math.min(-7,5,4,87,2))

//Pow
console.log(Math.pow(4,2))

//abs
console.log(Math.abs(-7.8))

//Boolean
console.log(10>8)

//JS Comparisions
let x=10

//==
console.log(x==10)

//===
console.log(x===10)

//!=
console.log(x!=4)

//!==
console.log(x!==10)

//>
console.log(x>9)

//<
console.log(x<5)

//<=
console.log(x<=10)

//>=
console.log(x>=9)

//Logical operator
let y=4
//&&
console.log(x<5 && y>1)

//||
console.log(x==10 || y==4)

//!
console.log(!(x>7))

//if-else statement
let age=12
console.log(age)
if(age>18){
    console.log("Age should be greater than 18 so you can vote",age)
}
else
{
    console.log("Your age is less than 18 so you can't vote",age)
}

//if else-if statement
let marks=65
if(marks<=99 && marks>=88){
    console.log("A Grade")
}
else if(marks<=88 && marks>=77){
    console.log("B Grade")
}
else if(marks<=77 && marks>=66){
    console.log("C Grade")
}
else if(marks<=66 && marks>=55){
    console.log("D Grade")
}
else
{
    console.log("Fail")
}

//switch statement
let trafficlight="blue"
let message=""

switch(trafficlight){
   case "red":
    message="Stop immediately"
    break
    case "green":
    message="Proceed or continue driving"
    break
    case "yellow":
    message="Prepare to stop"
    break
    default:
    message="Invalid traffic light colour"
}
console.log(message)

//How to use for loop to access an array
for(let i=1;i<fruits.length;i++){
    console.log(fruits[i])
}

//for in
const person ={
    fname:"John",
    lname:"Doe",
    age:28
}
for(let x in person){
    console.log(person[x])
}

const n4=[10,20,50,70,80,90]
let txt=""
n4.forEach(myFunc1)

function myFunc1(value,index,array){
    txt = value 
    console.log(txt)
}

//for of
let language="JavaScript"
let text = ""
for(let x of language){
    text = x
    console.log(text)
}

//while
let i=0
while(i<10){
    console.log(i)
    i++
}

//do while
let j=0
do{
    text +=j
    console.log(j)
    j++
}
while(j<=10)