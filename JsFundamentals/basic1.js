console.log("\nBasic1");
var x =[];
x.push("coding");
x.push("dojo");
x.push("rocks");
x.pop();
console.log(x);

console.log("\nBasic2");
const y =[];
console.log(y);
y.push("cant push");

console.log("\nBasic3");
var z=[9, 10, 6, 5, -1, 20, 13, 2];
for(let i=0;i<z.length;i++){
    console.log(z[i]);
}

console.log("\nBasic4");
var name=['Kadie', 'Joe', 'Fritz', 'Pierre', 'Alphonso'];
for(let i=0;i<name.length;i++){
    if(name[i].length===5){
        console.log(name[i]);
    }
}

console.log("\nBasic5");
function ConvertToUpper(x){
    return x.toUpperCase();
}
console.log(ConvertToUpper("manjusha"));