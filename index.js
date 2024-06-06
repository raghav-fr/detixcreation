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



homeanim();
provideanim();