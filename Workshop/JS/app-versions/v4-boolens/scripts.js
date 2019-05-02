alert("It is working !");
//GLOBAL SCOPE

//VARIABLES
var aString = "This is a string";
var aNumber = 30 ; // It can be any number 23.5 23 
var aBoolean = true ; // It can be true and false
var anArray = [];
var anObject = {};
var aFunction = function(){

};

//ARRAY
var myarray = [
  "string",
  567
  [1,2,3],
  {}
];

myarray[1]; // 1 is the index
myarray.push("dada");
myarray.length; // size of the Items ....

//FUNCTIONS

function addTodo(){
  //whatever code ...
  //lOCAL SCOPE
  var bob = 3 ;
  console.log(addTodo);
}

var addTodoOther = function(){
  // whatever you code
  // You can not mention the same name in function that it exist in the list .
  addTodo();

  console.log(bob);
}
addTodo();
//console.log(addTodo);

//DISPLAY NAME 
function name(){
  console.log("Marc");
  var a = 5 ;
  console.log(4 + a);
}

name();

function name(theName,theAge){
  var year = 2019 - theAge ;
  console.log(theName,year);
}

name("Raihan",31);
name("Wais",27);

//OBJECTS

var car ={
  make: "Volvo",
  model:"V70",
  color:"red",

  moreinfo: function(myArg){
    var html = "";
    html += html + "<a>BLAS</a>";
    html += "<a>DADA</a>" ;
    return html;
  }
};

console.log(car.color );
