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
tl.to($('.dr_almond'), .3, {
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

$(window).scroll(function(){
let scroll_h = $(window).scrollTop();
if(scroll_h >= $('#history').offset().top){
        var t3 = new TimelineLite();
        t3.to($('.hleft'), .8, {
                ease:Linear.power2,
                left:3+'%',
                opacity: 1,
        });
        t3.to($('.hright_text'), .7, {
                ease:Linear.ease,
                opacity: 1,
                right:0+'%'
        });
        t3.to($('.pack'), .7, {
                ease:Linear.ease,
                opacity: 1,
                top:0+'%'
        });
     
        var e0 = document.getElementsByClassName("p_al1");
        var e1 = document.getElementsByClassName("p_al2");
        var e2 = document.getElementsByClassName("p_al3");
        var e3 = document.getElementsByClassName("p_al4");
        var t4 = new TimelineLite()
        t4.staggerTo( [e0, e1, e2, e3], 3, {top:50+"vw", repeat:-1, ease: Bounce.easeOut } ,0.5);
       
}
})