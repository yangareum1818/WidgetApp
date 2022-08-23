const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");

// setItem, getItem에 todos를 반복해서 사용하여 키를 만들어준다.
const TODOS_KEY = "todos"

// 4. array를 만들어주고 paintToDo의 newToDo가 그려질 때 마다 그 텍스트를 array에 push 해준다.
let toDos = [];
// 새로고침 하면 사라지기 때문에, list를 저장할 수 있는 컴포넌트를 만들어준다.
// 오직 toDos array를 localStorage에 넣는다.
function saveToDo () {
	// object, array 등.. 어떤 것이든 string으로 바꿔주는 기능
	// JSON.stringify();
	localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

// 3. list를 삭제 할 수 있는 컴포넌트를 만들어준다.
function deleteToDo (e) {
	// console.log(e.target.parentElement.innerText);
	// parentElement는 대상의 부모를 말한다. button의 부모는 li 전체를 remove시켜준다.
	const li = e.target.parentElement;
	// console.log(typeof li.id);
	// 8. 삭제버튼을 클릭한 li.id와 다른 toDo는 담겨둔다.
	// id의 타입은 string문자열이기 때문에 숫자열로 바꿔줘야 하기 떄문에 parseInt를 사용해준다. (변수의 타입이 다르다.)
	toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
	li.remove();
	// 9. 추가, 저장과 동일하게 삭제했을 경우에도 한번 더 불러와줘야 한다 !
	saveToDo();
};

// 2. 이 function은 ToDo를 그리는 역할 담당
// 일단 무엇을 그릴지 모른다. newToDo라는 인자를 준다. (이것은 text가 된다.)
// handleToDoSubmit에 paintToDo를 호출해준다.
// 그러므로 결국 paintToDo는 li를 만들어준다.
function paintToDo(newToDo) {
	const li = document.createElement("li");
	li.id = newToDo.id;
	const span = document.createElement("span");
	const button = document.createElement("button");

	// handleToDoSubmit에서 온 newToDo가 된다.
	// 7-2. obj로 뜨는 것을 방지하기 위해 뒤에 .text를 넣어준다.
	span.innerText = newToDo.text;
	button.innerText = "✘";
	button.addEventListener("click", deleteToDo);

	// appendChild는 맨 마지막에 놓여져야한다.
	li.appendChild(span);
	li.appendChild(button);

	// 그러고 마지막에 전체적으로 li를 toDoList에 추가한다.
	toDoList.appendChild(li);
}

// 1. 모든 것을 핸들링 할 수 있는 컴포넌트.
function handleToDoSubmit(e) {
	e.preventDefault();
	//  input의 현재 value를 새로운 변수에 복사한다.
	const newToDo = toDoInput.value;
	toDoInput.value = "";
	// 7. 삭제기능을 위해 text가 아닌 obj를 push해준다.
	const newToDoObj = {
		text: newToDo,
		id: Date.now(),
	};
	// (paintToDo에 newToDo를 그리기전에) array에 newToDo의 text들을 push해준다.
	// toDos.push(newToDo);
	// obj push !
	toDos.push(newToDoObj);
	// 7-1. paintToDo도 동일하게 obj로 넣어준다.
	// paintToDo(newToDo);
	paintToDo(newToDoObj);
	saveToDo();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

// 5-2. forEach문으로 새로운 function을 실행해주기위해 function을 만든다.
// function sayHello(item) {
// 	console.log("this is the turn of", item);
// }

// 5-1. greeting과 비슷하게 화면에 뿌려줄 때는 addEventListener 이후에 !
// savedToDos를 얻는다.
const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos !== null) {
	// arrary(배열)로 만들어놓은 value값으로 function을 실행하게 해준다. foreach로.
	const parsedToDos = JSON.parse(savedToDos);
	// sayHello에 argument인 item을 넘겨준다. (input에 작성한 value값)
	// 하지만, forEach에 sayHello는 필요치 않다. (console은 불필요하다)
	// parsedToDos.forEach(sayHello);

	// 6. 덮어씌어지는 문제를 해결하기 위해 전에 있는 todo들을 복원해준다.
	// (toDos를 수정하기 위해 위의 const준 것을 let으로 변경해 준다.)
	toDos = parsedToDos;

	// 그러므로 이미 화면에 표출되어 만들어 놓은 paintToDo를 인자로 넣어준다.
	parsedToDos.forEach(paintToDo);

	// * sayHello function을 사용하지 않고 이 방법으로도 사용가능 !
	// parsedToDos.forEach((item) => {
	// 	console.log("this is the turn of", item);
	// });
	// 5-2 와 같은 방법이지만, paintToDo가 텍스트를 받아오기 때문에 paintToDo를 인자로 넣어주고! 두 가지의 방법은 알고 인지만 하고 있으면 된다.
}