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
let text = "The rain in Spain stays mainly in the rain/g";
//console.log(text.match('ain'));
//console.log(text.matchAll('ain/g' ));
console.log(text.includes('rain'));
console.log(text.startsWith())