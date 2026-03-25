const pause = document.getElementById('pause');
const start = document.getElementById('start');
const stop = document.getElementById('stop');
const counter = document.getElementById('counter');
let seconds = 0;
let minutes = 0;
let hours = 0;
let timerid = null;
function start_Blyat(){
    if(timerid !== null) return;
    
    timerid = setInterval(function() {
        seconds++;
        if(seconds == 60){
            seconds = 0;
            minutes++;
        }
        if( minutes == 60){
            minutes = 0;
            hours++;
        }
        update();
    }, 1000);
}
function update() {
    let formatseconds = seconds < 10 ? '0' + seconds : seconds;

    let formatminuts = minutes < 10 ? '0' + minutes : minutes;

    let formathours = hours < 10 ? '0' + hours : hours;

    counter.textContent = formathours + ':' + formatminuts + ':' + formatseconds;
}
function pause_blyat(){
    if (timerid !== 0) {
        clearInterval(timerid);
        timerid = null;
    }
}
function v_pizdy_zaebal(){
    if (timerid !== null) {
        clearInterval(timerid);
        timerid = null;
    }
    seconds = 0;
    minutes = 0;
    hours = 0;
    update();
}
pause.addEventListener('click', pause_blyat);
start.addEventListener('click', start_Blyat);
stop.addEventListener('click', v_pizdy_zaebal);
update();
