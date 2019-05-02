alert("It IS WORKING !");

var todoList = {
/**
 * MY TODOS ARRAY
 */
//todos : ["First","Second","Third"],

todos: [
{
  textTodo: "First",
  completed:false
},
{
  textTodo: "Second",
  completed:true
},
{
  textTodo: "Third",
  completed:false
},



],


/**
 * DISPLAY TODOS
 */
displayTodos: function(){

  console.log(this.todos);

},

addTodo : function(text){

    todoList.todos.push(text);
    this.displayTodos();
},
/**
 * CHANGE TODO
 */
changeTodo : function (position, newText) {
  todoList.todos[position] = newText;
  this.displayTodos();
},
/** 
 * DELETE TODO
 */
deleteTodo:  function (position) {
  todoList.todos.splice(position, 1);
  this.displayTodos();
}




};





/*
var n = 1;
var bool = true; console.log("bool :",bool)
var compare  = ( n === bool );
console.log(compare); */


/*
todoList.displayTodos();
todoList.changeTodo(1,"CHANGE");
todoList.addTodo("Fourth");
todoList.deleteTodo(3);
todoList.addTodo("some text"); */

/*
var myItem=todoList.todos[1];
var showItem='('+ myItem.completed +')'  +  myItem.textTodo;
todoList.displayTodos();
console.log(todoList.todos[2].textTodo);
console.log(todoList.todos[2].completed);
console.log(myItem);
console.log(showItem);*/

var myItem=todoList.todos[1];
var showItem='('+ myItem.completed +')'  + " " + myItem.textTodo;
console.log(showItem);

var raining = "bob";


if(0){
  console.log("TAKE MY UMBRELLA !");
}
else if(0) {

  console.log("JUST WALK ON THE SUN");
}
else{
  console.log("STAY HOME");
}


