const modalClose = document.getElementsByClassName('modal__close');
const firstModalClose = modalClose.item(0);
const modalMain = document.getElementById('modal_main');
firstModalClose.onclick = function() {  
  modalMain.style.display = 'none';
};

const showSuccess = document.getElementsByClassName('show-success');
const firstshowSuccess = showSuccess.item(0);
const modalSuccess = document.getElementById('modal_success');
firstshowSuccess.onclick = function() {
  modalSuccess.style.display = 'flex';
};

const thirdModalClose = modalClose.item(2);
thirdModalClose.onclick = function() {
  modalSuccess.style.display = 'none';
  modalMain.style.display = 'none';
};



