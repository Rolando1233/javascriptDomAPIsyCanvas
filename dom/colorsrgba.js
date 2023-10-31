const body = document.querySelector('body');
const red = document.querySelector('#red');
const blue = document.querySelector('#blue');
const green = document.querySelector('#green');
const trans = document.querySelector('#trans');

function setColor(){
    // rgb(0, 255, 14);
    // rgba(0, 255, 35, 0.5);
    const redVal = red.value;
    const greenVal = green.value;
    const blueVal = blue.value;
    const transVal = trans.value / 100;
    const rgbaColor = `rgba( ${ redVal * 2.56 }, ${ greenVal * 2.56 }, ${ blueVal * 2.56 }, ${ transVal } )`;
    body.style.background = rgbaColor;

}

setColor();
red.addEventListener('input', setColor);
green.addEventListener('input', setColor);
blue.addEventListener('input', setColor);
trans.addEventListener('input', setColor);