let hourPointer = document.querySelector(".hourPointer");
let minutePointer = document.querySelector(".minutePointer");
let secondPointer = document.querySelector(".secondPointer");

let hoursBox = document.querySelector(".hoursBox");
let minutesBox = document.querySelector(".minutesBox");
let secondsBox = document.querySelector(".secondsBox");






setInterval(() => {
    let date = new Date ();
    let second = date.getSeconds();
    let minute = date.getMinutes();
    let hour = date.getHours();


secondPointer.style.transform = `rotate(${second * 6}deg)`;
minutePointer.style.transform = `rotate(${minute * 6}deg)`;
hourPointer.style.transform = `rotate(${hour * 30}deg)`;


hoursBox.innerText = hour;
minutesBox.innerText = minute;
secondsBox.innerText=second;


},1000);
