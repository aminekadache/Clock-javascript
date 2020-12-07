setInterval(setClock,1000)

const handhour = document.querySelector('[data-hour-hand]')
const handminute = document.querySelector('[data-minute-hand]')
const handsecond = document.querySelector('[data-second-hand]')

function setClock() {
    const currentDate = new Date();
    const secondRatio = currentDate.getSeconds()
    const minuteRatio = currentDate.getMinutes()
    const hourRation = (minuteRatio + currentDate.getHours())/12
    console.log(currentDate.getSeconds())
    //setRotation(handsecond, secondRatio)
    //setRotation(handminute,minuteRatio)
    //setRotation(handhour,hourRation)
    secondRotation(handsecond,secondRatio)
    minuteRotation(handminute,minuteRatio)
    hourRotation(handhour,hourRation)
}
function setRotation(element,rotationRatio) {
 element.style.setProperty('--rotation',rotationRatio * 360)
}
function secondRotation(element,rotationRatio){
    element.style.setProperty('--rotation',rotationRatio*6)
}
function minuteRotation(element,rotationRatio) {
    element.style.setProperty('--rotation',rotationRatio*6)
}
function hourRotation(element,rotationRatio) {
    element.style.setProperty('--rotation',rotationRatio*30)
}