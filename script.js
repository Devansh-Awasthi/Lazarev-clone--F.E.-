function p1animation(){
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
        duration:"0.5s"
    })
    
})
}

function p2animation(){
var ins=document.querySelectorAll(".inside");
ins.forEach(function(a){
    a.addEventListener("mouseenter", function(){
        // console.log(a.childNodes  );
        gsap.to(a.childNodes[7],{
            display:"block",
            opacity:1,
            scale:1
        })
        
    })
    a.addEventListener("mouseleave", function(){
        // console.log(a.childNodes  );
        gsap.to(a.childNodes[7],{
            display: "none",
            opacity:0,
            scale:0
        })
    a.addEventListener( "mousemove", function(dets){    
        gsap.to(a.childNodes[7],{
            x:dets.x - a.getBoundingClientRect().x-35,
            y: dets.y - a.getBoundingClientRect().y-120 ,            
        })
    })
})
})

}
p1animation();
p2animation();