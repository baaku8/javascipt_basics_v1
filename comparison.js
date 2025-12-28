//normal comparisons are good, mtlb same datatype comparisons.
//but we should avoid comparisons with null and undefined, these gives anomalies

// console.log(null>0); false 
// console.log(null==0);  false
// console.log(null<0);  false
// console.log(null<=0);  true!! as here null is converted to 0 and 0>=0 so true;

// console.log(1+2+"2");  32
// console.log("1"+2+2);  122  so avoid these cheap codes

//hamara main dharm hae code ko readable banana jisse team ke dusre members ko smjhme aye and upcoming readers ko confusion na ho

