
var second = 0;
function chrono() {
    document.querySelector('.seconde').style.transform = `rotate(${second}deg)`;
    document.getElementById('time-mesurement').value = second/6
    second = second+6;

}
chrono() 
setInterval(chrono, 1000);


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