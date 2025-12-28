//for
for (let i = 0; i < 10; i++) {
    if(i==2) continue;
    // console.log(i);
    if(i==5) break;
}
//while
let val=0;
while(val<=10){
    // console.log(`val ka value ${val}`);
    val+=2;
}
//do while -->same as cpp

//for_of
let array=[1,2,3,5,6];
for(const i of array){
    // console.log(i);
}
//application in maps  -- maps are objects which stores unique key value pairs and also the order is maintained.
let mapDS=new Map();
mapDS.set(1,'a');
mapDS.set(2,'b');
for(const key of mapDS){   //[ 1, 'a' ]   // arrays
                           //[ 2, 'b' ]
    // console.log(key);
}

for(const [key,val] of mapDS){     //destructuring the map
    // console.log(`${key} :- ${val}`);
}

//objects ke liye aise nhi krskte

//for_in
let obj={
    "js":"javascript",
    "cpp":"cplusplus",
    "ts":"typescript"
}
for(const key in obj){
    // console.log(`${key} stands for ${obj[key]}`);
}
//maps are not iterable using for_in loops

//Higher Order loops
//arrays ke liye--method in Array.Prototype

array.forEach(printkaro);   //printkaro is a callback function
function printkaro(item){
    // console.log(item);
}

array.forEach((item,index,arrPura)=>{
    // console.log(item,index,arrPura);
});

//Generally database se aya hua file aise array of objects ke form mae hota hae.
let arrOfObj=[
    {
        firstName:"Piyush",
        lastName:"Chatterjee"
    },
    {
        firstName:"Rehman",
        lastName:"Dakait"
    },
    {
        firstName:"Saanidhya",
        lastName:"Bhuyan"
    }
]
arrOfObj.forEach((item)=>{
    // console.log(`FullName is ${item.firstName} ${item.lastName}`);   //lekin ye kuch return nhi krta.
})

//filter method  --- important in database handling

let filtername=arrOfObj.filter((item)=>{
    return item.firstName==='Rehman'     ///idhr return dena zruri hae ,, see arrow function wla playlist  ,,idhr scope hae.
})
// console.log(filtername);

//map method --- important ye bhi 
//same as filter but abhi ye values filter na krke edit krta hae

let mapname=arrOfObj.map((item)=>{
    item.firstName='Baaku';
    return item;
});
// console.log(mapname);


////chaining///
let arr=[1,2,3,4,5,8,9];
const newarr=arr
.map((item)=>{return item*10})
.map((item)=>{return item-1})
.filter((item)=>{return item>=40});
// console.log(newarr);

//reduce method --used for accumulation in billing system

let initial=0;

let totalval=newarr.reduce((acc,currval)=>(acc+currval),initial);
// console.log(totalval)
//actually idhr acc pehle initial value leta hae aur in each iteration acc=acc+currval hojata hae.
//practical example

let shoppingCart=[
    {
        course:"NLP",
        price:3000
    },
    {
        course:"DIP",
        price:4000
    },
    {
        course:"ANN",
        price:3500
    },
    {
        course:"SNA",
        price:2000
    },
]
let totalbill=shoppingCart.reduce((acc,item)=>{return acc+item.price},0);
console.log(totalbill);