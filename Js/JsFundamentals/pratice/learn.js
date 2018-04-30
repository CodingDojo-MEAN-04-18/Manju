//call back 
/*
var ninja = 'Libby';
setTimeout(testcallback, 2000 ); // run the function defined after 2000 milliseconds
setTimeout(function(){console.log(ninja+ " in 2nd style of call back fucntion");}, 2000);
console.log(ninja+" out of function");
function testcallback(){ console.log(ninja+ " in 1st style of call back fucntion"); }
*/
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