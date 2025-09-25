const accountId = "144555";
let accountEmail = "ansh123@gmail.com";
var accountPassword = "12345";
accountCity = "jaipur";

// accountId = 2; //not allowed
accountEmail = "ap.ap@.com";
accountPassword = "23451";
accountCity = "Benguluru";
let accountState;

console.log(accountId);

console.table([accountEmail, accountPassword, accountCity, accountState]);
/*
prefer not to use var
because if issue in block scope and functional scope
*/
