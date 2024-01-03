// Brendan Eich 1995, V8 engine is written in C++ and is able to optimize JavaScript code
//Mozilla has its own engine called SpiderMonkey. Safari uses the engine JavaScriptCore.
//document is an object that represents the current HTML document.
//function currying
//call method
//features in javascript latest version 
//Usage of First-Class Function
// It can be stored as a value in a variable.
// It can be returned by another function.
// It can be passed into another function as a parameter.
// It can also stored in an array, queue, or stack.
// Also, It can have its own methods and property.

let name1 = {
    firstName : "saikiran",
    lastName : "Reddy"
}

function printName(hometown, state, statecountry){
    var firstName = "saikiran sathu";
    console.log("this is",this);
    console.log(this.firstName+" "+this.lastName+", "+hometown+", "+state, "", statecountry);
}

printName.call(name1); //output saikiran reddy
printName.bind(name1); // this will create a copy of function 
printName.bind(name1)(); // output saikiran reddy

Function.prototype.myBind = function(...vars){
    let obj = this;
    console.log(this)
    return function(...args){
        obj.call(...vars, ...args);
    }
}

 var test = printName.myBind(name1, "Hyd", "TS"); 
 test("TS IND");

 function logg(){
    console.log(this);
    var a = 10;
    function test(){
        a = a+10;
    }
    // setTimeout(()=>{
    //     test();
    // },2000) 
    function test1(){
        var b =22;
        function test2(){
                var c =100;
            return function(){
                console.log("asdfasdfasdf",a,b,c);
            }
        }
        test2();
    }
    return test1;
  
 }

 

 logg()();

 (function tet(){
    console.log("iif");
 })();