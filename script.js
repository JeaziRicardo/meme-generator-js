const inputText = document.querySelector('#text-input');
const memeContainer = document.querySelector('#meme-image-container');
const memeText = document.querySelector('#meme-text');
const memeImage = document.querySelector('#meme-image');
const file = document.querySelector('#meme-insert');
const fireBtn = document.querySelector('#fire');
const waterBtn = document.querySelector('#water');
const earthBtn = document.querySelector('#earth');


function textInContainer() {
  memeText.innerHTML = '';
  memeText.innerHTML = inputText.value;
}
inputText.addEventListener('keyup', textInContainer);

// função inspirada em uma resposta do site stackoverflow - https://stackoverflow.com/questions/4459379/preview-an-image-before-it-is-uploaded/27165977#27165977
function imageUp() {
  memeImage.src = URL.createObjectURL(file.files[0]);
}
file.addEventListener('change', imageUp);

function changeBorderFire() {
  memeContainer.style.border = 'dashed 3px red';
}
fireBtn.addEventListener('click', changeBorderFire);

function changeBorderWater() {
  memeContainer.style.border = 'double 5px blue';
}
waterBtn.addEventListener('click', changeBorderWater);

function changeBorderEarth() {
  memeContainer.style.border = 'groove 6px green';
}
earthBtn.addEventListener('click', changeBorderEarth);
