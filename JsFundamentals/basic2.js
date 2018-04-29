function magic_multiply(x, y){
    if (x === 0 && y === 0) {
        return "All inputs 0";
    }
    if (x.constructor === Array) {
        for (let i = 0; i < x.length; i++) {
            x[i] = x[i] * y
        }
        return x;
    }
    
    if (y.constructor === String) {
        return "Error: Can not multiply by string";
    }

    if (x.constructor === String) {
        let newString = "";
        for (let i = 0; i<y; i++) {
            newString += x;
        }
        return newString;
    }


    x=x*y;
    return x;
}

console.log("\nBasic1");
let test1 = magic_multiply(5, 2);
console.log(test1);

console.log("\nBasic2");
let test2 = magic_multiply(0, 0);
console.log(test2);

console.log("\nBasic3");
const test3 = magic_multiply([1, 2, 3], 2);
console.log(test3);


console.log("\nBasic4");
const test4 = magic_multiply(7, "three");
console.log(test4);


console.log("\nBasic5");
const test5 = magic_multiply("Brendo", 4);
console.log(test5);