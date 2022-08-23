// localstorage를 두번 확인하는 것 보단 위의 코드 방법으로 한번만 사용하는 것이 괜찮
// username 저장하기 기억하기 리멤버!!
// user 정보를 두번 확인하는 방법
const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");
const modalWindow = document.querySelector(".login_modal");
const logoutBtn = document.querySelector(".logout");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(e) {
	e.preventDefault();
	loginForm.classList.add(HIDDEN_CLASSNAME);
	modalWindow.classList.add(HIDDEN_CLASSNAME);
	logoutBtn.classList.remove(HIDDEN_CLASSNAME);
	const username = loginInput.value;
	// 1. username 불러와 저장하고
	localStorage.setItem(USERNAME_KEY, username);
	paintGreetings(username);	//2. 호출하고
}

// 똑같이 반복되어 username 함수 생성
function paintGreetings(username) {
	// paintGreetings(인자)두번 불러올(내보낼) 필요 없이 paintGreetings 내에 변수를 하나 만들어준다.
	// 3. 호출하자마자 user를 찾는다.
	// const username = localStorage.getItem(USERNAME_KEY);	//요기도 getItem
	greeting.innerText = (username);
	greeting.classList.remove(HIDDEN_CLASSNAME);
	// loginForm.classList.add(HIDDEN_CLASSNAME);	//input창에 username 입력 후 input창이 사라지고 h1이 보여지게 class에 hidden을 추가
}

function userLogout() {
	logoutBtn.classList.add(HIDDEN_CLASSNAME);
	localStorage.clear();
	// 페이지 새로고침
	window.location.reload();
}

// 요기도 getItem으로 한번 더 찾는다.
const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
	logoutBtn.classList.add(HIDDEN_CLASSNAME);
	loginForm.classList.remove(HIDDEN_CLASSNAME);
	loginForm.addEventListener("submit", onLoginSubmit);
} else {
	modalWindow.classList.add(HIDDEN_CLASSNAME);
	logoutBtn.addEventListener("click", userLogout);
	paintGreetings(savedUsername);
}
