"use strict";
let possibleResults;
possibleResults = [1, -1];
possibleResults = [5, 10, 12];
//the code above is accepted. but what if you want a exact size and more presize data types.thats were tuples comes in
//tupes
let tuplesPossibelResult;
let tuplesPossibelResultString;
tuplesPossibelResult = [1, 2];
// tuplesPossibelResult = [1,2,3];//error since tuples set it it is fixed length.
// tuplesPossibelResultString = [1.2];//errror since tuples set it second value would be stirng.
let users = {
    name: 'Max',
    age: 30,
};
//typescirpt know it tht type of values inside this object.
let usersExplicit = {
    name: 'Charles',
    age: 14,
    possibleResults: possibleResults,
    role: {
        description: 'hello',
        id: 4,
    }
}; //this is the explicit approach
let val = 'Hello';
console.log(typeof val);
