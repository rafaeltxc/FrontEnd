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
            second.value = 60;
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

