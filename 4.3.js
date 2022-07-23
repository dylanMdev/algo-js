
 function rand10()
 {
     return Math.floor(Math.random() * 10) + 1;
 }

 function multiRand(n)
 {
     let r = [];
     for(let i = 0; i < n; i++)
     {
         r.push(rand10());
     }
     return r;
 }
 let N = prompt('How many number to generate?');
 console.log(multiRand(N));