// console.log("Let's start the project! ");
const clock=document.querySelector('#timeDisplay');
    setInterval(function(){
        const currtime=new Date();
        // console.log((currtime.toLocaleTimeString()));
        clock.innerHTML=`${currtime.toLocaleTimeString()}`
    },1000);
