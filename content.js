console.log('code in content.js');

let timeoutID = undefined;

function main(retryCnt) {
    console.log(`main, retry count: ${retryCnt}`);
    const logo = document.getElementById('logo-icon');
    const player = document.getElementById('movie_player');
    const video = document.querySelector('video');
    if (!logo) {
        console.log('logo not found! Fail!');
    }
    if (!player) {
        console.log('player not found! Fail!');
    }
    if (!video) {
        console.log('video not found! Fail!');
    }
    if (!logo || !player || !video) {
        if (retryCnt > 0) {
            setTimeout( () => main(--retryCnt), 1000);
        }
        return;
    }
    const label = document.createElement('label');
    logo.appendChild(label);

    document.addEventListener('keydown', (event) => {
        if (event.key == '>' || event.key == '<') {
            updatePlaybackRate();
            return;
        }
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
            video.playbackRate = value;
            updatePlaybackRate();

            const wrapper = document.getElementsByClassName('ytp-bezel-text-wrapper')[0];
            wrapper.childNodes[0].textContent = value.toFixed(2);
            wrapper.parentNode.classList.remove('ytp-bezel-text-hide');
            wrapper.parentNode.style="display:block;";
            if (timeoutID) {
                clearTimeout(timeoutID);
            }
            timeoutID = setTimeout(() => {
                wrapper.parentNode.classList.add('ytp-bezel-text-hide');
                wrapper.parentNode.style="display:none;";
                timeoutID = undefined;
            }, 300);
        }
    });
    updatePlaybackRate();
    console.log('youtube speed controller installed successfully');

    function updatePlaybackRate() {
        label.textContent = video.playbackRate.toFixed(2);
    }
}

function onDOMContentLoaded() {
    console.log('DOMContentLoaded');
    setTimeout(() => main(5), 3000);
}

document.addEventListener('DOMContentLoaded', onDOMContentLoaded);
