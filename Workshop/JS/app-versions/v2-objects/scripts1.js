console.log("Working");
alert("It works");

var todoList = {

  /** TODOS ARR ---------------------------------------- */
  todos: [
    {
      text:"First Item",
      completed: false
    },

    {
      text:"Second Item",
      completed: false
    },

    {
      text:"Third Item",
      completed: true
    }

  ],
 /** Display TODOS ---------------------------------------- */
  displayTodos: function() {
    console.log(this.todos);
  },
  /**Add TODOS----------------- */
  addTodo: function(text){

    this.todos.push({
      todeText:text,
      completed:false
    });
    this.displayTodos();
  },
  /**delete TODOS----------------------------- */
  
  
  

};




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
console.log(todos);
todoList.displayTodos();
todoList.addTodo("something");

