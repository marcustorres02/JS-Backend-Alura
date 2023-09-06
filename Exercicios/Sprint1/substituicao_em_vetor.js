const x = [0, -5, 63, 0, -1, 6, 0, 0, 7, 8];

for (let index = 0; index < x.length; index++) {
    if (x[index] <= 0){
       x[index] = 1;
    }
    
}
console.log(x);