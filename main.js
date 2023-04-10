const images = document.querySelectorAll('.img-12-min');
let count = 0; // переменная, которая указывает на номер активного изображения в images
const activeImg = document.querySelector('.img-12-max');

const next = document.querySelector('.next');
next.onclick = nextFunction;
// next.addEventListener('touchstart', nextFunction);

const prev = document.querySelector('.prev');
prev.onclick = prevFunction;
// prev.addEventListener('touchstart', prevFunction);

const reset = document.querySelector('.reset');
reset.onclick = resetFunction;

function nextFunction() {
  images.forEach((img) => img.classList.remove('active-img'));
  if (count < images.length - 1) {
    getActiveImg(count + 1);
    count++;
  } else {
    resetFunction();
  }
}

function prevFunction() {
  images.forEach((img) => img.classList.remove('active-img'));
  // console.log(count);
  // console.log(images.length);
  if (count < images.length && count > 0) {
    getActiveImg(count - 1);
    count--;
  } else {
    count = images.length - 1;
    images[count].classList.add('active-img');
    getActiveImg(count);
  }
}

function resetFunction() {
  images.forEach((img) => img.classList.remove('active-img'));
  count = 0;
  getActiveImg(count);
}

function getActiveImg(i) {
  images[i].classList.add('active-img');
  let attr = images[i].getAttribute('src');
  activeImg.removeAttribute('src');
  activeImg.setAttribute('src', attr);
}
