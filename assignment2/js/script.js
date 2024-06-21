const video = document.querySelector(".video")
video.volume = 0.2;

const image = document.querySelectorAll(".image")

const song = new Audio("./media/from-the-window-lamp.mp3")
song.volume = 0.1

const btn = document.querySelector("#btn")

video.addEventListener("mouseover", function playVideo() {
    video.play()
})
video.addEventListener("mouseout", function pauseVideo() {
    video.pause()
})

image.forEach((image) => {
    image.addEventListener("click", function playSong() {
        if (song.paused) {
            song.play()
            btn.classList.toggle("toggle-button")
        }
    })
});

btn.addEventListener("click", function mute() {
        this.classList.toggle("toggle-button")
        song.pause()
        song.currentTime = 0
})
