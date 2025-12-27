const userID="USERID1";
let username="baaku";
var usermail="Baaku@gmail.com";
accountype="professional";  // not recommended
let variable;  // undefined as not yet specified konsa data type

// userID="id2";    not allowed
console.log(userID);


//do not use var now as it was previously made
//and had some block and functional scope issues,
//use let instead.

console.table([userID,username,usermail,accountype,variable]);  //prints in the form of tables