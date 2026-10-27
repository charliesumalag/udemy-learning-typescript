"use strict";
var Role;
(function (Role) {
    Role[Role["Admin"] = 0] = "Admin";
    Role[Role["Editor"] = 1] = "Editor";
    Role[Role["Guest"] = 2] = "Guest"; //2
})(Role || (Role = {}));
let userRole = 0; //0 means admin, 1 is guest
let userAdmin = Role.Admin;
console.log(userRole);
console.log(userAdmin);
