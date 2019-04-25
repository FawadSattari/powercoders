console.log("Working");
alert("It works");



// MY TODO




var todos = [
  
  {
    text: "One",
    completed:false
  },


  {
    text: "Two",
    completed:false
  },
  
  {
    text:"Three",
    completed:true
  }

];

console.log(todos[0].text);




//DISPLAY TODOS
function displayTodos(){
console.log(todos);

} 



// ADD ITEMS IN THE LIST



function addTodo(add){

  todos.push(add);
  displayTodos(todos)
}
displayTodos(todos);
addTodo("Four");
addTodo("Five");




// CHANGE ITEMS


function changeTodo(index, text){

  todos[index]=text;
  displayTodos(todos);
 
}
changeTodo(2, "Good");





// DELETE ITEMS

function deleteTodo(index,end){

  todos.splice(index,end);
  displayTodos(todos);
}


deleteTodo(2,2);
changeTodo(2,"Three");
addTodo("Four");
addTodo("Five");
addTodo("Six");
changeTodo(5,"DONE");
deleteTodo(5,5);
addTodo("DONE");
addTodo("Final");





var myobj={
  name: " Sorin",
  Dog: false ,
  Cat: true
 
 }









