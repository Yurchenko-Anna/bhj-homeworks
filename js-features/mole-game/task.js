const deadMole = document.getElementById("dead");
const lost = document.getElementById("lost");
const hole = getHole = index => document.getElementById(`hole${index}`);


function catchMole(){
  for (let i = 0; i < hole.length; i ++){
    if (hole[i].className.includes('hole_has-mole')) {
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