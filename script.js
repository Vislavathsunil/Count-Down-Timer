let timer = document.querySelector(".timer");

// Buttons

let start = document.getElementById("startBtn");
let stop = document.getElementById("stopBtn");
let reset = document.getElementById("resetBtn");

// Timer




let inputH = parseInt(prompt("Enter hours : "), 10) || 0;
let inputM = parseInt(prompt("Enter minutes :"), 10) || 0;
inputH = inputH < 10 ? `0${inputH}` : inputH;
inputM = inputM < 10 ? `0${inputM}` : inputM;


let totalsecs = 0;
if (inputH <= 0) {
    totalsecs = inputM * 60;
    console.log(totalsecs);
} else {
    totalsecs = (inputH * 3600) + (inputM * 60);
    console.log(totalsecs);
}



let intervalId = null;

start.addEventListener("click", () => {
    intervalId = setInterval(countDown, 1000);
});

stop.addEventListener("click", () => {
    clearInterval(intervalId);
    intervalId = null;
})

reset.addEventListener("click", () => {
    clearInterval(intervalId);
    intervalId = null;
    totalsecs = 0;
    timer.innerHTML = `00 : 00 : 00`;
})

function countDown() {

    if (totalsecs <= 0) {
        clearInterval(intervalId);
        intervalId = null;
        return;
    }

    let h = Math.floor(totalsecs / 3600);
    let m = Math.floor((totalsecs % 3600) / 60);
    let s = totalsecs % 60;

    h = h < 10 ? `0${h}` : h;
    m = m < 10 ? `0${m}` : m;
    s = s < 10 ? `0${s}` : s;

    timer.innerHTML = `${h} : ${m} : ${s}`;

    totalsecs--;

}

