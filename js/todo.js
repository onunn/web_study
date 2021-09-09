const toDoForm = document.querySelector('.todo-form');
const toDoInput = toDoForm.querySelector('input');
const toDoList = document.querySelector('.todo-list');

const toDos = [];


function handleToDoSubmit(event){
    event.preventDefault();
    
    const newToDo = toDoInput.value;
    toDoInput.value = '';

    toDos.push(newToDo);
    paintToDo(newToDo);    
    saveToDOs();

}

function deleteToDo(event){
    const li = event.target.parentElement;
    li.remove();
}

function saveToDOs(){
    localStorage.setItem("toDos", JSON.stringify(toDos));

}

function paintToDo(newToDo){
    const li = document.createElement('li');
    const span = document.createElement('span');
    
    span.innerText = newToDo;

    const button = document.createElement('button');

    button.innerText = '❌';
    button.addEventListener('click', deleteToDo);

    li.appendChild(span);
    li.appendChild(button);
    toDoList.appendChild(li);
}



toDoForm.addEventListener('submit', handleToDoSubmit);

