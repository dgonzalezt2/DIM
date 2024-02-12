clock();

function clock() {
  const currentDate = new Date();
  const targetDate = new Date('June 19, 2016 00:00:00 GMT'); 
  const timeDifference = currentDate - targetDate;

  const milliseconds = Math.floor(timeDifference % 1000);
  const seconds = Math.floor((timeDifference / 1000) % 60);
  const minutes = Math.floor((timeDifference / (1000 * 60)) % 60);
  const hours = Math.floor((timeDifference / (1000 * 60 * 60)) % 24);
  const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

  const clockObj = {
    Días: days,
    Horas: hours,
    Minutos: minutes,
    Segundos: seconds,
    Milisegundos: milliseconds
  };const valFormat = (val) => {
    if

   (typeof val === 'number') return `<span class="value number">${val}</span>`;
    else if (typeof val === 'string') return `<span class="value string">"${val}"</span>`;
  };

  document.querySelector(".watch").innerHTML =
    `<span class="keyword">const</span> <span class="def">clock</span> <span class="operator">=</span> {<br>` +
    Object.entries(clockObj).reduce((str, [key, val]) => str + `&nbsp;`.repeat(2) + `<span class="property">${key}</span>: ${valFormat(val)},<br>`, '') +
    '};';

  requestAnimationFrame(clock);
}