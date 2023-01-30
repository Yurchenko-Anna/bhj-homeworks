const countdownTimer = function(){
  const timer = document.getElementById("timer");
  timer.textContent = Number(timer.textContent) - 1;
  if (Number(timer.textContent) === 0) {
    alert("Вы победили в конкурсе!");
    clearInterval(intervalId);
  }
}

intervalId = setInterval(countdownTimer, 1000);

