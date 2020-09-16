for(i=1;i<=20;i++){
 console.log(`${i}`)   
}

for(i=1;i<=20;i++){
    if(i%2==0){
        console.log(`${i}`)   
    }
}

console.log([-1,2,3,56,6,-93,0,4].map(x => x*2))
console.log([10,13,44,55,89,0,12,1].filter(x => x%2==0))