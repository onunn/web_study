/*
const loginForm = document.querySelector('.login-form');

const loginInput = loginInput.querySelector('input');
const loginButton = loginForm.querySelector('button');

or 
*/
const loginForm = document.querySelector('.login-form');
const loginInput = document.querySelector('.login-form input');
const loginButton = document.querySelector('.login-form button');

const link = document.querySelector('a');

function onLoginSubmit(event) {
    event.preventDefault();
    const username = loginInput.value;

    console.log(username)
    
}

function handleLinkClick(event){
    event.preventDefault();
    console.dir(event);
    alert('clicked');
}
loginForm.addEventListener('submit', onLoginSubmit);
link.addEventListener('click', handleLinkClick);