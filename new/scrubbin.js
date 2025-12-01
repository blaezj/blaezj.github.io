// silly ass scrubbin
// gets section and video from section
const section = document.querySelector('section.vid')
const vid = section.querySelector('video')

// paused video automatically
vid.pause()

// scroll func
const scroll = () => {
    const distance = window.scrollY - section.offsetTop
    const total = section.clientHeight - window.innerHeight
    
    let percentage = distance / total
    percentage = Math.max(0, percentage)
    percentage = Math.min(percentage, 1)

    if (vid.duration > 0) {
        vid.currentTime = vid.duration * percentage
    }
}

scroll()
// always runs
window.addEventListener("scroll", scroll)