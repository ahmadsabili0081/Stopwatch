let container = document.querySelector('.container');
let app = document.createElement('div');
app.setAttribute('class','containerStopwatch');
container.appendChild(app);
let divTimer = document.createElement('div');
divTimer.setAttribute('id','divTimer');
app.appendChild(divTimer)
let h2 = document.createElement('h2')
h2.innerHTML = "Current time"
divTimer.innerHTML = "00 : 00 : 00";
divTimer.appendChild(h2)
// container__button
let containerBtn = document.createElement('div');
containerBtn.setAttribute('class', 'container__btn');
app.appendChild(containerBtn)
let buttonStart = document.createElement('button')
buttonStart.setAttribute('id', 'btnStart');
buttonStart.innerHTML = "Start"
let buttonStop = document.createElement('button');
buttonStop.setAttribute('id','btnStop');
buttonStop.innerHTML= "Stop"
let buttonReset = document.createElement('button');
buttonReset.innerHTML = "Reset"
buttonReset.setAttribute('id', 'btnReset');
containerBtn.appendChild(buttonStart)
containerBtn.appendChild(buttonStop)
containerBtn.appendChild(buttonReset)

// manipulation data
let buttonStartClick = document.querySelector('#btnStart')
let buttonStoptClick = document.querySelector('#btnStop');
let buttonResetClick = document.querySelector('#btnReset');
let divTimerClick = document.querySelector('#divTimer');

let timerTicker = (() => {
    let hours = minutes = seconds = 0;
    let timerTick;
    return{
        start : () => {
            if(!timerTick){
                timerTick = setInterval(() => {
                    seconds++;
                    if(seconds == 99){
                        minutes += 1;
                        seconds = 0;
                        if(minutes == 60){
                            hours += 1;
                            minutes = 0;
                        }
                    }
                    divTimerClick.innerHTML = `<br>
                    ${hours.toString().length == 1 ? "0" + hours : hours} 
                    :${minutes.toString().length == 1 ? "0" + minutes : minutes}
                    :${seconds.toString().length == 1 ? "0" + seconds : seconds}
                    `
                }, 25);
            }
        },
        stop : () => {
            if(timerTick){
                clearInterval(timerTick);
                timerTick = false;
            }
        },
        reset: () => {
            seconds = minutes = hours = 0;
            clearInterval(timerTick)
            timerTick = false;
            divTimerClick.innerHTML = `0 ${hours} : 0${minutes} : 0${seconds}`;
        } 
    }

})();


buttonStartClick.addEventListener('click',() => {
    timerTicker.start();
});
buttonResetClick.addEventListener('click', () => {
    timerTicker.reset();
})
buttonStoptClick.addEventListener('click',() => {
    timerTicker.stop();
});
