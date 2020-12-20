var tl = new TimelineLite();
tl.to($('.leaf'), 0.8, {
        left:-33+'px',
        ease:Linear.ease,
        opacity:1,
});


tl.to($('.prod_breez'), .3, {
        ease:Linear.ease,
        opacity: 1,
    });
tl.to($('.drop_water'), .3, {
        opacity:1,
});
tl.to($('.font_wrap'), .3, {
        opacity:1,
});
tl.to($('.dalmond'), .3, {
        opacity:1,
});


// tl.to($('.flower1'), .5, {
//         ease:Linear.ease,
//         opacity: 1,
//         right:-2+'%'
// });
// tl.to($('.flower2'), .5, {
//     ease:Linear.ease,
//     opacity: 1,
//     right:-2+'%'
// });
var e0 = document.getElementsByClassName("flower1");
var e1 = document.getElementsByClassName("flower2");
var t2 = new TimelineLite()

t2.staggerTo( [e0, e1], 1, {ease:Linear.ease, opacity: 1, right:-2+'%'});