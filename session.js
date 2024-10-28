// even numbers 1-50
for(i=0; i<=50; i++){
    if(i%2 ==0){
        console.log(i);
    }
}

console.log("ODD NUMBERS");

for(i=0; i<=50; i++){
    if(i%2 != 0){
        console.log(i);

    }
}
console.log("PRIME NUMBERS");

let a,b ;
for(a=1; a<=50; a++){
    for(b=2; b<a; b++){
        if(a%b == 0){
            break;
        }
    }
    if(a == b){
        console.log(a);
    }
}
