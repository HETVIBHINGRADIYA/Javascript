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

const person = {
    Firstname:"Kiya",
    Lastname:"Mangukiya",
    age:20,
    city:"surat",
    FullName:function(){
        console.log(this.Firstname + " " + this.Lastname);
        return this.Firstname+" "+this.Lastname;
    }
};

console.log(person);

const x=person; //Create a copy

x.city="Mumbai";
x.nationality = "English";
x.Lastname="Mangukiya";
delete x.Lastname;
console.log(x);

console.log(x.Firstname + " " +"is" + " " + x.age+ " " + "years old");

