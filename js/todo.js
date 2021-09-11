const toDoForm = document.querySelector('.todo-form');
const toDoInput = toDoForm.querySelector('input');
const toDoList = document.querySelector('.todo-list');

const TODOS_KEY = 'toDos'
let toDos = [];


function handleToDoSubmit(event){
    event.preventDefault();
    
    const newToDo = toDoInput.value;
    toDoInput.value = '';

    const newToDoObj = {
        text: newToDo,
        id: Date.now(),
    }
    toDos.push(newToDoObj);
    paintToDo(newToDoObj);    
    saveToDos();

}

function deleteToDo(event){
    const li = event.target.parentElement;

    li.remove();

    toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
    saveToDos();
}

function saveToDos(){
    localStorage.setItem("TODOS_KEY", JSON.stringify(toDos));

}

function paintToDo(newToDoObj){
    const li = document.createElement('li');
    const span = document.createElement('span');
    li.id = newToDoObj.id;

    span.innerText = newToDoObj.text;

    const button = document.createElement('button');

    button.innerText = '❌';
    button.addEventListener('click', deleteToDo);

    li.appendChild(span);
    li.appendChild(button);
    toDoList.appendChild(li);
}

function handleToDos(item){
    paintToDo(item);
}

toDoForm.addEventListener('submit', handleToDoSubmit);

const savedToDos = localStorage.getItem('TODOS_KEY');

if(savedToDos){
    const parsedToDos = JSON.parse(savedToDos);

    //parsedToDos.forEach((item) => console.log(item));
    parsedToDos.forEach((item) => paintToDo(item));
} 