/** 
 * TODO LIST OBJECT - "specialized" in list management
 * ----------------------------------------------------
 * All methods related to list/array manipulation
 */
//#region TODO LIST
var todoList = {


	/* TODO ARRAY
	-----------------------------------*/
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
		}
	],


	/* ADD TODO
	-----------------------------------*/
	addTodo: function (todoText) {

		//Check if the input is not empty
		if(todoText === '') {
			alert("Must enter a text!");
			return false; // → STOPS THE FUNCTION HERE !
		}

		this.todos.push({
			todoText: todoText,
			completed: false
		});
		view.displayTodos();
	},


	/* CHANGE TODO
	-----------------------------------*/
	changeTodo: function (position, todoText) {

		//Check if the inputs are not empty. || operator => means "OR"
		if(!Number.isInteger(position) || todoText === '') {
			alert("When changing, you must enter an index and a text!");
			return false; // → STOPS THE FUNCTION HERE !
		}

		this.todos[position].todoText = todoText;

	},


	/* DELETE TODO
	-----------------------------------*/
	deleteTodo: function (position) {

		//Check if the input is not empty
		if(!Number.isInteger(position)) {
			alert("When deleting, you must enter an index!");
			return false; // → STOPS THE FUNCTION HERE !
		}

		this.todos.splice(position, 1);

	},


	/* TODO - Toggle Completed
	-----------------------------------*/
	toggleCompleted: function (position) {

		//Check if the input is not empty
		if(!Number.isInteger(position)) {
			alert("When deleting, you must enter an index!");
			return false; // → STOPS THE FUNCTION HERE !
		}

		let todo = this.todos[position]; // let → read it like "let completedTodos be 0"
		todo.completed = !todo.completed;

	},


	/* TODOs - Toggle All
	-----------------------------------*/
	toggleAll: function () {

		const totalTodos = this.todos.length; // → const is used when the value will NOT change
		let completedTodos = 0; // → read it "let completedTodos be 0"
		
		// Get the number of completed todos
		// Using "let": because we want the "i" variable to be AVAILABLE ONLY INSIDE the for loop block
		for (let i = 0; i < totalTodos; i++) {
			if (this.todos[i].completed === true) {
				completedTodos++;
			}
		}
		

		// If everything is true, make everything false.
		if (completedTodos === totalTodos) {
			for (let i = 0; i < totalTodos; i++) {
				this.todos[i].completed = false;
			}
			
		} 

		// Otherwise make everthing true.
		else {
			for (let i = 0; i < totalTodos; i++) {
				this.todos[i].completed = true;
			}
		}

	}


};
//#endregion


/** 
 * HANDLERS OBJECT - "specialized" in DOM events
 * ----------------------------------------------------
 * Note that you could call displayTodos() and toggleAll() bellow directly with todoList object
 * But, in programming it's adviced to use "specialized" objects and methods for a more flexible application.
 * Here, the handlers object is "specialized" in DOM event-handlers
 */
//#region HANDLERS
var handlers = {


	/* ADD TODO using the DOM
	-----------------------------------*/
	addTodo: function () {
		const x1 = document.getElementById("addTodoTextInput");
		todoList.addTodo(x1.value);
		x1.value = "";

		// THIS ARE CHANGED BY THE LAST CODES
		// const addTodoTextInput = document.getElementById('addTodoTextInput');
		// todoList.addTodo(addTodoTextInput.value);
		// addTodoTextInput.value = '';

		// view.displayTodos();
	},


	/* CHANGE TODO using the DOM
	-----------------------------------*/
	changeTodo: function () {
		const num = document.getElementById("changeTodoPositionInput");
		const text = document.getElementById("changeTodoTextInput");
		todoList.changeTodo(num.valueAsNumber, text.value);
		text.value = "";
		num.value = "";
		
		// const changeTodoPositionInput = document.getElementById('changeTodoPositionInput');
		// const changeTodoTextInput = document.getElementById('changeTodoTextInput');
		// todoList.changeTodo(changeTodoPositionInput.valueAsNumber, changeTodoTextInput.value);
		// changeTodoPositionInput.value = "";
		// changeTodoTextInput.value = '';

		view.displayTodos();
	},


	/* DELETE TODO using the DOM
	-----------------------------------*/
	deleteTodo: function () {

const del = document.getElementById("deleteTodoPositionInput");
todoList.deleteTodo(del.valueAsNumber);
del.value = "";


		// const deleteTodoPositionInput = document.getElementById('deleteTodoPositionInput');
		// todoList.deleteTodo(deleteTodoPositionInput.valueAsNumber);
		// deleteTodoPositionInput.value = '';

		view.displayTodos();
	},


	/* Toggle Completed using the DOM
	-----------------------------------*/
	toggleCompleted: function () {
		const toggleCompletedPositionInput = document.getElementById('toggleCompletedPositionInput');
		todoList.toggleCompleted(toggleCompletedPositionInput.valueAsNumber);
		toggleCompletedPositionInput.value = '';

		view.displayTodos();
	},


	/* Toggle all using the DOM
	-----------------------------------*/
	toggleAll: function () {
		todoList.toggleAll();
		view.displayTodos();
	}


};
//#endregion


/** 
 * VIEW OBJECT - "specialized" in view of the list
 * ----------------------------------------------------
 * Methods for viewing the todo list
 */
//#region VIEW
var view = {


	/* DISPLAY TODOs
	-----------------------------------*/
	displayTodos: function () {

		//Get DOM ul
		const todoUl = document.getElementById("todo-list");
		todoUl.innerHTML = "";
// TO START OUR WORK IN EMPTY SPACE NOT TO ADD FORMATION ON THE PAST

		//LOOP into todos
		for (let i = 0; i < todoList.todos.length; i++) {

			//1. Grab the todo object from the todos array
			let todo = todoList.todos[i];

			//2. Define completed string
			let x = '( ) '; //default value; you can use &nbsp;&nbsp; to put 2 spaces

			if (todo.completed === true) {
				x = '(x) ';
			}

			//3. Item text display (add the second item to my screen)
			let todoTextWithCompletion = (i+1) + '. ' + x + todo.todoText;
			// (x) item 1
			//4. Create li element (todoLi)
			let todoLi = document.createElement('li');


			
			//5. Put the text display inside li (here the second item tell us what we must to refere)
			todoLi.textContent = todoTextWithCompletion; //use .innerHTML if using &nbsp;&nbsp; above

            //  (THIS IS THE SUMMARY FOR THE LAST 3 CODES)  document.createElement('li').textContent = x + todo.todoText;
            //6. Create the button element
            const deleteBtn = document.createElement ('button');
            deleteBtn.setAttribute=('id',i)
            deleteBtn.textContent = 'X';

            todoLi.appendChild(deleteBtn);


			//6. Append li to the ul list
			todoUl.appendChild(todoLi);

		} //End Loop

	} //End displayTodos() method


};
//#endregion


/** 
 * INIT / LOAD
 * ----------------------------------------------------
 * What to run when open the page ?
 */
view.displayTodos();


// 1. creat the element
let section = document.createElement('section');
section.setAttribute('id', 'my-section');
section.setAttribute('class', 'section');
section.setAttribute('style', 'color: red');

//1.1 Some content ...
//section.textContent = sectionContent;
//section.textContent = 'my baby';

let sectionContent = '';
sectionContent += '<h1>Section title</h1>';
sectionContent += '<div id="top">';
sectionContent += 'DIV top CONTENT...';
sectionContent +=  '</div>';

sectionContent += '<div id="bottom">';
sectionContent += 'DIV bottom CONTENT...';
sectionContent +=  '</div>';

// 1.2 Put the content...(here we changed textContent by innerHTML)
section.innerHTML = sectionContent;

// 2.target the element
const mainElem = document.querySelector('main');

// 3.append child
mainElem.appendChild(section);