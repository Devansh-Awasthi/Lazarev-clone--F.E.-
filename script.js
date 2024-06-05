var nav = document.querySelector("nav");
nav.addEventListener("mouseenter", function(){
    var tl=gsap.timeline();
    tl.to("#nav-bottom" ,{
        height:"20vh",
        duration:"0.5s"
    })
    tl.to(".options h5 " ,{
        display:"block",
        duration:"0.1s"
    })
    tl.to(".options h5 span", {
        y: 0,
        //  duration:2,
        stagger: {
            amount: 0.5
        }
    })
})
nav.addEventListener("mouseleave", function(){
    var tl1=gsap.timeline();
    tl1.to(".options h5 span", {
        y: 25,
        // duration:0.3,
        stagger: {
            amount: 0.5
        }
    })
    tl1.to(".options h5 " ,{
        display:"none",
        duration:"0.1s"
    })
    tl1.to("#nav-bottom" ,{
        height:"0vh",
        duration:"0.3s"
    })
    
})