function homeanim(){
    gsap.set(".front", {opacity: 0})
gsap.set(".img1", {x: -115})
gsap.set(".navbar", {y: -70})
gsap.set(".t", {y: 100})
gsap.set(".t2", {y: 100})
gsap.set(".t", {opacity: 0})
gsap.set(".t2", {opacity: 0})
gsap.set(".t", {x: 0})
gsap.set(".t2", {x: 0})
gsap.set(".img2", {x: 100})
gsap.set(".img3", {y: 100})
gsap.set(".b3", {x: -100})

gsap.to(".front",{
    opacity: 1,
    ease: Power2,
    duration: 1
},"a")
gsap.to(".img1",{
    x: 0,
    ease: Power2,
    duration: 1
},"a")
gsap.to(".img2",{
    x: 0,
    ease: Power2,
    duration: 1
},"a")
gsap.to(".img3",{
    y: 0,
    ease: Power2,
    duration: 1
},"a")
gsap.to(".b3",{
    x: 0,
    ease: Power2,
    duration: 1
},"a")
gsap.to(".navbar",{
    y: 0,
    ease: Power2,
    duration: 1
},"a")
gsap.to(".t",{
    y: 0,
    ease: Power2,
    duration: 1
},"a")
gsap.to(".t2",{
    y: 0,
    ease: Power2,
    duration: 1
},"a")
gsap.to(".t",{
    opacity: 1,
    ease: Power2,
    duration: 1
},"a")
gsap.to(".t2",{
    opacity: 1,
    ease: Power2,
    duration: 1
},"a")

const tl = gsap.timeline({
    scrollTrigger:{
        trigger:".front",
        start:"bottom 60%",
        end:"bottom top",
        scrub:2
    }
})

tl.to(".t",{
    x: 100,
    ease: Power4
},"b")
tl.to(".t2",{
    x: -100,
    ease: Power4
},"b")
tl.to(".front",{
    opacity: 0,
    ease: Power4
},"b")
tl.to(".img1",{
    x: -100,
    ease: Power2,
    duration: 1
},"b")
tl.to(".img2",{
    x: 100,
    ease: Power2,
    duration: 1
},"b")
tl.to(".img3",{
    y: 100,
    ease: Power2,
    duration: 1
},"b")
tl.to(".b3",{
    x: -100,
    ease: Power2,
    duration: 1
},"b")

}
function provideanim(){
    clutter=``
document.querySelector(".lfttxt")
.textContent.split("")
.forEach(function(e){
    if(e===" ") clutter+= `<span>&nbsp;</span>`

    clutter+=`<span>${e}</span>`
})

clutter2=``
wwp=``
document.querySelector(".wwp")
.textContent.split(" ")
.forEach(function(e){
    wwp+=`<div class="wwp2 flex">${e}</div>`
})
document.querySelector(".wwp").innerHTML=wwp;
document.querySelectorAll(".wwp2")
.forEach(function(a){
    a.textContent.split("")
    .forEach(function(e){
        clutter2+=`<div>${e}</div>`
    })
    a.innerHTML=clutter2
    clutter2=``
})


document.querySelector(".lfttxt").innerHTML=clutter;
gsap.from(".lfttxt span",{
    scrollTrigger:{
        trigger:".provide",
        start: "top 80%",
        end: "top 20%",
        scrub: .5
    },
    opacity: 0,
    ease: Power2,
    stagger: 0.1,
    duration: 0.7
})
document.querySelectorAll(".wwp div")
.forEach(function(e){
   gsap.set(e ,{y: 100, opacity: 0})
})

const tlne = gsap.timeline({
    scrollTrigger:{
        trigger:".provide",
        start: "top 40%",
        end: "top 20%",
        scrub: 2
    }
})

tlne.to(".wwp div",{
    y:0,
    opacity: 1,
    ease: Power2,
    stagger: 0.1,
    duration: 0.7
})
.from(".probtn",{
    y:100,
    opacity: 0,
    ease: Power2,
    stagger: 0.1,
    duration: 0.7
},"a")
.from(".cards",{
    y:100,
    opacity: 0,
    ease: Power2,
    stagger: 0.1,
    duration: 0.7
})

const tl = gsap.timeline({
    scrollTrigger:{
        trigger:".provide",
        start:"bottom 60%",
        end:"bottom top",
        scrub:2
    }
})

tl.to(".provide",{
    opacity:0,
    ease: Power2
})
if(window.innerWidth<1000){
    if(window.innerWidth<322){
        gsap.to(".cards",{
            scrollTrigger:{
                trigger:".provide",
                start: "top top",
                end: "bottom bottom",
                scrub: 2
            },
            xPercent: -467
        })
    }
    gsap.to(".cards",{
        scrollTrigger:{
            trigger:".provide",
            start: "top top",
            end: "bottom bottom",
            scrub: 2,
        },
        xPercent: -430
    })
}
}
function scroll(){
    var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.querySelector(".navbar").style.top = "0";
    if(window.innerWidth<1000){
        document.querySelector(".head").style.top = "4%";
    }
    else{
        document.querySelector(".head").style.top = "8%";
    }
  } else {
    document.querySelector(".navbar").style.top = "-60px";
    document.querySelector(".head").style.top = "0%";
  }
  prevScrollpos = currentScrollPos;
}
}
function workanim(){
    const tl = gsap.timeline({
        scrollTrigger:{
            trigger: ".work",
            start: "top 60%",
            end: "top 30%",
            scrub: 1,
            
        }
    })
    tl.from(".l2",{
        x: -400,
        opacity: 0,
        ease: Power2,
    
    })
    tl.from(".whead",{
        x: 400,
        opacity: 0,
        ease: Power2,
    
    })
    gsap.from(".gaming",{
        scrollTrigger:{
            trigger: ".gaming",
            start:"top 50%",
            end: "top 40%",
            scrub: 2
        },
        opacity: 0,
        y: 200,
        ease: Power2
    })
    gsap.from(".blog",{
        scrollTrigger:{
            trigger: ".blog",
            start:"top 60%",
            end: "top 40%",
            scrub: 2
        },
        opacity: 0,
        y: 200,
        ease: Power2
    })
    gsap.from(".podcast",{
        scrollTrigger:{
            trigger: ".podcast",
            start:"top 60%",
            end: "top 40%",
            scrub: 2
        },
        opacity: 0,
        y: 200,
        ease: Power2
    })
    
    const tl1 = gsap.timeline({
        scrollTrigger:{
            trigger:".work",
            start:"bottom 60%",
            end:"bottom top",
            scrub:2
        }
    })
    
    tl1.to(".work",{
        opacity:0,
        ease: Power2
    })
}
function circleanim(){
    if(window.innerWidth<1000){
        gsap.set(".conta",{scale: 5})
    }
    else{
        gsap.set(".conta",{scale: 10})
    }
    gsap.to(".conta",{
        scrollTrigger:{
            trigger:".circle",
            start: "top top",
            end: "50% 50%",
            scrub: 2
        },
        scale: 1,
        ease: Power2
    })
    gsap.to(".circ",{scrollTrigger:{
        trigger: ".circle",
        start: "top top",
        end : "bottom top",
        scrub: 2
    },
        rotate: "360deg",
        ease: Power2
    })
    
    gsap.to(".circ1",{
        scrollTrigger:{
            trigger: ".circle",
            start: "top top",
            end : "bottom top",
            scrub: 3
        },
        rotate: "-150deg",
        ease: Power2
    })
    gsap.to(".circ2",{
        scrollTrigger:{
            trigger: ".circle",
            start: "top top",
            end : "bottom top",
            scrub: 1
        },
        rotate: "-270deg",
        ease: Power2
    })
    gsap.to(".circ3",{
        scrollTrigger:{
            trigger: ".circle",
            start: "top top",
            end : "bottom top",
            scrub: 5
        },
        rotate: "190deg",
        ease: Power2,
        duration: 2
    })
}

function ntcanim(){
    if(window.innerWidth<1000){
        gsap.from(".ntc",{
            scrollTrigger:{
                trigger:".ntc",
                start:"top 80%",
                end: "top 50%",
                scrub: 2
            },
            opacity: 0,
            y: 300,
            ease: Power2
        })
    }
    
    else{
        gsap.from(".ntc",{
            scrollTrigger:{
                trigger:".ntc",
                start:"top 70%",
                end: "top 30%",
                scrub: 2
            },
            opacity: 0,
            y: 300,
            ease: Power2
        })
    }
    
}

gsap.from(".line",{
    scrollTrigger:{
        trigger:".line",
        start:"top bottom",
        end: "top 90%",
        scrub: 2,
    },
    opacity: 0,
    y: 300,
    ease: Power2
})

gsap.to(".line1",{
    scrollTrigger:{
        trigger:".line",
        start:"top bottom",
        end: "bottom top",
        scrub: 2
    },
    x: 400,
    ease: Power2
})
gsap.to(".line2",{
    scrollTrigger:{
        trigger:".line",
        start:"top bottom",
        end: "bottom top",
        scrub: 2
    },
    x: -400,
    ease: Power2
})

clutter2=``
document.querySelectorAll(".txt6")
.forEach(function(a){
    a.textContent.split("")
    .forEach(function(e){
        if(e===" ") clutter2+=`<div>&nbsp;</div>`
        clutter2+=`<div>${e}</div>`
    })
    a.innerHTML=clutter2
    clutter2=``
})

gsap.from(".txt6 div",{
    scrollTrigger:{
        trigger: ".texts",
        start: "top 70%",
        end :"top 30%",
        scrub: 2
    },
    x: 100,
    opacity: 0,
    ease: Power2,
    stagger: 0.1
})

gsap.from(".endbox",{
    scrollTrigger:{
        trigger: ".endbox",
        start: "top 60%",
        end :"top 0%",
        scrub: 2
    },
    x: 1500,
    opacity: -6,
    ease: Power2
})
gsap.from(".endb2",{
    scrollTrigger:{
        trigger: ".endb2",
        start: "top 70%",
        end :"top 45%",
        scrub: 2
    },
    x: -1500,
    opacity: -6,
    ease: Power2
})

scroll();
homeanim();
provideanim();
workanim();
circleanim();
ntcanim();