

// // for (var i = 1; i <= 1000; i++) {
// //     console.log(i)
// // }
// let output = ''
// for(let i=0;i<5;i++){
//     for(let j=0;j<=i;j++){
//         output += '*'
//     }
//     if(i<4){
//     output += '\n' 
//     }
// }
// console.log(output)
let z = ''
for(i = 0;i < 10;i++){
    for(j = 0; j <=i; j++){
        z+='-'
    }
    for(k = i;k < 10; k++){
        z+='*'
    }
    for(l = i + 1;l < 10;l++){
        z+='+'
    }
    if(i < 10 - 1){
        z+='\n'
    }
}
console.log(z)
// let output = ''
// for(let i=0;i<5;i++){
//     for(let j=i;j<5;j++){
//         output += '*'
//     }
//     if(i<4){
//     output += '\n' 
//     }
// }
// console.log(output)

