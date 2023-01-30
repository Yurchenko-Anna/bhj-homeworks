const clickerCounter = document.getElementById("clicker__counter");

const image = document.getElementById("cookie");

function changeSizes() {
  clickerCounter.textContent = Number(clickerCounter.textContent) + 1;
  if (clickerCounter.textContent % 2 === 0) {
    image.width = 300;
  } else {
    image.width = 100;
  };
};

image.onclick = changeSizes;
