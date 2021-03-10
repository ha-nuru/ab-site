$(function () {
  // mousewheel event
  var elm = ".box";
  $(elm).each(function (index) {
    $(this).on("mousewheel DOMMouseScroll", function (e) {
      e.preventDefault();
      var delta = 0;
      if (!event) event = window.event;
      if (event.wheelDelta) {
        delta = event.wheelDelta / 120;
        if (window.opera) delta = -delta;
      } else if (event.detail) delta = -event.detail / 3;
      var moveTop = $(window).scrollTop();
      var elmSelecter = $(elm).eq(index);
      if (delta < 0) {
        if ($(elmSelecter).next() != undefined) {
          try {
            moveTop = $(elmSelecter).next().offset().top;
          } catch (e) {}
        }
      } else {
        if ($(elmSelecter).prev() != undefined) {
          try {
            moveTop = $(elmSelecter).prev().offset().top;
          } catch (e) {}
        }
      }
      $("html,body")
        .stop()
        .animate(
          {
            scrollTop: moveTop + "px",
          },
          {
            duration: 100,
            complete: function () {},
          }
        );
    });
  });
  // main visual ani
  var tl = new TimelineLite();
  tl.to($(".leaf"), 0.8, {
    left: -33 + "px",
    ease: Linear.ease,
    opacity: 1,
  });
  tl.to($(".prod_breez"), 0.3, {
    ease: Linear.ease,
    opacity: 1,
  });
  tl.to($(".drop_water"), 0.3, {
    opacity: 1,
  });
  tl.to($(".font_wrap"), 0.3, {
    opacity: 1,
  });

  var e0 = document.getElementsByClassName("flower1");
  var e1 = document.getElementsByClassName("flower2");

  var t2 = new TimelineLite();
  t2.staggerTo([e0, e1], 0.6, { ease: Linear.ease, right: -2 + "%" });

  var e0 = document.getElementsByClassName("p_al1");
  var e1 = document.getElementsByClassName("p_al2");
  var e2 = document.getElementsByClassName("p_al3");
  var e3 = document.getElementsByClassName("p_al4");

  var t4 = new TimelineLite();
  t4.staggerTo(
    [e0, e1, e2, e3],
    3,
    { top: 55 + "vw", repeat: -1, ease: Bounce.easeOut },
    0.5
  );
  // scroll ani (history, health, ourway, legacy)
  $(window).scroll(function () {
    let scroll_h = $(window).scrollTop();
    if (scroll_h + 300 >= $("#history").offset().top) {
      var t3 = new TimelineLite();
      t3.to($(".hleft"), 0.4, {
        ease: Linear.power2,
        left: 3 + "%",
        opacity: 1,
      });
      t3.to($(".hright_text"), 0.5, {
        ease: Linear.ease,
        opacity: 1,
        right: 0 + "%",
      });
      t3.to($(".pack"), 0.5, {
        ease: Linear.ease,
        opacity: 1,
        top: 0 + "%",
      });
    }
    if (scroll_h + 500 >= $("#our_Way").offset().top) {
      var t4 = new TimelineLite();
      t4.to($("#our_Way h3"), 0.3, {
        ease: Linear.ease,
        top: 13 + "vh",
        opacity: 1,
      });
      t4.to($(".op_svg"), 0.2, {
        ease: Linear.ease,
        opacity: 1,
      });
      var line_bg = document.getElementsByClassName("line_bg");
      TweenLite.to(line_bg, 2, { width: 100 + "%" });
      var w0 = document.getElementsByClassName("way_text1");
      var w1 = document.getElementsByClassName("way_text2");
      var w2 = document.getElementsByClassName("way_text3");
      t4.staggerTo([w0, w1, w2], 1, { opacity: 1, top: 100 + "%" }, 0.5);
    }
    if (scroll_h + 500 >= $("#health").offset().top) {
      var t4 = new TimelineLite();
      t4.to($("#health h3"), 0.3, {
        ease: Linear.ease,
        top: 13 + "vh",
        opacity: 1,
      });
      t4.to($("#health h3"), 0.3, {
        ease: Linear.ease,
        top: 13 + "vh",
        opacity: 1,
      });
      t4.to($("#health h3"), 0.3, {
        ease: Linear.ease,
        top: 13 + "vh",
        opacity: 1,
      });
    }
    if (scroll_h + 500 >= $("#legacy").offset().top) {
      var t5 = new TimelineLite();
      t5.to($("#legacy h3"), 0.5, {
        ease: Linear.ease,
        top: 18 + "vh",
        opacity: 1,
      });
    }
    if (scroll_h >= $(".sec1").offset().top) {
      var t5 = new TimelineLite();
      t5.to($(".sec1 .left_f"), 0.2, {
        ease: Linear.ease,
        left: 0,
        opacity: 1,
      });
      t5.to($(".sec1 .right_f"), 0.3, {
        ease: Linear.ease,
        right: 0,
        opacity: 1,
      });
      t5.to($(".sec1 .right_f >div:nth-child(2)"), 0.2, {
        ease: Linear.ease,
        right: -24 + "%",
        opacity: 1,
      });
      t5.to($(".sec1 .right_f>div:nth-child(1)"), 0.3, {
        ease: Linear.ease,
        right: -25 + "%",
        opacity: 1,
      });
    }
    if (scroll_h >= $(".sec2").offset().top) {
      var t5 = new TimelineLite();
      t5.to($(".sec2 .left_f"), 0.3, {
        ease: Linear.ease,
        left: 0,
        opacity: 1,
      });
      t5.to($(".sec2 .right_f"), 0.3, {
        ease: Linear.ease,
        right: 0,
        opacity: 1,
      });
    }
    if (scroll_h + 500 >= $(".sec3").offset().top) {
      var t5 = new TimelineLite();
      t5.to($(".sec3 .right_f>div:nth-child(1)"), 0.5, {
        ease: Linear.ease,
        opacity: 1,
      });
      t5.to($(".sec3 .right_f>div:nth-child(2)"), 0.5, {
        ease: Linear.ease,
        opacity: 1,
      });
      t5.to($(".sec3 .right_f>div:nth-child(3)"), 0.5, {
        ease: Linear.ease,
        opacity: 1,
      });
    }
    if (scroll_h >= $(".sec3").offset().top) {
      var t5 = new TimelineLite();
      t5.to($(".sec3 .right_f p"), 0.3, {
        ease: Linear.ease,
        right: 0,
        opacity: 1,
      });
      t5.to($(".sec3 .left_f"), 0.3, {
        ease: Linear.ease,
        left: 0,
        opacity: 1,
      });
    }
    if (scroll_h + 200 >= $("#service").offset().top) {
      var t6 = new TimelineLite();
      t6.to($("#service .tit_cont"), 0.6, {
        ease: Linear.ease,
        top: 15 + "vh",
        opacity: 1,
      });
      t6.to($(".prod_list"), 0.6, {
        ease: Linear.ease,
        opacity: 1,
      });
      var s1 = document.getElementsByClassName("ser_text1");
      var s2 = document.getElementsByClassName("ser_text2");
      var s3 = document.getElementsByClassName("ser_text3");
      var s4 = document.getElementsByClassName("ser_text4");
      t6.staggerTo([s1, s2, s3, s4], 1, { opacity: 1 }, 0.2);
    }
    if (scroll_h + 300 >= $("#service").offset().top) {
      $(".prod_list").addClass("pro_ani");
    } else {
      $(".prod_list").removeClass("pro_ani");
    }
  });

  // mousemove event
  var object1 = $(".heart");
  var object2 = $(".nutri");
  var object3 = $(".weight");
  var object4 = $(".hand");

  var layer = $("#layer_w");
  layer.mousemove(function (e) {
    var valueX = (e.pageX * -1) / 12;
    var valueY = (e.pageY * -1) / 12;
    object1.css({
      transform: "translate3d(" + valueX + "px," + valueY + "px,0)",
    });
    layer.mousemove(function (e) {
      var valueX = (e.pageX * -1) / 15;
      var valueY = (e.pageY * -1) / 25;

      object2.css({
        transform: "translate3d(" + valueX + "px," + valueY + "px,0)",
      });
    });

    layer.mousemove(function (e) {
      var valueX = (e.pageX * -1) / 15;
      var valueY = (e.pageY * -1) / 15;

      object3.css({
        transform: "translate3d(" + valueX + "px," + valueY + "px,0)",
      });
    });
    layer.mousemove(function (e) {
      var valueX = (e.pageX * -1) / 15;
      var valueY = (e.pageY * 1) / 18;

      object4.css({
        transform: "translate3d(" + valueX + "px," + valueY + "px,0)",
      });
    });
  });

  // legacy_sticky dialine
  var controller = new ScrollMagic.Controller();

  var tween1 = TweenMax.to(".dia_line1", 0.4, {
    height: "100+%",
    ease: Linear.ease,
  });
  var scene1 = new ScrollMagic.Scene({
    triggerElement: "#trigger1",
    duration: 2000,
  })
    .setTween(tween1)
    .addTo(controller);

  var tweend = TweenMax.to(".dia_svg", 0.5, {
    scale: 2,
    opacity: 1,
    ease: Linear.easeNone,
  });
  var scene4 = new ScrollMagic.Scene({
    triggerElement: ".trigger_D",
    duration: "2700",
    offset: 300,
  })
    .setTween(tweend)
    .setPin(".dia_svg")
    .addTo(controller);
});

//our way svg
var vv1 = new Vivus("svg_icon1", { duration: 100 }, vv1);
var vv2 = new Vivus("svg_icon2", { duration: 400 }, vv2);
var vv3 = new Vivus("svg_icon3", { duration: 100 }, vv3);

$(window).scroll(function () {
  var scTs = $(this);
  scrollAni(scTs, "#svg_icon1", vv1);
  scrollAni(scTs, "#svg_icon2", vv2);
  scrollAni(scTs, "#svg_icon3", vv3);
});
function scrollAni(ts, svg, vv) {
  if (ts.scrollTop() > $(svg).offset().top - ts.height()) {
    vv.play();
  }
}
