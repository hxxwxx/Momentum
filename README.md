# Momentum

Click [here](https://hxxwxx.github.io/Momentum/)

노마드코더의 '바닐라JS로 크롬 웹 만들기'강의를 수강한 걸 바탕으로 웹사이트를 만들었습니다. 제가 좋아하는 영화인 '리틀 포레스트'를 테마로 했습니다. 강의를 수강하면서 JS로 로그인, 시계, 새로고침 할 때마다 명언을 랜덤을 보여주는 기능, 새로고침 할 때마다 배경화면을 랜덤으로 보여주는 기능, 사용자 위치에 따라 날씨와 지역을 보여주는 기능, todolist 기능을 구현했습니다. 강의 내용 외에는 **CSS를 사용해 화면에 있는 요소들을 배치하고, 버튼을 클릭하면 todolist를 숨기고 보여주는 기능, todolist의 배경색과 글꼴색을 바꿀 수 있는 기능**을 구현했습니다. 



### 실제 화면
---


![todolist 초기 화면](https://github.com/hxxwxx/Momentum/assets/90953888/cb6a73d9-465d-4766-9fc4-03c6f804d7dc)
사용자가 초기에 보게 될 화면입니다. 


![todolist 로그인 화면](https://github.com/hxxwxx/Momentum/assets/90953888/bcf3c889-ce0d-4058-8307-95484495e62b)
이름을 입력하면 인삿말을 볼 수 있습니다. localStorage에 이름이 저장되어 있기 때문에 새로고침을 해도, 재접속을 해도 인삿말을 볼 수 있습니다. 


![todolist보여주기](https://github.com/hxxwxx/Momentum/assets/90953888/0054a052-68a9-47fe-b7a4-14c37e132b9b)
todolist 화면입니다. 


![todolist 작성학](https://github.com/hxxwxx/Momentum/assets/90953888/89b78197-a1cf-4834-bab0-737c7d60201a)

todolist를 작성하고, todolist의 배경색과 글꼴색을 바꾸는 기능을 구현했습니다.

---
### 이번 활동을 통해 배운 점
#### **굵은 글씨는 해당 강의 내용 외에 보충한 부분입니다.**

* 로그인
* clock
* 새로고침 할 때마다 배경화면을 랜덤으로 보여주는 기능
* 새로고침 할 때마다 명언 랜덤으로 보여주는 기능
* 사용자 위치에 따라 날씨와 지역을 반영하는 기능 
* **gird**
* **flexbox**
* **anmimation**
* **todolist를 보여주고 숨기는 기능**
* **color picker**
---
### 작성한 코드

#### css
```css
 #container {
    height: 100vh;
    z-index: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;  
} 
```
flexbox 속성을 이용해 구성 요소들을 배치했습니다.

```css
#top{
    grid-area:b;
    z-index: 3;
    display: flex;
    background-color: #fff;
}

#top.clicked{
      display: grid;
      grid-template-columns:minmax(300px,1.5fr) 8fr;
      grid-template-areas: 'a b b b b';
}
```
기본적으로 flexbox를 이용해 구성요소를 배치했지만 todolist를 보여줄 때는 gird 속성을 이용합니다.

```css
.double_arrow {
    position: relative;
    z-index: 3;
    height: 30px;
    animation:linear 0s backwards rotate;
}

.double_arrow.clicked {
    animation:linear 1s forwards rotate;    
}


@keyframes rotate {
    from {
        transform: rotateY(0deg);
    }

    to {
        transform: rotateY(180deg);
    }
}
```
todolist의 유무에 따라 화살표의 방향이 바뀌는 애니메이션을 만들었습니다. 

#### js
```HTML
  <div class="change">
    <div class="font_color hidden">
      <label for="color-picker1">font Color:</label>
      <input type="color" class="picker" value="#000000" id="color-picker1" />
    </div>
    <div class="background_color hidden">
      <label for="color-picker2">background Color:</label>
      <input type="color" class="picker" value="#ffffff" id="color-picker2" />
    </div>
  </div>
```
input 요소로 color를 입력받을 수 있어서 이 기능을 활용해 todolist의 font color와 backgroudColor를 바꾸는 기능을 구현했습니다. 

```js
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

```
localStorage에 color를 저장했기 때문에 새로고침을 해도, 재접속을 해도 color는 그대로입니다. 

```js
function onClicktodoArrow(){
    todo.classList.toggle(HIDDEN_CLASS);    
    todoIcon.classList.toggle(CLICKED_CLASS);
    topBox.classList.toggle(CLICKED_CLASS);
    box1.classList.toggle(CLICKED_CLASS);
    box2.classList.toggle(CLICKED_CLASS);
}

todoIcon.addEventListener("click",onClicktodoArrow);

```
화살표 아이콘을 클릭하면 메모장을 보여주는 기능을 toggle method를 이용해서 구현했습니다.

---
### 느낀 점
다른 사람들이 진행한 프로젝트를 보고 나도 저렇게 멋지게 만들어야지 라는 생각을 했지만 쉽지 않았습니다. html 요소들을 배치하는 것도 저에게 많이 버거웠습니다. 다른 사람들이 이 강의를 수강하고 만든 것을 비교해봤는데 너무 초라해보여 자괴감이 들었습니다. 그래도 이번 활동을 통해 mdn 문서를 읽고 내가 원하는 것을 구현하는 방식이 익숙해졌습니다. mdn 문서는 기본적으로 영어라 머리 아프다고 생각했는데 읽다보니 고등 교육을 마친 대한민국 사람이 꼼꼼하게 읽으면 이해할 수 있는 정도입니다. 옛날에는 원하는 기능을 구현하기 위해 구글에다 검색했는데 이제는 mdn 사이트에서 관련된 요소들에 대한 문서를 읽고 있습니다. mdn 사이트에서 공부하면 좋은 점은 왜? 라는 의문이 들 수 있는 부분에 대해서 설명을 해줍니다. 예를 들어, 'setTimeout()으로 함수를 호출할 때 딜레이를 0으로 하면 브라우저가 로드 되자마자 실행되어야 하는 거 아닌가?' 라고 생각했지만 실제로는 그렇지 않습니다. setTimeout()으로 함수를 호출한다는 것은 지정한 함수를 대기열에 넣고 가능한 바로 다음 기회에 실행하라는 의미지 즉시 호출하라는 것은 아닙니다. 대기열의 함수를 실행하려면 현재 실행 중인 코드가 반드시 먼저 완료돼야 하므로, 실제 실행 결과는 예상하던 것과 다를 수 있습니다. 이렇게 의문을 가지고 있는 부분을 잘 설명해줍니다. 앞으로도 최대한 공식 문서를 활용해 공부할 것입니다.

---
### 개선할 점
* 전체적인 디자인 : 이미지를 큰 화면으로 보니까 픽셀이 깨져서 디자인을 바꾸고 새로운 버전으로 만들겠습니다.
* 미디어 쿼리: 미디어 쿼리를 활용해서 반응형으로 만들겠습니다.
* todolist 코드 단순화: 코드들이 너무 복잡하고 변수도 많아서 최대한 단순화 해야겠습니다.  
