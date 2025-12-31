function setUserName(username){
    this.username=username;
}
// function setDetails(username,email,pass){
//     setUserName(username);
//     this.email=email;
//     this.pass=pass;
// }

const userA=new setDetails('baaku','baaku@gmail.com','1234');   //new is necessary to create a new instance.
// console.log(userA);    setDetails { email: 'baaku@gmail.com', pass: '1234' }
//lekin is output mae username set kyu nhi hua
//its because setUserName ko setDetails ka context nhi milrha ,wo apna kaam krke stack se htja rha.
//to keep its reference after deletion we'll use CALL keyword;

function setDetails(username,email,pass){
    setUserName.call(this,username);   //this ka pass krna zruri hae taaki pta chla paaye kis this ka username set krna hae.
    this.email=email;
    this.pass=pass;
}
console.log(userA); //abhi theek se ho jayega