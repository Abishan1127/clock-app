function updateClock() {
    const now = new Date();

    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
    const ampm = hours >= 12 ? 'PM' : 'AM';

  
    const hourDegrees = ((hours % 12) / 12) * 360 + ((minutes / 60) * 30);
    const minuteDegrees = (minutes / 60) * 360;
    const secondDegrees = (seconds / 60) * 360;


    document.querySelector('.hour-hand').style.transform = `translate(-50%, -100%) rotate(${hourDegrees}deg)`;
    document.querySelector('.minute-hand').style.transform = `translate(-50%, -100%) rotate(${minuteDegrees}deg)`;
    document.querySelector('.second-hand').style.transform = `translate(-50%, -100%) rotate(${secondDegrees}deg)`;


    document.getElementById('hours').textContent = String(hours % 12 || 12).padStart(2, '0');
    document.getElementById('minutes').textContent = String(minutes).padStart(2, '0');
    document.getElementById('seconds').textContent = String(seconds).padStart(2, '0');
    document.getElementById('ampm').textContent = ampm;
}

setInterval(updateClock, 1000);
updateClock();
