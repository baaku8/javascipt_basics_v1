// const promiseOne= new Promise(function(resolve,reject){
//     //do some async work
//     setTimeout(function(){
//         console.log("First Promise");
//         resolve();
//     },2000)
// });

// promiseOne.then(function(){
//     console.log("Promise1 consumed");
// })

//Writing style 2

// new Promise(function(resolve,reject){
//     setTimeout(function(){
//         console.log("Promise2");
//         resolve();
//     },2000)
// }).then(function(){
//     console.log("Promise2 resolved");
// })

//Writing Style 3

const promise3=new Promise(function(resolve,reject){
    setTimeout(function(){
        let error=false;
        // console.log("Async kaam in Promise3");
        if(!error){
            resolve({username:'piyush',password:'baaku8'});
        }else{
            reject('ERROR. Something Went Wrong');
        }
    },1000)
})

promise3.then(function(user){    //resolve ka value idhr pass hota hae.
    // console.log(user);
    return user.password;
}).then((pass)=>{     ///return ka value idhr pass hota hae.
    // console.log(pass);
}).catch((error)=>{        //reject ka value idhr pass hota hae
    // console.log(error);
}).finally(()=>{
    // console.log("Everything is done");
})

//another syntax using async-await

const promise4=new Promise(function(resolve,reject){
    let error=true;
    if(!error){
        resolve({username:"baaku",pass:'mi25'});
    }else{
        reject('JS error');
    }
})

// async function consumePromise(){
//     let response =await promise4;
//     console.log(response);                   // this will show error as error is not handled, so we'll use try and catch
// }
async function cosnumePromise(){
    try {
        let response=await promise4;
    // console.log(response);
    } catch (error) {
        // console.log(error);
    }
}
cosnumePromise();


///sbse important , using fetch
 const url='https://api.github.com/users/baaku8';
fetch(url).then(function(response){
     return response.json();
}).then(function(data){
     console.log(data.name);
}).catch(function(error){
    console.log('ERROR HAE BHAIJAAN');
})