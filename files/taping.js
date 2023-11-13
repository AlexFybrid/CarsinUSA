setTimeout(() => BT.classList.add('ac'), 6800)
setTimeout(() => FS.classList.add('ac'), 6400)
setTimeout(() => FS_2.classList.add('ac'), 5400)
var typed = new Typed(".type", {
  strings: [
      "Не такие как все ^)",
      "Вас приветствует ", 
      "Мы рады вас видеть ",
      "Слава Украине "
    ],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true // Указываем, повторять ли анимацию
});




function Rotator(start_from) {
  var phrases = ["Не такие как все ^)","Слава Україні", "Привет", "Вас приветствует", "Fybrid Studio", "Мы рады вас видеть "];
  var total = phrases.length;
  var interval = 500;
  if (void 0 === start_from) {
    start_from = 0;
  }

  $(".mobile_taping").text(phrases[start_from]).animate({ "opacity": "1" }, 1000, function () {
    if (start_from >= (total - 1)) {
      setTimeout(function () {
        $(".mobile_taping").animate({ "opacity": "0" }, 1000, function () {
          Rotator();
        });
      }, interval);
    } else {
      start_from++;
      setTimeout(function () {
        $(".mobile_taping").animate({ "opacity": "0" }, 1000, function () {
          Rotator(start_from);
        });
      }, interval);

    }

  })
}

$(document).ready(function () {
  Rotator();
})