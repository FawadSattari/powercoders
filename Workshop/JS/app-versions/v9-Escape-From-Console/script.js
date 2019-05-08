/**
 * TODO LIST OBJECT
 * ----------------------------
 * METHOD TO IMAGE THE TODO LIST
 */
var todoList = {


	todos: [
		{
			todoText: "Item 1",
			completed: true
		},
		{
			todoText: "Item 2",
			completed: false
		},
		{
			todoText: "Item 3",
			completed: false
		},
		{
			todoText: "Item 4",
			completed: true
		}
	],


	displayTodos: function () {

		if (this.todos.length === 0) {
			console.log('Your todo list is empty!');
		}
		else {
			console.log('My Todos:');
			for (var i = 0; i < this.todos.length; i++) {
				if (this.todos[i].completed === true) {
					console.log('(x)', this.todos[i].todoText);
				}
				else {
					console.log('( )', this.todos[i].todoText);
				}
			}
		}

	},


	addTodo: function (todoText) {
		this.todos.push({
			todoText: todoText,
			completed: false
		});
		this.displayTodos();
	},


	changeTodo: function (position, todoText) {
		this.todos[position].todoText = todoText;
		this.displayTodos();
	},


	deleteTodo: function (position) {
		this.todos.splice(position, 1);
		this.displayTodos();
	},


	toggleCompleted: function (position) {
		var todo = this.todos[position];
		todo.completed = !todo.completed;
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
			// Otherwise make everthing true.
		} else {
			for (var i = 0; i < totalTodos; i++) {
				this.todos[i].completed = true;
			}
		}
		this.displayTodos();
	}


};


/**
 * HANDLERS OBJECT
 * ----------------------------
 * METHOD TO HANDLE THE DOM EVENTS
 */

 var handlers = {


	addTodo: function () {
		var addTodoInput = document.getElementById('addTodoInput');
		todoList.addTodo(addTodoInput.value);
		addTodoInput.value = '';
	},

	changeTodo:function(){
		var changeTodoindexInput = document.getElementById('changeTodoIndexInput');
		var changeTodoInput = document.getElementById('changeTodoInput');
		todoList.changeTodo(changeTodoIndexInput.valueAsNumber, changeTodoInput.value);
		changeTodoIndexInput.value = "";
		changeTodoInput.value = '';

	},


	deleteTodo: function(){
		var deleteTodoIndexInput= document.getElementById("deleteTodoIndexInput");
		todoList.deleteTodo(deleteTodoIndexInput.valueAsNumber);

	},

	toggleCompleted:function(){
		var toggleTodoIndexInput=document.getElementById("toggleTodoIndexInput");
		todoList.toggleCompleted(toggleTodoIndexInput.valueAsNumber);
	}
 

};


var view={
	displayTodos:function(){
		const todoUL= document.querySelector("ul");
		todoUL.innerHTML=" ";
		//start loop
		for(let i=0; i < todoList.todos.length ;i++){
			let todo=todoList.todos[i];
			let x=" ( ) ";
			if(todo.completed===true){
				x=" ( ) ";
			}//put  together completed state and the text
			let displayTodoItem = x + todo.todoText;
			console.log(displayTodoItem);
			let todoLi=document.createElement("li");
			todoLi.textContent=displayTodoItem;
			//Append the Li to your list
			todoUL.appendChild(todoLi);
		}//end loop
	}

};
view.displayTodos();




// 1. Create the element
let section = document.createElement("section");
section.setAttribute('id','my-section');
section.setAttribute('class','section');
//1.1 Some content...
let sectionContent= "";
sectionContent+="<h1>Section Title</h1>";
sectionContent+='<div id ="top">';
sectionContent+="DIV top Content...";
sectionContent+="</div>";

sectionContent+='<div id ="bottom">';
sectionContent+="DIV bottom Content...";
sectionContent+="</div>";


section.innerHTML=sectionContent;




//1.2 Put the content inside the section
//section.textContent=sectionContent;
//2.The tartget element
const mainElem = document.querySelector("main");

//3.Append child
mainElem.appendChild(section);
























/*

var displayTodosBtn = document.getElementById("displayTodosBtn");
var toggleAllBzn = document.getElementById("toggleALLBtn");

displayTodosBtn.addEventListener("click",function(){
	todoList.displayTodos();
});
toggleAllBtn.addEventListener("click",function(){
	todoList.toggleAll();
});

*/




/*
var displayTodoButton = document.getElementById('displayTodoButton');
var toggleAllButton = document.getElementById('toggleAllButton');

displayTodoButton.addEventListener('click', function () {
	todoList.displayTodos();
});

toggleAllButton.addEventListener('click', function () {
	todoList.toggleAll();
}); */
