const hours = document.getElementById('hours'),
minutes = document.getElementById('minutes'),
seconds = document.getElementById('seconds');

const clock = setInterval(function time() {
    let dateToday = new Date();
    let hour = dateToday.getHours();
    let min = dateToday.getMinutes();
    let sec = dateToday.getSeconds();

    hours.textContent = hour;
    minutes.textContent = min;
    seconds.textContent = sec;
})