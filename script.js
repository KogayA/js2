var a = +prompt('введите число');
var b = +prompt('введите степень');

if(isNaN(a)){
    console.log('error');
}else if(a==0){
    console.log('error');
}

if(isNaN(b)){
    console.log('2');
}else if(b==0){
    console.log('2');
}

let d = 1;

for(let i = 1; i<=b; i++){
    d=(d*a);
  
}
 console.log(d);

 
// while(i <=b){
//     a=(a*a);
//     console.log(a);
//     i++;
// }