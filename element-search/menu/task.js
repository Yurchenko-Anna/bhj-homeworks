let menuLink = document.querySelectorAll('.menu__link');

let menuSub = document.querySelectorAll('.menu_sub');

for (let i =0; i < menuLink.length; i++) {
  menuLink[i].onclick = function () {
    for (let j =0; j < menuSub.length; j++) {
      if (menuLink[i].closest('.menu__item') === menuSub[j].closest('.menu__item')){
        menuSub[j].classList.add('menu_active');
        return false;
      };          
    }; 
  };
};




