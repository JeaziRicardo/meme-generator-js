const inputText = document.querySelector('#text-input');
const memeContainer = document.querySelector('#meme-image-container');
const memeText = document.querySelector('#meme-text');

function textInContainer() {
  memeText.innerHTML = '';
  memeText.innerHTML = inputText.value;
}
inputText.addEventListener('keyup', textInContainer);
