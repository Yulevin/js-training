export const musicPlayerInit = () => {
    console.log('"Music Player" инициализирован');

    const audioPlayer = document.querySelector('.audio-player');
    const audioBtnPrv = document.querySelector('.audio-button__prev');
    const audioBtnPlay = document.querySelector('.audio-button__play');
    const audioBtnNext = document.querySelector('.audio-button__next'); 
    const audioTimePassed = document.querySelector('.audio-time__passed');
    const audioProgressTime = document.querySelector('.audio-progress__timing');
    const audioTimeTotal = document.querySelector('audio-time__total');

    console.log(audioPlayer);
    console.log(audioBtnPrv);
    console.log(audioBtnPlay);
    console.log(audioBtnNext);
    console.log(audioTimePassed);
    console.log(audioProgressTime);
    console.log(audioTimeTotal);


    const tooglePLay = () => {
        if (audioPlayer.paused) {
            audioPlayer.play();
            console.log('[Play] - видео проигрывается');
        } else {
            audioPlayer.pause();
            console.log('[Pause] - видео на паузе');
        }
    }
    audioPlayer.addEventListener('click', tooglePLay);
}
