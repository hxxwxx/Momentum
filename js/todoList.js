// 메모장을 보여주기
const containerBox = document.querySelector("#container"); // 전체 화면을 담는 컨테이너
const topBox = document.querySelector("#top"); // 그 중에서도 Todo와 weather를 보여주는 박스
const box1 = document.querySelector(".box1"); // 기본은 hidden. clicked 클래스가 들어가면 todoBox만큼 크기가 커짐.
const box2 = document.querySelector(".box2"); // 기본은 화면 전체를 다 차지한다. 
const todoTag =document.querySelector("#todo_tag"); // Todo 아이콘
const todoIcon = todoTag.querySelector(".material-symbols-outlined"); // Todo를 보여줬다 숨겼다 하는 아이콘 

// 메모장 내부
const todo = document.querySelector("#todo"); 
const todoForm = document.getElementById("input-form");
const todoInput = todoForm.querySelector("#input-form input");
const todoList = document.getElementById("to-do-list");

// Color Picker 관련 변수
const MoreHoriz = document.querySelector(".more_horiz");
const fontColor =document.querySelector(".font_color");
const backgroundColor =document.querySelector(".background_color");

// 자주 사용하는 클래스 
const HIDDEN_CLASS="hidden";
const CLICKED_CLASS="clicked";

// Color Picker를 보여주는 함수
function showColorPicker(){
    fontColor.classList.toggle(HIDDEN_CLASS);
    backgroundColor.classList.toggle(HIDDEN_CLASS);
    fontColor.classList.toggle(CLICKED_CLASS);
    backgroundColor.classList.toggle(CLICKED_CLASS);
}

MoreHoriz.addEventListener("click",showColorPicker);


let colorPicker1; // fontColor
const defaultFontColor="#000000";
let colorPicker2; // backgroundColor
const defaultBackgroundColor ="#ffffff";
const FONTCOLOR_KEY="FontColor";
const BACKGROUND_KEY="BackgroundColor";

// Color change 함수 
function changeColor(){

    colorPicker1=document.querySelector("#color-picker1");
    colorPicker2=document.querySelector("#color-picker2");

    colorPicker1.value=defaultFontColor;
    colorPicker2.value=defaultBackgroundColor;

    colorPicker1.addEventListener("input",updateFirst1,false);
    colorPicker2.addEventListener("input",updateFirst2,false);

    colorPicker1.select();
    colorPicker2.select();
}

function updateFirst1(event){  
    let newFontColor=event.target.value;
    todo.style.color=newFontColor;
    localStorage.setItem("FontColor",newFontColor);
}

function updateFirst2(event){   
    let newBackgroundColor= event.target.value;
    todo.style.backgroundColor=newBackgroundColor;
    localStorage.setItem("BackgroundColor",newBackgroundColor);
}

window.addEventListener("load",changeColor,false);

const savedFontColor = localStorage.getItem(FONTCOLOR_KEY);
if(savedFontColor !== null){
    todo.style.color=savedFontColor;
}

const savedBackgroundColor = localStorage.getItem(BACKGROUND_KEY);
if(savedBackgroundColor !== null){
    todo.style.backgroundColor=savedBackgroundColor;
}

// 메모장을 보여주는 함수
function onClicktodoArrow(){
    todo.classList.toggle(HIDDEN_CLASS);    
    todoIcon.classList.toggle(CLICKED_CLASS);
    topBox.classList.toggle(CLICKED_CLASS);
    box1.classList.toggle(CLICKED_CLASS);
    box2.classList.toggle(CLICKED_CLASS);
}

todoIcon.addEventListener("click",onClicktodoArrow);

// 오늘 할 일
let todos = [];
const TODOS_KEY = "todos"
function saveTodo() {
    localStorage.setItem(TODOS_KEY,JSON.stringify(todos));
}

function deleteTodo(event){
    const li = event.target.parentElement;
    li.remove();
    todos = todos.filter((todo)=> todo.id !== parseInt(li.id))
    saveTodo();
}

// 메모장에 사용할 아이콘 
const icons =["🍃", "🍂", "🍁", "🍀", "🌿", "🌾", "🌵", "🌴", "🌳", "🌲", "🌱", "🥀", "🌷", "🌼", "🌻", "🌺", "🌹", "🌸", "💐", "🥜", "🌰", "🥕", "🧅", "🧄", "🥔", "🥦", "🥬", "🥒", "🥑", "🍄", "🌽", "🍆", "🍅", "🍓", "🍒", "🍑", "🍐", "🍏", "🍎", "🥭", "🍍", "🍌", "🍋", "🍊", "🍉", "🍈", "🍇", "🥝", "🥥", "🧊"];
function paintTodo(newTodoObj){
    const li = document.createElement("li");    // li 태그를 생성
    li.id=newTodoObj.id;                        // li 태그의 id 저장 

    const span1 = document.createElement("span"); // todo를 저장할 span 태그 생성 
    span1.innerText=newTodoObj.text;

    const button = document.createElement("button"); // li를 삭제할 button 태그 생성
    button.addEventListener("click",deleteTodo);     // 버튼 태그에 이벤트 추가
    button.innerText="❌";

    const span2 = document.createElement("span");    // 아이콘을 저장할 span 태그 생성
    const icon = icons[Math.floor(Math.random()*icons.length)];  
    span2.innerText=icon; // span 태그에 아이콘 추가

    li.appendChild(span2);
    li.appendChild(span1);
    li.appendChild(button);
    todoList.appendChild(li);
} 

function submitEvent(event){
    event.preventDefault();
    const newTodo = todoInput.value;
    const newTodoObj = {
        text:newTodo,
        id:Date.now(),
    }
    todoInput.value="";
    todos.push(newTodoObj);
    paintTodo(newTodoObj);
    saveTodo();
}

todoForm.addEventListener("submit", submitEvent);

const savedTodo = localStorage.getItem(TODOS_KEY); 
if (savedTodo !== null){
    const parsedTodo = JSON.parse(savedTodo);
    todos = parsedTodo;
    todos.forEach(paintTodo); 
}


