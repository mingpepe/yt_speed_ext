console.log('code in content.js');

function insertPlaybackRate() {
    console.log('insertPlaybackRate');
    const logo = document.getElementById('logo-icon');
    const player = document.getElementById('movie_player');
    if (!logo) {
        console.log('logo not found, insert playbackRate fail');
        return;
    }
    if (!player) {
        console.log('player not found, insert playbackRate fail');
        return;
    }
    const label = document.createElement('label');
    logo.appendChild(label);

    setInterval(() => {
        label.textContent = player.getPlaybackRate().toFixed(1);
    }, 1000);

    document.addEventListener('keydown', (event) => {
        const playbackRate = player.getPlaybackRate();
        if (event.key === 'w') {
            player.setPlaybackRate((playbackRate + 0.1) < 16 ? playbackRate + 0.1 : 16);
        } else if (event.key === 'q') {
            player.setPlaybackRate((playbackRate - 0.1) > 1 ? playbackRate - 0.1 : 1);
        } else if (event.key == 'p') {
            player.setPlaybackRate((playbackRate + 0.5) < 16 ? playbackRate + 0.5 : 16);
        } else if (event.key == 'o') {
            player.setPlaybackRate((playbackRate - 0.5) > 1 ? playbackRate - 0.5 : 1);
        }
    });
}

function onDOMContentLoaded() {
    console.log('DOMContentLoaded');
    setTimeout(insertPlaybackRate, 3000);
}

document.addEventListener('DOMContentLoaded', onDOMContentLoaded);
