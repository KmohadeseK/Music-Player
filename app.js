// select let html:
let progress = document.querySelector("#progress")
let song = document.querySelector("#song")
let ctrIcon = document.querySelector("#ctrIcon")

// onloaded function
song.onloadedmetadata = function () {
    progress.max = song.duration;
    progress.value = song.currentTime;
}

// paly function
function playePuase() {
    if (ctrIcon.classList.contains("fa-pause")) {
        song.pause();
        ctrIcon.classList.remove("fa-pause");
        ctrIcon.classList.add("fa-play");
    } else {
        song.play()
        ctrIcon.classList.add("fa-pause");
        ctrIcon.classList.remove("fa-play");

    }
}

if (song.play()) {
    // setTime To drag the music range with the mouse
    setInterval(() => {
        progress.value = song.currentTime;
    }, 600)
}

progress.onchange = function () {
    song.play();
    song.currentTime = progress.value;
    ctrIcon.classList.add("fa-pause");
    ctrIcon.classList.remove("fa-play");

}