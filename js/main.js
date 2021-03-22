function main() {
    // document.addEventListener("keypress", function (e) {
    //     if (e.keyCode === 13) {
    //         toggleFullScreen();
    //     }
    // }, false);
}

function toggleFullScreen() {
    if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen();
    } else {
        if (document.exitFullscreen) {
            document.exitFullscreen();
        }
    }
}

function play (name) {
    var audio = new Audio('./audio/' + name + '.mp3');

    audio.play();    
}