let myNum:number = 5;
let myString:string = "Hello Universe";
let myArr:Array<number> = [1,2,3,4];
let myObj:any = { name:'Bill'};
let anythingVariable:any = "Hey";
anythingVariable = 25; 
let arrayOne: Array<Boolean> = [true, false, true, true]; 
let arrayTwo:any = [1, 'abc', true, 2];
myObj = { x: 5, y: 10 };
// object constructor

class Mynode{
    val: number;
    _priv: number;
    constructor(valc: number) {
        this.val = valc;
    }
    doSomething() {
        this._priv = 10;    
    }
}

let myNodeInstance = new Mynode(1);
console.log(myNodeInstance.val);

function myFunction() {
    console.log("Hello World");
    return;
}
function sendingErrors() {
	throw new Error('Error message');
}