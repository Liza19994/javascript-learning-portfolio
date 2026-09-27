const accountId = 12345
let accountEmail = "ummeliza@gmail.com"
var accountPassword = "2345"      
// initially we will not use var as if someother change the other pass it will change it here so its good not to use var. use let
accountcity = "Ctg"

let accountState;

// accountId = 2// Not allowed as we fixed the accountid before by putting const.


/*
prefer not to use var 
because of issue in block scope and functional scope

*/
accountEmail = "wel@gmail.com"
accountPassword = "346"
accountcity = "dhk"

console.log(accountId);

console.table([accountEmail,accountPassword,accountId,accountcity,accountState])
// console.table([]) /// we will use for multiple thing running