
// initialisation
document.getElementById('time-mesurement').value = 0;
var second = 6; 
var minute = 0;

// function 
function chrono() {
    console.log('chrono');
    document.querySelector('.seconde').style.transform = `rotate(${second}deg)`;
    document.getElementById('time-mesurement').value = second / 6
    second = second + 6;
}
function updateMinute(){
    console.log('update minute')
    minute++;
    console.log('minute:', minute)
    document.getElementById('counter-minute').textContent = minute ;
}

var myIntervalSecond;
var myIntervalMinute;
const start = () => {
    myIntervalSecond = setInterval(chrono, 1000);
    myIntervalMinute = setInterval(updateMinute, 60000);
}
const pause = () => {
    clearInterval(myIntervalSecond);
    clearInterval(myIntervalMinute);
}
const reset = () => {
    clearInterval(myIntervalSecond);
    clearInterval(myIntervalMinute);    
    document.getElementById('time-mesurement').value = 0;
    document.getElementById('counter-minute').textcontent = '' ;
    document.querySelector('.seconde').style.transform = `rotate(0deg)`;
    second = 6;
    minute = 0;
}

// evenements
document.getElementById('button_start')
    .addEventListener('click', start);

document.getElementById('button_pause')
    .addEventListener('click', pause);

document.getElementById('button_reset')
    .addEventListener('click', reset);



// clock();

// function clock() {
//   const date = new Date();
//   const hours = ((date.getHours() + 11) % 12 + 1);
//   const minutes = date.getMinutes();
//   const seconds = date.getSeconds();
//   const hour = hours * 30;
//   const minute = minutes * 6;
//   const second = seconds * 6;

//   document.querySelector('.heure').style.transform = `rotate(${hour}deg)`;

//   document.querySelector('.minute').style.transform = `rotate(${minute}deg)`;

//   document.querySelector('.seconde').style.transform = `rotate(${second}deg)`;
// }