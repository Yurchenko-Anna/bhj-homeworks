const deadMole = document.getElementById("dead");
const lost = document.getElementById("lost");
const hole = getHole = index => document.getElementById(`hole${index}`);
function catchMole(){
  for (let i = 0, i = 9, i += 1){
    if (hole.className.includes('hole_has-mole')) {
      deadMole.textContent = Number(deadMole.textContent) + 1;
      if (Number(deadMole.textContent) === 10){
        alert("Победа!");
      }
    } else {
      lost.textContent = Number(lost.textContent) + 1;
      if (Number(lost.textContent) === 5){
        alert("Вы проиграли!");
      }
    }
  }
    
}
hole.onclick = catchMole;