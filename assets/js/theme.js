
(function ($) {
  "use strict";

  $(function () {
    var header = $(".start-style");
    $(window).scroll(function () {
      var scroll = $(window).scrollTop();

      if (scroll >= 10) {
        header.removeClass('start-style').addClass("scroll-on");
      } else {
        header.removeClass("scroll-on").addClass('start-style');
      }
    });
  });

  //Animation

  $(document).ready(function () {
    $('body.hero-anime').removeClass('hero-anime');
  });

  //Menu On Hover

  $('body').on('mouseenter mouseleave', '.nav-item', function (e) {
    if ($(window).width() > 750) {
      var _d = $(e.target).closest('.nav-item'); _d.addClass('show');
      setTimeout(function () {
        _d[_d.is(':hover') ? 'addClass' : 'removeClass']('show');
      }, 1);
    }
  });



})(jQuery);

// Blank Target External Links
$(document.links).filter(function () {
  return this.hostname != window.location.hostname;
}).attr('target', '_blank');


const themeLinkCSS = document.querySelector("#theme-link-css");

function toggleNightMode() {

  let linkCSSFile = themeLinkCSS.getAttribute("href");

  if (document.documentElement.getAttribute('data-theme') == 'light') {
    document.documentElement.setAttribute('data-theme', 'dark');
    document.getElementById('mode-switcher').classList.add('active');
    localStorage.setItem("theme", "dark");
    linkCSSFile = linkCSSFile.replace("theme.css", "dark-theme.css");
  }
  else {
    document.documentElement.setAttribute('data-theme', 'light');
    document.getElementById('mode-switcher').classList.remove('active');
    localStorage.setItem("theme", "");
    linkCSSFile = linkCSSFile.replace("dark-theme.css", "theme.css");
  }
  themeLinkCSS.href = linkCSSFile;
}

// Check if the user has previously selected a theme
const currentTheme = localStorage.getItem("theme") ? localStorage.getItem("theme") : null;

if (currentTheme) {
  document.documentElement.setAttribute('data-theme', currentTheme);

  if (currentTheme === 'dark') {
    document.getElementById('mode-switcher').classList.add('active');
    themeLinkCSS.href = themeLinkCSS.href.replace("theme.css", "dark-theme.css");
  }
}