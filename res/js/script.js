var menu_nav = document.getElementById('menu_nav');

var sticky = menu_nav.offsetTop;

window.onscroll = function() {
    if (window.pageYOffset >= sticky) {
        menu_nav.classList.add("sticky")
      } else {
        menu_nav.classList.remove("sticky");
      }
};