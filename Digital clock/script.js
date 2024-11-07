const clock = document.querySelector('.clock');

setInterval(function(){
    let date = new Date();
    clock.innerHTML = date.toLocaleTimeString();
},1000);         //set interval can help in repeating value in real time in miliseconds