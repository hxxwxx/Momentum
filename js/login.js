// input 창에 이름을 입력해. (반드시 입력해야 하고, 15자를 초과할 수 없다.)
    // form은 submit 될 때마다 새로고침이 된다. 이거를 없애줘야 한다. 
// 환영 인사를 보여줘.
// 새로 고침을 해도 내가 입력한 이름을 그대로 보여줘. (그러면 입력폼은 없어지는 것이 맞지!)

const loginForm=document.querySelector("#Login-input"); // 입력한 값의 value를 얻기 위해 필요하다. 
const loginInput=document.querySelector("#Login-input input")
const greeting =document.querySelector("h1");

const HIDDEN = "hidden";
const USERNAME_KEY="USERNAME"
function onInputSubmit(event){
    event.preventDefault();
    const username = loginInput.value;
    loginForm.classList.add(HIDDEN);
    printGreeting(username);
    localStorage.setItem(USERNAME_KEY,username);
}

function printGreeting(name){
    greeting.classList.remove(HIDDEN);
    greeting.innerText=`Hello, ${name}`;
}

const storedUsername = localStorage.getItem(USERNAME_KEY);
if (storedUsername === null) {
    loginForm.classList.remove(HIDDEN);
    loginForm.addEventListener("submit",onInputSubmit); // 맞다. addEventListener를 사용하는 거였지. 
} else {
   printGreeting(storedUsername);
} 