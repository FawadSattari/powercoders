alert("It IS WORKING !");

var todoList = {
  /**
   * MY TODOS ARRAY
   */
  //todos : ["First","Second","Third"],

  todos: [
    {
      textTodo: "First",
      completed: false
    },
    {
      textTodo: "Second",
      completed: false
    },
    {
      textTodo: "Third",
      completed: false
    },
    {
      textTodo: "Fourth",
      completed: true
    },



  ],


  /**
   * DISPLAY TODOS
   */
  displayTodos: function () {

    for (let i = 0; i < this.todos.length; i++) {


      var myItem = this.todos[i];

      var x = " ";
      if (myItem.completed) {
        x = " x ";
      }
      //var x = (myItem.completed) ? 'x' : '';

      //var showItem='('+ myItem.completed +')'  + " " + myItem.textTodo;
      var showItem = '(' + x + ')' + " " + myItem.textTodo;
      //console.log(todoList.todos);
      console.log(showItem);

    }

  },

  addTodo: function (text) {

    this.todos.textTodo.push(text);
    this.displayTodos();
  },
  /**
   * CHANGE TODO
   */
  changeTodo: function (position, newText) {
    this.todos[position].textTodo = newText;
    this.displayTodos();
  },
  /** 
   * DELETE TODO
   */
  deleteTodo: function (position) {
    this.todos.splice(position, 1);
    this.displayTodos();
  },
    //TOGGLE COMPLETED
  toggleCompleted: function(position){
    let item = this.todos[position];
    item.completed = ! item.completed;
    
    this.displayTodos();
}




};

todoList.displayTodos();
console.log(todoList);
todoList.toggleCompleted(0);







/*
var n = 0;
var bool = false; console.log("bool :",bool);

var s = "0";

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


/*
for( let i = 0; i < 10; i++ ) {
  debugger;
  console.log("Value of i :",i)
  
};
*/







var raining = "bob";


if (0) {
  console.log("TAKE MY UMBRELLA !");
}
else if (0) {

  console.log("JUST WALK ON THE SUN");
}
else {
  console.log("STAY HOME");
}



