console.log('code in content.js');

function insertPlaybackRate() {
    console.log('insertPlaybackRate');
    const logo = document.getElementById('logo-icon');
    const player = document.getElementById('movie_player');
    const video = document.querySelector('video');
    if (!logo) {
        console.log('logo not found, insert playbackRate fail');
        return;
    }
    if (!player) {
        console.log('player not found, insert playbackRate fail');
        return;
    }
    if (!video) {
        console.log('video not found, insert playbackRate fail');
        return;
    }
    const label = document.createElement('label');
    logo.appendChild(label);

    setInterval(() => {
        label.textContent = video.playbackRate.toFixed(2);
    }, 1000);

    document.addEventListener('keydown', (event) => {
        const playbackRate = video.playbackRate;
        let value = null;
        if (event.key === 'w') {
            value = (playbackRate + 0.1) < 16 ? playbackRate + 0.1 : 16;
        } else if (event.key === 'q') {
            value = (playbackRate - 0.1) > 1 ? playbackRate - 0.1 : 1;
        } else if (event.key == 'p') {
            value = (playbackRate + 0.5) < 16 ? playbackRate + 0.5 : 16;
        } else if (event.key == 'o') {
            value = (playbackRate - 0.5) > 1 ? playbackRate - 0.5 : 1;
        }
        if (value) {
            player.setPlaybackRate(value);
            if (value > 2) {
                video.playbackRate = value;
            }
        }
    });
}

function onDOMContentLoaded() {
    console.log('DOMContentLoaded');
    setTimeout(insertPlaybackRate, 3000);
}

document.addEventListener('DOMContentLoaded', onDOMContentLoaded);
