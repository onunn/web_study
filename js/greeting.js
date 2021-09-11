/*
const loginForm = document.querySelector('.login-form');

const loginInput = loginInput.querySelector('input');
const loginButton = loginForm.querySelector('button');

or 
*/
const loginForm = document.querySelector('.login-form');
const loginInput = document.querySelector('.login-form input');
const loginButton = document.querySelector('.login-form button');
const greeting = document.querySelector('.greeting');

const link = document.querySelector('a');

const HIDDEN_CLASSNAME = 'hidden';
const USERNAME_KEY =    'username';

function onLoginSubmit(event) {
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const username = loginInput.value;

    localStorage.setItem(USERNAME_KEY, username);

    //greeting.innerText = 'Hello ' + username;
    paintGreetings(username)
}


loginForm.addEventListener('submit', onLoginSubmit);

function paintGreetings(username){
    //const username = localStorage.getItem(USERNAME_KEY)
    greeting.innerText = `Hello ${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if(savedUsername === null){
    loginForm.classList.remove(HIDDEN_CLASSNAME);
} else {
    paintGreetings(savedUsername);
}