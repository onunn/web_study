const clock = document.querySelector('.clock h2');

function getClock() {
    const date = new Date();
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");

    clock.innerText = `${hours} : ${minutes} : ${seconds}`;

}

getClock()
//실행되자마자 시간을 가져온 이후 매 초마다 시간을 가져오게 하기 위해 추가
setInterval(getClock, 1000);
