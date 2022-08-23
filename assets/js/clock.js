const day = document.querySelector(".day");
const clockVer1 = document.querySelector(".clock");

function getClock() {
	const date = new Date();

	const week = new Array('월', '화', '수', '목', '금', '토', '일');

	const fullyear = date.getFullYear();
	// number => String
	const d_day = String(date.getMonth() +1).padStart(2, "0");
	const d_date = String(date.getDate() +1).padStart(2, "0");
	const todayWeek = date.getDay() -1;
	const hours = String(date.getHours()).padStart(2, "0");
	const minutes = String(date.getMinutes()).padStart(2, "0");
	const seconds = String(date.getSeconds()).padStart(2, "0");
	const am_pm = hours >= 12 ? 'PM' : 'AM';

	clockVer1.innerText = `${am_pm} ${hours}시 ${minutes}분 ${seconds}초`;
	day.innerText = `${fullyear}년 ${d_day}월 ${d_date}일 ${week[todayWeek]}요일 `;
}

// 1초의 대기가 있어서 대기가 없게 화면에 바로 표출되기 위해 호출시켜준다. (즉시호출)
getClock();
setInterval(getClock, 1000);	//그 다음 매 초 마다 getClock을 호출


