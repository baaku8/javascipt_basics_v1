// console.log("Let's start the project! ");


const ul=document.querySelector('ul');
ul.addEventListener('click',function(e){
    //  console.log(e);
    //  console.log(e.target);
    //  console.log(e.target.className);
    //  console.log("Inside ul")
},false);

const img3=document.querySelector('.img3');
img3.addEventListener('click',function(e){
    //  console.log(e);
    //  console.log(e.target);
    //  console.log(e.target.className);          
    //  console.log("Inside img3")
    // e.stopPropagation();      // this will stop event bubbling.
},false);


///is case mae pehle img3 wla print hoga then ul(parent) wla ,, as third parameter is false which means this
// is under Event Bubbling -- andr se baahr propagate hoga events 
//lekin agr isko true krdu to it will be under Event Capturing ---- baahr se andr propagate hoga.

//hm chahte hae ki google pe click krne se wo link forward na ho.
//this can be done by prevent default.

const link=document.getElementById('googleKaLink');
link.addEventListener('click',function(e){
    e.preventDefault();    ///this will prevent the default working of the event. 
    e.stopPropagation();
   console.log('nhi krunga jaa');
},false);