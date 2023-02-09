const canvas = document.getElementById('canvas');
const prev = document.getElementById('prev');
const next = document.getElementById('next');
const ctx = canvas.getContext('2d');
const image = document.getElementById('source');
let x = 0;
let pos = 0

animate(pos)

function animate(pos) {
  x = 0;
  for (let index = 0; index < 5; index++) {
    i = x;
    ctx.drawImage(image, i + pos, 0, image.width * .05, image.height * .05); // draw image at current position
    x += 250
  }
}

prev.addEventListener('click', () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  pos += 200
  animate(pos)
})

next.addEventListener('click', () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  pos -= 200
  animate(pos)
})