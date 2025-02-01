let watch = document.querySelector(".watchs"); 
let stop1 = document.getElementById("stops");
let start = document.getElementById("starts");
let reset = document.getElementById("resets");

let msec = 0;
let sec = 0;
let min = 0;

let timer = null;

start.addEventListener("click", function() {
    if (timer !== null) {
        clearInterval(timer);
    }
    timer = setInterval(startTimer, 1);
});

stop1.addEventListener("click", function() {
    clearInterval(timer);
});

reset.addEventListener("click", function() {
    clearInterval(timer);
    watchs.innerHTML = "00:00:00";
    msec = 0;  
    sec = 0;   
    min = 0;   
});

function startTimer() {
    msec++;
    if (msec === 100) {
        msec = 0;
        sec++;
        if (sec === 60) {
            sec = 0;
            min++;
        }
    }

    let msecString = msec < 10 ? `0${msec}` : msec;
    let secString = sec < 10 ? `0${sec}` : sec; 
    let minString = min < 10 ? `0${min}` : min; 

    watchs.innerHTML = `${minString}:${secString}:${msecString}`; 
}