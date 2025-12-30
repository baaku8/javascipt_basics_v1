console.log("Kaam kr rha hae");

const buttons=document.querySelectorAll('.box');
const body=document.querySelector('body');

buttons.forEach(function(button){
     button.addEventListener('click',function(e){
         e.preventDefault();
        //  console.log(e);
        //  console.log(e.target)
        // body.style.backgroundColor='e.target.style.backgroundColor';
        if(e.target.id=='pehla'){
            body.style.backgroundColor='blueviolet';
            // e.target.style.backgroundColor='black';
        }
        if(e.target.id=='dusra'){
            body.style.backgroundColor='cadetblue';
            // e.target.style.backgroundColor='black';
        }
        if(e.target.id=='tisra'){
            body.style.backgroundColor='darkkhaki';
            // e.target.style.backgroundColor='black';
        }
        if(e.target.id=='forth'){
            body.style.backgroundColor='brown';
            // e.target.style.backgroundColor='black';
        }
     });
});