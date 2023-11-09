function drawLines_loader() {
  $("#loading .nodules-loader").addClass("start-loader"), $("#loading .main-path-loader").addClass("start-loader"), $("#loading .main-path-loader-fill").addClass("start-loader");
}
function deleteLines_loader() {
  $("#loading .nodules-loader").removeClass("start-loader"), $("#loading .main-path-loader").removeClass("start-loader"), $("#loading .main-path-loader-fill").removeClass("start-loader");
}
function toHash(e) {
  var t = $("#" + e)[0].offsetTop;
  $("html, body").animate({ scrollTop: t - 100 }, 1e3);
}
function openSubmenu() {
  $(".menu-wrapper .menu-item").mouseenter(function () {
      $(this).find(".submenu").hasClass("active") ? $(this).find(".submenu").removeClass("active") : ($(".menu-wrapper .menu-item .submenu").removeClass("active"), $(this).find(".submenu").addClass("active"));
  }),
      $(".menu-wrapper .menu-item").mouseleave(function () {
          $(this).find(".submenu").hasClass("active") ? $(this).find(".submenu").removeClass("active") : ($(".menu-wrapper .menu-item .submenu").removeClass("active"), $(this).find(".submenu").addClass("active"));
      });
}
function openMenuMobile() {
  var e = $(".btn-menu"),
      t = $(".close-menu"),
      n = $(".menu-wrapper-mobile .menu-items"),
      a = $(".menu-wrapper-mobile .menu-item"),
      o = $(".menu-wrapper-mobile .menu-item .btn");
  e.toggleClass("open", 500), t.toggleClass("open", 500), n.toggleClass("open", 500), a.toggleClass("open", 500), o.toggleClass("open", 500), n.css("height", $(window).height()), $("body, html").toggleClass("open");
}
function openSubmenuMobile() {
  $(".menu-wrapper-mobile .menu-item").click(function () {
      $(this).find(".submenu").hasClass("active") ? $(this).find(".submenu").removeClass("active") : ($(".menu-wrapper-mobile .menu-item .submenu").removeClass("active"), $(this).find(".submenu").addClass("active"));
  });
}
function backToTop() {
  $("html, body").animate({ scrollTop: 0 }, 1500);
}
function offsetTopMenu() {
  var e = $("#menu");
  $("#main-section").css("margin-top", e.height());
}
// function stickyFooter() {
//   var e = $("body").height();
//   if ($(window).height() > e) {
//       var t = $("#app > #main-section"),
//           n = $(window).height() - e;
//       t.css("min-height", t.height() + n + "px");
//   }
// }
function offsetTop() {
  var e = $(".slideshow-wrapper");
  $(".clinica-wrapper").css("margin-top", e.height());
}
function closeAllSelect(e) {
  var t,
      n,
      a,
      o,
      s,
      i = [];
  for (t = document.getElementsByClassName("select-items"), n = document.getElementsByClassName("select-selected"), o = t.length, s = n.length, a = 0; a < s; a++) e == n[a] ? i.push(a) : n[a].classList.remove("select-arrow-active");
  for (a = 0; a < o; a++) i.indexOf(a) && t[a].classList.add("select-hide");
}
function checkEmail(e) {
  return /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,3}$/.test(e);
}
function updateValue(e) {
  const t = e.target.value;
  String(t).length < 9 && (this.amount = t), this.$forceUpdate();
}

window.addEventListener("load", function () {
  offsetTop(),
      offsetTopMenu(),
    //   activateStickyFooter(),
    //   stickyFooter(),
      drawLines_loader(),
      openSubmenu(),
      openSubmenuMobile(),
      $("body").addClass("loaded"),
      $("html").addClass("loaded"),
      setTimeout(() => {
          deleteLines_loader(),
              $("#loading").addClass("fadeout"),
              $("body").addClass("loaded"),
              $("html").addClass("loaded"),
              FadeIn(),
              null != document.getElementById("slideshow-home") && playAnim(),
              null != document.querySelector("#destaques .slider") && u();
      }, 1e3);
  var e = $("#menu").height();
  $(".slideshow-wrapper").css("height", "calc(100vh - " + e + "px)");

  
  var cvv = $(".slideshow-wrapper");
  $(".clinica-wrapper").css("margin-top", cvv.height());

  var t = document.querySelector("#contact-form"),
      n = document.querySelector("#contact-form-2");
  (t.style.transform = "translate(-160%, -50%)"), (n.style.transform = "translate(-160%, -50%)");
  var a = document.getElementById("gdpr-box"),
      o = document.querySelector(".gdpr-button-accept");
  null == Cookies.get("cookie-consent-anacarolinapereira")
      ? ((a.style.display = "flex"),
        o.addEventListener("click", function () {
            Cookies.set("cookie-consent-anacarolinapereira", "yes", { expires: 365, path: "/" }), (a.style.display = "none");
        }))
      : (a.style.display = "none");
  var s = $(".to-top");
  window.onscroll = function (e) {
      window.innerHeight + window.scrollY >= document.body.offsetHeight / 2 ? s.css({ opacity: 1 }) : s.css({ opacity: 0 });
  };
  var i = Array.prototype.map,
      l = document.querySelectorAll(".ind-dest");
  i.call(l, function (e, t) {
      e.addEventListener("click", function () {
          !(function (e) {
              m((d = e), -1), r.forEach(clearInterval);
              var t = document.querySelector("#destaques .slider");
              t.removeEventListener("touchstart", g, !1),
                  t.removeEventListener("touchmove", b, !1),
                  setTimeout(() => {
                      (c = !1),
                          setTimeout(() => {
                              t.addEventListener("touchstart", g, !1), t.addEventListener("touchmove", b, !1), 0 == c && u();
                          }, 1e3);
                  }, 500);
          })(t + 1);
      });
  });
  var r = [],
      c = !1,
      d = 1;
  function u() {
      r.forEach(clearInterval);
      var e = document.querySelector("#destaques .slider");
      e.addEventListener("touchstart", g, !1), e.addEventListener("touchmove", b, !1);
      var t = setInterval(() => {
          h(1), (c = !0);
      }, 8e3);
      setTimeout(() => {
          c = !1;
      }, 8e3),
          r.push(t);
  }
  function m(e, t) {
      var n,
          a = document.querySelectorAll("#destaques .slider .card"),
          o = document.querySelectorAll(".indicators-dest .ind-dest");
      for (e > a.length && (d = 1), e < 1 && (d = a.length), n = 0; n < a.length; n++) a[n].className = "card";
      for (n = 0; n < o.length; n++) (o[n].className = o[n].className.replace(" active-dest", "")), !1;
      (a[d - 1].className = "card active-dest"), (o[d - 1].className += " active-dest"), !0, (c = !1);
  }
  function h(e) {
      (c = !1),
          m((d += e)),
          r.forEach(clearInterval),
          setTimeout(() => {
              0 == c && u();
          }, 500);
  }
  var p = document.querySelector("#destaques .slider");
  if (window.innerWidth < 769) {
      p.addEventListener("touchstart", g, !1), p.addEventListener("touchmove", b, !1);
      var v = null,
          f = null;
      function g(e) {
          const t = (function (e) {
              return e.touches || e.originalEvent.touches;
          })(e)[0];
          (v = t.clientX), (f = t.clientY);
      }
      function b(e) {
          if (v && f) {
              var t = e.touches[0].clientX,
                  n = e.touches[0].clientY,
                  a = v - t,
                  o = f - n;
              Math.abs(a) > Math.abs(o) &&
                  (a > 0
                      ? h(1)
                      : ((c = !1),
                        m((d -= 1)),
                        r.forEach(clearInterval),
                        setTimeout(() => {
                            0 == c && u();
                        }, 500))),
                  (v = null),
                  (f = null);
          }
      }
  }
}),
  window.addEventListener("resize", function () {
      offsetTop(), 
      offsetTopMenu();
    //   stickyFooter(),
    //   activateStickyFooter();
      var e = $("#menu").height();
      $(".slideshow-wrapper").css("height", "calc(100vh - " + e + "px)");
      var c = $(".slideshow-wrapper");
      $(".clinica-wrapper").css("margin-top", c.height());
  }),
  document.addEventListener("click", closeAllSelect);
