let userName: string; //number, boolean
let userAge = 38;


userName = "charles";

function add(a:number,b:number, c = 5){
    return a+b;
}

console.log(add(1,2));
console.log(add(1,'2'));//error due to the second argument is string, its not a number, since you already explicit the type of parameters of function, then the arguements needs to follow it.
