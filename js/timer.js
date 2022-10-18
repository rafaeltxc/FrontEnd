//Timer
const numbers = document.querySelectorAll('[data-number]');
const deletion = document.getElementById('delete');
const begin = document.getElementById('play');
const error = document.getElementById('errorMessage');
const second = document.getElementById('timer_second');
const minute = document.getElementById('timer_minute');
const hour = document.getElementById('timer_hour');

numbers.forEach(button => {
    button.addEventListener('click', () => {
        if(second.value.length < 2) {
            second.value += button.innerText
        } else if(minute.value.length < 2) {
            minute.value += second.value.slice(0, second.value.length - 1);
            second.value = second.value.slice(second.value.length - 1, second.value.length);
            second.value += button.innerText;
        } else if(hour.value.length < 2) {
            hour.value += minute.value.slice(0, minute.value.length - 1);
            minute.value = minute.value.slice(minute.value.length - 1, minute.value.length);
            minute.value += second.value.slice(0, second.value.length - 1);
            second.value = second.value.slice(second.value.length - 1, second.value.length);
            second.value += button.innerText;
        } else {
            setTimeout(() => {
                error.innerHTML = "";
            }, 1500);
            error.innerHTML = "Can't insert more numbers";
        }
    })
})

function deleteLast(string) {
    if(string.length > 1) {
        return string.slice(string.length - 1, string.length);
    } else {
        return string.slice(0, string.length - 1);
    }
}

deletion.addEventListener('click', () => {
    if(hour.value.length > 0) {
        hour.value = deleteLast(hour.value);
    } else if (minute.value.length > 0) {
        minute.value = deleteLast(minute.value);
    } else {
        second.value = deleteLast(second.value);
    }
})

begin.addEventListener('click', () => {
    const interval = setInterval(() => {
        if(second.value > 0) {
            second.value -= 1;
        } else if(second.value == 0 && minute.value > 0) {
            second.value = 59;
            minute.value -= 1;
        } else if(hour.value > 0) {
            minute.value = 60;
            hour.value -= 1;
        } else {
            second.value = '';
            minute.value = '';
            hour.value = '';
            clearInterval(interval);
        }
    }, 1000);
    
})

//Stopwatch
const play = document.getElementById('play-stopwatch');
const refresh = document.getElementById('refresh');
const clock = document.getElementById('clock');
const imgPlay = document.getElementById('img-play-stopwatch');
const imgRefresh = document.getElementById('img-refresh');
const imgClock = document.getElementById('img-clock');
const history = document.getElementById('history');

const stopMilli = document.getElementById('stop_milli');
const stopSecond = document.getElementById('stop_second');
const stopMinute = document.getElementById('stop_minute');
const stopHour = document.getElementById('stop_hour');

play.addEventListener('click', () => {
    refresh.className = 'refresh-show';
    clock.className = 'clock-show';
    play.className = 'play-stopwatch-hide';
    imgRefresh.className = 'img-refresh';
    imgClock.className ='img-clock';
    imgPlay.className = 'img-play-stopwatch-hide';

    stopHour.innerText = 0;
    stopMinute.innerText = 0;
    stopSecond.innerText = 0;
    stopMilli.innerText = 0;

    const stopwatch = setInterval(() => {
        stopMilli.innerText = parseInt(stopMilli.innerText) + 1;
        if(stopMilli.innerText == 100) {
            stopMilli.innerText = 0;
            stopSecond.innerText = parseInt(stopSecond.innerText) + 1;
        } else if(stopSecond.innerText == 60) {
            stopSecond.innerText = 0;
            stopMinute.innerText = parseInt(stopMinute.innerText) + 1;
        } else if(stopMinute.innerText == 60) {
            stopMinute.innerText = 0;
            stopMinute.innerText = parseInt(stopMinute.innerText) + 1;
        } else if(stopHour.innerText == 60) {
            stopHour.innerText = 0;
            stopHour.innerText = parseInt(stopHour.innerText) + 1;
        }

    }, 10)

    refresh.addEventListener('click', () => {
        clearInterval(stopwatch);

        refresh.className = 'refresh';
        clock.className = 'clock';
        play.className = 'play-stopwatch';
        imgRefresh.className = 'img-refresh-hide';
        imgClock.className ='img-clock-hide';
        imgPlay.className = 'img-play-stopwatch';

        stopHour.innerText = '';
        stopMinute.innerText = '';
        stopSecond.innerText = '';
        stopMilli.innerText = '';
        history.innerText = '';
    })

    const paragraph = document.createElement('p');
    clock.addEventListener('click', () => {
        paragraph.innerText += `${stopHour.innerText}:${stopMinute.innerText}:${stopSecond.innerText}:${stopMilli.innerText}\n`;
        history.append(paragraph)
    })
})
