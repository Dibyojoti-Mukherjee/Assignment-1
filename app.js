//  document.getElementById("btn").addEventListener("click", primecheck);

// function primecheck()
// {
// let x= document.getElementById("num");
// let number= x.value ;
// check(number).then(onfull).catch(onreject); 
// }
// var onfull=(x)=>console.log(x);
// var onreject=(x)=>console.log(x);
// function check(number)
//  {
//     return new Promise(function(resolve,reject){
//         console.log("Please wait details are fetching");
//         setTimeout(function(){
//             if(checkPrime(number))
//             {
//                 resolve("it is a prime number");
//             }
//             else{
//                 reject("it is not a prime number");
//             }
//         }, 3000)
//     })
//  }
//  function checkPrime(x)
//  {
//     if(x==1)
//     {
//         return false;
//     }
//         for(let i=2;i<=x/2;i++)
//         {
//             if(x%i==0)
//             {
//                 return false;
//             }
//         }
//         return true;
       
//  }

let a=[1,2,3];
let b=[4,5,6];
let c=[];
c.push(a);
c.push(b);

console.log(c);