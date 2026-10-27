let hoobies = ['Sports', 'Cooking'];
let hoobiesExplecitAssing : string[] = ['Sports', 'Cooking'];//can do this too. explecit assigning

let users : string[];
let userrsAcceptTwoDataTypes: (string | number)[];//using union. just place it into an close and open parenthesis

//alternative 
let userrsAcceptTwoDataTypesAlternative: Array<string | number>;//this is generic type approach



userrsAcceptTwoDataTypes = ['hello', 5];
userrsAcceptTwoDataTypes = [5, 5];
