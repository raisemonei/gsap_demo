gsap.registerPlugin(ScrollTrigger)

gsap.from('.logo div', {
    opacity: 0,
    delay: 1,
    x: 20
})

const menu_items = document.querySelector('.menu-items')
gsap.from(menu_items.children, {
    opacity: 0,
    x: 0,
    duration: 1,
    delay: 1.5,
    stagger: {
        amount: 1
    }
})

gsap.utils.toArray('.star').forEach(star => {
    gsap.fromTo(star, {
        rotation: 450,
        opacity: 0,
        y: 100
    }, {
        rotation: 0,
        opacity: 1,
        y: 0,
        duration: 1,
        delay: 1.5,
        scrollTrigger: star
    })
})