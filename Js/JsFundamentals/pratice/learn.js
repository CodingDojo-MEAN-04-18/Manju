//call back 
/*
var ninja = 'Libby';
setTimeout(testcallback, 2000 ); // run the function defined after 2000 milliseconds
setTimeout(function(){console.log(ninja+ " in 2nd style of call back fucntion");}, 2000);
console.log(ninja+" out of function");
function testcallback(){ console.log(ninja+ " in 1st style of call back fucntion"); }
*/
/*
var MyObjConstructor = function(name) {
    var myPrivateVar = "Hello"; // just to show that it is difficult to see this private var
    this.name = name; // but you can see the name!
    this.method = function() {
      console.log( "I am a method");
    };
  }
  var obj1 = new MyObjConstructor('object1');
  var obj2 = new MyObjConstructor('object2');
  console.log(obj1);
*/

class Dot {
  constructor(x, y) {
      this.x = x;
      this.y = y;
  }
  showLocation() {
      console.log(`This ${ this.constructor.name } is at x ${ this.x } and y ${ this.y }`);
  }
  // simple method in the parent class
  parentFunction(){
      return "This is coming from the parent!";
  }
}
// child Circle class
class Circle extends Dot {
  constructor(x, y, radius) {
      super(x, y);
      this.radius = radius;
  }
  // simple function in the child class
  childFunction() {
      // by using super, we can call the parent method
      const message = super.parentFunction();
      console.log(message);
  }
}
const circle = new Circle(1, 2, 3);
//circle.childFunction();
circle.parentFunction();