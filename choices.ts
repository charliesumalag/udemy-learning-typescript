enum Role {
    Admin, //0
    Editor, //1
    Guest //2
}

let userRole : Role  = 0; //0 means admin, 1 is guest
let userAdmin : Role = Role.Admin;

console.log(userRole);
console.log(userAdmin);
