setTimeout(() => load.classList.add('animated-show-active'), 1000)
setTimeout(() => menu.classList.removeClass('animated-show-active'), 2000)

window.onload = function () {
  var body = document.querySelector('menu');
  var links = document.querySelectorAll('a');

  links.forEach(function (link) {
    link.addEventListener('click', onLinkClicked);
    
    function onLinkClicked(event) {
      event.preventDefault();
      $('.load').removeClass('animated-show-active');
      $('body,html').animate({ scrollTop: 0 }, 350); 
      setTimeout(onAnimationComplete, 400);
    }

    function onAnimationComplete() {
      window.location = link.href;
    }
  });
}
