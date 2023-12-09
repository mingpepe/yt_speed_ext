console.log('code in content.js');

function insertPlaybackRate() {
    console.log('insertPlaybackRate');
    const logo = document.getElementById('logo-icon');
    const video = document.querySelector('video');
    if (!logo) {
        console.log('logo not found, insert playbackRate fail');
        return;
    }
    if (!video) {
        console.log('video not found, insert playbackRate fail');
        return;
    }
    const label = document.createElement('label');
    logo.appendChild(label);

    setInterval(() => {
        label.textContent = video.playbackRate.toFixed(1);
    }, 1000);
}

function onDOMContentLoaded() {
    console.log('DOMContentLoaded');
    const video = document.querySelector('video');
    if (video) {
        document.addEventListener('keydown', (event) => {
            if (event.key === 'w') {
                video.playbackRate = (video.playbackRate + 0.1) < 16 ? video.playbackRate + 0.1 : 16;
            } else if (event.key === 'q') {
                video.playbackRate = (video.playbackRate - 0.1) > 1 ? video.playbackRate - 0.1 : 1;
            } else if (event.key == 'p') {
                video.playbackRate = (video.playbackRate + 0.5) < 16 ? video.playbackRate + 0.5 : 16;

            } else if (event.key == 'o') {
                video.playbackRate = (video.playbackRate - 0.5) > 1 ? video.playbackRate - 0.5 : 1;
            }
        });
        setTimeout(insertPlaybackRate, 3000);

    } else {
        console.log('video not found');
    }
}

document.addEventListener('DOMContentLoaded', onDOMContentLoaded);
