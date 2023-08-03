const AnimateOnscroll = () => {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.intersectionRatio > 0) {
                entry.target.classList.add('animate')
            } else {
                entry.target.classList.remove('animate')
            }  //remove when not intersecting
        })
    })
    const elements = document.querySelectorAll('.hidden')
    elements.forEach((el) => observer.observe(el))
}

export default AnimateOnscroll