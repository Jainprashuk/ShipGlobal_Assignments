// Initial todo data
const todos = {
    backlog: ['Task 1', 'Task 2', 'Task 3' , 'Task 4' ,'Task 5', 'Task 6'],
    todo: [],
    ongoing: [],
    done: []
};

// Function to render the todo items in each card
function renderTodos() {
    document.getElementById('backlog-list').innerHTML = todos.backlog.map((todo, index) => `
        <li data-index="${index}">
            ${todo}
            <div class="task-buttons">
                <button class="task-btn" disabled><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-left-short" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M12 8a.5.5 0 0 1-.5.5H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5a.5.5 0 0 1 .5.5"/>
</svg></button>
                <button class="task-btn" onclick="moveTodo('backlog', 'todo', ${index})"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right-short" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8"/>
</svg></button>
            </div>
        </li>
    `).join('');

    document.getElementById('todo-list').innerHTML = todos.todo.map((todo, index) => `
        <li data-index="${index}">
            ${todo}
            <div class="task-buttons">
                <button class="task-btn" onclick="moveTodo('todo', 'backlog', ${index})"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-left-short" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M12 8a.5.5 0 0 1-.5.5H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5a.5.5 0 0 1 .5.5"/>
</svg></button>
                <button class="task-btn" onclick="moveTodo('todo', 'ongoing', ${index})"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right-short" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8"/>
</svg></button>
            </div>
        </li>
    `).join('');

    document.getElementById('ongoing-list').innerHTML = todos.ongoing.map((todo, index) => `
        <li data-index="${index}">
            ${todo}
            <div class="task-buttons">
                <button class="task-btn" onclick="moveTodo('ongoing', 'todo', ${index})"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-left-short" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M12 8a.5.5 0 0 1-.5.5H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5a.5.5 0 0 1 .5.5"/>
</svg></button>
                <button class="task-btn" onclick="moveTodo('ongoing', 'done', ${index})"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right-short" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8"/>
</svg></button>
            </div>
        </li>
    `).join('');

    document.getElementById('done-list').innerHTML = todos.done.map((todo, index) => `
        <li data-index="${index}">
            ${todo}
            <div class="task-buttons">
                <button class="task-btn" onclick="moveTodo('done', 'ongoing', ${index})"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-left-short" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M12 8a.5.5 0 0 1-.5.5H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5a.5.5 0 0 1 .5.5"/>
</svg></button>
                <button class="task-btn" disabled><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right-short" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8"/>
</svg></button>
            </div>
        </li>
    `).join('');
}

// Function to add a new task to a specific list
function addTask(listId) {
    const input = document.getElementById(`${listId}-input`);
    const task = input.value.trim();
    if (task) {
        todos[listId].push(task);
        input.value = ''; // Clear input field
        renderTodos(); // Re-render todo lists
    }
}

// Function to move a task from one list to another
function moveTodo(fromList, toList, index) {
    const task = todos[fromList].splice(index, 1)[0];
    todos[toList].push(task);
    renderTodos(); // Re-render todo lists
}

// Initial render
renderTodos();
