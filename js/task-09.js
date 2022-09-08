function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
console.log(getRandomHexColor())


const colorText =  document.querySelector('.color');
const form = document.querySelector('.change-color');
const body = document.getElementsByTagName('body')


form.addEventListener('click', onClick);


function onClick(event) {
    event.preventDefault();
    const color = getRandomHexColor()
    document.body.style.backgroundColor = color
    colorText.textContent = color
   
}
