const todoList = [
	{
		name: 'List 1',
		dueDate: '2024-30-4',
	},

	{
		name: 'List 2',
		dueDate: '2024-30-4',
	},
];

renderTodoList();

function renderTodoList() {
	let renderHtmlCode = '';

	todoList.forEach((todolist, index) => {
		const { name, dueDate } = todolist;

		const html = `
    
    <p>${name}</p>
    <p>${dueDate}</p>
    <button class="deleteBtn delete">Delete</button>
    
    `;

		renderHtmlCode += html;
	});

	document.querySelector('.js-todo-list').innerHTML = renderHtmlCode;

	document.querySelectorAll('.delete').forEach((deleteBtn, index) => {
		deleteBtn.addEventListener('click', () => {
			todoList.splice(index, 1);
			renderTodoList();
		});
	});
}

document.querySelector('.todoAddBtn').addEventListener('click', () => {
	addTodo();
});

function addTodo() {
	var selectInput = document.querySelector('.addTodDoListInput');

	var name = selectInput.value;

	var dateInput = document.querySelector('.dateInput');
	var dueDate = dateInput.value;

	todoList.push({
		name,
		dueDate,
	});

	console.log(todoList);

	selectInput.value = '';

	dateInput.value = '';
	renderTodoList();
}
