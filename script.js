const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const image = document.getElementById('source');
let x = 0;
let pos = -1282;

image.addEventListener('load', (e) => {
  for (let index = 0; index < 2500; index++) {
    i = x;
    ctx.drawImage(image, i + pos, 0, image.width * .05, image.height * .05);
    x += 255
  }
});