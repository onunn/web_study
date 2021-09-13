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
    const checkBox = document.createElement('input');
    const span = document.createElement('span');

    li.id = newToDoObj.id;
    checkBox.type = 'checkbox';
    checkBox.addEventListener('change', handleCheckBox);

    span.innerText = newToDoObj.text;

    const button = document.createElement('button');

    button.innerText = '❌';
    button.addEventListener('click', deleteToDo);

    li.appendChild(span);
    li.appendChild(checkBox)
    li.appendChild(button);

    toDoList.appendChild(li);
    console.dir(checkBox);
}

function handleToDos(item){
    paintToDo(item);
}

function handleCheckBox(event){
    const li = event.target.parentElement;
    const span = li.querySelector('span');

    span.classList.toggle('changed-span');
}

toDoForm.addEventListener('submit', handleToDoSubmit);



const savedToDos = localStorage.getItem('TODOS_KEY');

if(savedToDos){
    const parsedToDos = JSON.parse(savedToDos);

    //parsedToDos.forEach((item) => console.log(item));
    parsedToDos.forEach((item) => paintToDo(item));
} 