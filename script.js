var tl =gsap.timeline();

tl.from(".nav-bar img , nav h3 , .nav-button button",{
    y:-100,
    duration:.3,
    delay:.5,
    opacity:0,
stagger:.2
})

tl.from(".content h1",{
    y:100,
    duration:.3,
    opacity:0,
stagger:.2
})
tl.from("h1 span",{
    y:-20,
    duration:.3,
    opacity:0,
})

tl.from(".all-img img:nth-child(1)",{
    x:-100,
    duration:.5,
    opacity:0,
stagger:.2,

})
tl.from(".all-img img:nth-child(2)",{
    x:200,
    duration:.3,
    opacity:0,
stagger:.2
})
tl.from(".all-img img:nth-child(3)",{
    x:200,
    duration:.3,
    opacity:0,
stagger:.2

})
tl.from(".imgs img",{
    x:200,
    duration:1,
    opacity:0,
    delay:1,
stagger:.2,
scale:3,
// rotate:360,

scrollTrigger:{
    trigger:".imgs img",
    scroller:"body",
    // markers:true,
    start:"top 40%",
    end:"top 30%",
    scrub:2

}



})
tl.to(".content h1:nth-child(4)",{
    y:-30,
    duration:1,
    yoyo:true,
    repeat:-1

})
