const temp=50;   // same as cpp
if(temp<=50){
    // console.log(`The temperature is ${temp}`);
}else{
    // console.log(`Temperature id greater than 50deg`);
}
const temp2=60;
switch(temp2){    // as the name suggests switch and then case -- same as cpp
    case 50:
        // console.log("Temp is 50deg");
        break;
    case 60:
        // console.log("Temp is 60deg");   
        break;
    case 80:
        // console.log("Temp is 80deg");
        break;
    default:
        // console.log("Invalid Temperature");
}

 ///***************************Truthy and Falsy values ******************************************/
//  falsy values--> false,0,-0,BigInt 0n, "", null , undefined
//  truthy values--> true, non-empty string,[],{},function(){}

let demoArray=[];
if(demoArray.length===0){
    // console.log("Array is Empty");
}
const demoObj={};
if(Object.keys(demoArray).length===0){
    // console.log("Object is Empty");
}

//******************** Nullish Coalescing Operator ***********************/

//?? used for null and undefined values.

let val1=5 ?? 10  //->idhr meto 5 hi assign hoga
let val2=null??5  //as pehla value is null , so we'll use 5
let val3=undefined??10  // as pehla wla undefined hae to we'll use 10
// console.log(null??undefined??10??20);  ->10


//Ternary Operator
// condition ? trueOperation : FalseOperation
// temp>=50?console.log("50 se jyada") : console.log("50 se km");

