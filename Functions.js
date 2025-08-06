// //primitive  

// // String

// console.log("javascript");

// //number

// console.log(12334);

// //boolean

// console.log(true);

// //bigint 

// console.log(74581287945612n);

// //Null 
// let a = null;
// console.log(a);

// //undefined
// let b ;
// console.log(b);

// non-primitive 

//Array 

// const c =["ganesh",41,29,'@']
// console.log(c);

// const f = ["sara",23,334,234,'#','@']
// console.log(f);

//object 

// let d = {
//     Name : "uma",
//     age : 24,
//     height : 130.5,
//     Degree : "MBA"
// }
// console.log(d);


//function decelaration 
function f (name,age){
    console.log("Hi " + name , age);
}  
f("uma",24);

//function expression 
const g = function (chennai , bangalore) {
    console.log("Travel fair " + chennai);
    console.log("Travel fair " + bangalore);
    
}
g(1000 , 2000);

//arrow function
const name = (age) =>{
      console.log("hfhoeed " + age);
     const f = ["sara",23,334,234,'#','@']
console.log(f);
      
}
name(25);
//iife (immediate invoke function expression )
(function name() {
    console.log("Javascript");
    
})();