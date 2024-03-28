function setClock() {
    const now = new Date();
    const hour = now.getHours();
    const minute = now.getMinutes();
    const second = now.getSeconds();

    const hourHand = document.querySelector('.hour');
    const minuteHand = document.querySelector('.minute');
    const secondHand = document.querySelector('.second');

    const hourRotation = (hour % 12) * 30 + (minute / 60) * 30;
    const minuteRotation = (minute / 60) * 360;
    const secondRotation = (second / 60) * 360;

    hourHand.style.transform = translate(-50%, -100%) rotate(${hourRotation}deg);
    minuteHand.style.transform = translate(-50%, -100%) rotate(${minuteRotation}deg);
    secondHand.style.transform = translate(-50%, -100%) rotate(${secondRotation}deg);
  }

  setInterval(setClock, 1000);
  setClock(); // Initial call to set the clock at page load