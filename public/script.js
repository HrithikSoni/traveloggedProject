// Navbar

$(function () {
    $(document).scroll(function () {
      var $nav = $(".fixed-top");
      $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
    });
  });

  // Trips Herosection

  document.getElementById("herosection").style.backgroundImage = url(`images/+ ${tripName} + .jpg`);

const {availHeight, availWidth} = window.screen();
console.log(availHeight, availWidth);