
// initialisation
document.getElementById('time-mesurement').value = 0;
var second = 1; 
var minute = 0;

// function 
function chrono() {
    console.log('chrono');
    document.querySelector('.seconde').style.transform = `rotate(${second*6}deg)`;
    document.getElementById('time-mesurement').value = second
    if ((second % 60) == 0){
        console.log('update minute')
        minute++;
        console.log('minute:', minute)
        document.getElementById('counter-minute').textContent = minute ;
    }
    second++;
}

var myIntervalSecond;
const start = () => {
    myIntervalSecond = setInterval(chrono, 1000);
};
const pause = () => {
    clearInterval(myIntervalSecond);
};
const reset = () => {
    clearInterval(myIntervalSecond);   
    document.getElementById('time-mesurement').value = 0;
    document.getElementById('counter-minute').textContent = '0' ;
    document.querySelector('.seconde').style.transform = `rotate(0deg)`;
    second = 1;
    minute = 0;
};

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