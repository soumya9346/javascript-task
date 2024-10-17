
// prime numbers

let i,j;
for(i=1; i<=25; i++){
    for(j=2; j<i; j++){
        if(i%j==0)
            break;
        }
       if(i == j)
        console.log(i); 
}





// let count=0;
// let i, j ;
// for (i = 2; i<=50; i++){
//     for(j=1; j<=i; j++){
//         if(i%j == 0){
//             count++
//         }
//         if(count==2){
//             console.log(j);
//             count=0
//         }
//     }
// }