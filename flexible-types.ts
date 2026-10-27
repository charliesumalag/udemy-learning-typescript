let age: string | number = 30; //union type
let anyAge: any = 36

age = '37'; //error since typesciprt know that the age is number type in the first pleace. so it cant assing. 
anyAge = '36'; //it accept because any allow that type to be any type of values, so it means using this is like using vanilla js. not a typescript maybe sometimes can use it.
age = true; // not accepted since the age type is string or a number. that what we called unioin.