// const can't be change 
const accountId = 144553
let accountEmail ="aman@gmail.com"
var accountpassword = "12344"
accountCity ="Jaipur"
let accountState;
// accountId = 2 do not work 

accountEmail = "asdfasdf@.com"
accountpassword = "234234"
accountCity = "mumbai" 

console.log(accountId);

/* 
Prefer not to user var
because of issue in block scope and functional scope
*/

console.table([accountId, accountEmail, accountpassword, accountCity, accountState]);