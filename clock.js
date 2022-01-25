
// initialisation
document.getElementById('time-mesurement').value = 0;
var second = 6;

// function 
function chrono() {
    document.querySelector('.seconde').style.transform = `rotate(${second}deg)`;
    document.getElementById('time-mesurement').value = second / 6
    second = second + 6;

}
var myIntreval;
const start = () => {
    myIntreval = setInterval(chrono, 1000);
}
const pause = () => {
    clearInterval(myIntreval);
}
const reset = () => {
    clearInterval(myIntreval);
    document.getElementById('time-mesurement').value = 0;
    document.querySelector('.seconde').style.transform = `rotate(0deg)`;
    second = 6;
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