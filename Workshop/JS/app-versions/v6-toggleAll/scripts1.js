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
},

toggleAll: function () {

  var totalTodos = this.todos.length;
  var completedTodos = 0;

  // Get the number of completed todos
  for (var i = 0; i < totalTodos; i++) {
    if (this.todos[i].completed === true) {
      completedTodos++;
    }
  }

  // If everything is true, make everything false.
  if (completedTodos === totalTodos) {
    for (var i = 0; i < totalTodos; i++) {
      this.todos[i].completed = false;
    }
  }

  // Otherwise make everthing true.
  else {
    for (var i = 0; i < totalTodos; i++) {
      this.todos[i].completed = true;
    }
  }

  this.displayTodo();

} //End toggleAll() method


};









todoList.displayTodos();
console.log(todoList);
todoList.toggleCompleted(0);
todoList.toggleAll();










