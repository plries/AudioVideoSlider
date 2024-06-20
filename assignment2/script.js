const video = document.querySelector('.video')
const img = document.querySelectorAll('.image')
let eagle = new Audio('./media/eagle.mp3')

video.addEventListener("mouseover", function playVideo() {
    video.play()
})
video.addEventListener("mouseout", function pauseVideo() {
    video.pause()
})

img.addEventListener("click", function eagle() {
    eagle.play()
})