let clock = () => {
    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();

    if (hours < 9) {hours = "0" + hours}
    if (minutes < 9) {minutes = "0" + minutes}
    if (seconds < 9) {seconds = "0" + seconds}
    
    let result = hours + ":" + minutes + ":" + seconds;

    let date_clock = document.getElementById('time').innerHTML = result;

    setTimeout(() => {
        clock()
    }, 1000)
}

clock();

