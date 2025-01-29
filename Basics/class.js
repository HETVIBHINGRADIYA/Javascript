//JS Classes

class User{
    constructor(username,email,password){
        this.username=username;
        this.email=email;
        this.password=password;
    }
    encryptedPassword(){
        return `${this.password}abc`
    }
    changeUsername(){
        return `${this.username.toUpperCase()}`
    }
}
const kiya=new User("kiya","kiya@gmail.com","123")
console.log(kiya)
console.log(kiya.encryptedPassword())
console.log(kiya.changeUsername())

// User.prototype.encryptedPassword = function(){
//     return `${this.password}abc`
// }

// const hetvi=new User("Hetvi","hetvi@gmail.com","678")
// console.log(hetvi)
// console.log(hetvi.encryptedPassword())
// console.log(hetvi.changeUsername())

// class User1{
//     constructor(firstname,lastname,gmail){
//         this.firstname=firstname;
//         this.lastname=lastname;
//         this.gmail=gmail;
//     }
// }

//JS Inheritance
// class User{
//     constructor(username){
//         this.username=username;
//     }
//     logMe(){
//         console.log(`Username is ${this.username}`);
//     }
// }
// class Teacher extends User{
//     constructor(username,email,password){
//         super(username)
//         this.email=email;
//         this.password=password;
//     }
//     addCourse(){
//         console.log(`A new course was added by ${this.username}`);
//     }
// }
// const chai=new Teacher("chai","chai@gmail.com","123");
// chai.addCourse();
// const masalachai=new User("masalaChai")
// masalachai.logMe();
// console.log(chai instanceof User);

//staticprop
// class User{
//     constructor(username){
//         this.username=username;
//     }
//     logMe(){
//         console.log(`Username: ${this.username}`);
//     }
//     createId(){
//         return `123`
//     }
// }
// const kiya=new User("kiya");
// console.log(kiya)
// //console.log(hitesh.createId())

// class Teacher extends User{
//     constructor(username,email){
//         super(username);
//         this.email=email;
//     }
// }
// const iphone = new Teacher("iphone","iphone@google.com")
// console.log(iphone.createId());

// console.log("abc123")

// console.log("abc123")
// console.log("kiya-hetvi/hunny-bunny bestfriendsss......")

// class number{
//     constructor(name,age){
//         this.name=name;
//         this.age=age;
//     }   
// }
// const user=new number("kiya",20)
// console.log(user)