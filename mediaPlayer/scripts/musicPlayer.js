export const musicPlayerInit = () => {
    console.log('"Music Player" инициализирован');

    // Забираем классы кнопок управления
    const audioPlayer = document.querySelector('.audio-player');
    const audioBtnPrv = document.querySelector('.audio-button__prev');
    const audioBtnPlay = document.querySelector('.audio-button__play');
    const audioBtnNext = document.querySelector('.audio-button__next'); 
    const audioTimePassed = document.querySelector('.audio-time__passed');
    const audioProgressTime = document.querySelector('.audio-progress__timing');
    const audioTimeTotal = document.querySelector('.audio-time__total');

    // Асинхронная функция запрос
    async function playAudio() {
        try {
            // Если аудио проигрывет, вернёт true
            await audioPlayer.play();
        } catch (err) {
            audioBtnPlay.classList.remove('fa-pause');
            audioBtnPlay.classList.add('fa-play');
        }
    }

    // Функция обработчик события кнопки Play-Pause
    const handleBtnPlay = () => {
        if (audioPlayer.paused) {
            // Если аудио плеер на паузе, запустит playaudio(), поменяет иконки
            playAudio();
            audioBtnPlay.classList.remove('fa-play');
            audioBtnPlay.classList.add('fa-pause');
            console.log('[Play] - аудио проигрывается')
        } else {
            // В противном случае поставит на паузу, поменяет иконки
            audioPlayer.pause();
            audioBtnPlay.classList.remove('fa-pause');
            audioBtnPlay.classList.add('fa-play');
            console.log('[Pause] - аудио на паузе')
        }
    }

    const handleBtnPrev = () => {
        if (audioPlayer.currentTime === 0) {
            console.log('[Prev] - аудио не проигрывается')
        } else {
            audioPlayer.currentTime = 0;
        }
    }

    const handleBtnNext = () => {
        if (audioPlayer.currentTime === 0) {
        } else {
            // Перемотка на 5 секунд вперёд
            console.log('[Next] - аудио + 5 сек')
            audioPlayer.currentTime += 5;
        }
    }

    const addZero = n => n < 10 ? '0' + n : n;

    // Слушатель события по клику запустит обработчик, либо вернёт false
    audioBtnPlay.addEventListener('click', handleBtnPlay, false);
    audioBtnPrv.addEventListener('click', handleBtnPrev, false);
    audioBtnNext.addEventListener('click', handleBtnNext, false);

    audioPlayer.addEventListener('timeupdate', () => {
        const currentTime = audioPlayer.currentTime;
        const duration = audioPlayer.duration;

        audioProgressTime.value = (currentTime / duration) * 100;

        let minutePassed = Math.floor(currentTime / 60);
        let secondsPassed = Math.floor(currentTime % 60);
        
        let minuteTotal = Math.floor(duration / 60);
        let secondsTotal = Math.floor(duration % 60);

        audioTimePassed.textContent = `${addZero(minutePassed)}:${addZero(secondsPassed)}`;
        audioTimeTotal.textContent = `${addZero(minuteTotal)}:${addZero(secondsTotal)}`;
    });
    
    audioProgressTime.addEventListener('change', () => {
        const duration = audioPlayer.duration;
        const value = audioProgress.value;
        audioPlayer.currentTime = (value * duration) / 100;
    });

}
