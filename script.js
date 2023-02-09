const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const image = document.getElementById('source');
let x = 0;
let pos = -82;

image.addEventListener('load', (e) => {
  // Draw unfiltered image
//   ctx.filter = 'blur(10px)';\
for (let index = 0; index < 2; index++) {
    i = x;
    ctx.drawImage(image, i + pos, 0, image.width * .05, image.height * .05);
    x = 255
}
});
