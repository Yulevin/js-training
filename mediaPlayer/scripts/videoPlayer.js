export const videoPlayerInit = () => {
    console.log('"Video Player" инициализирован');
    
    // Забираем классы кнопок управления
    const videoPlayer = document.querySelector('.video-player');
    const videoButtonPlay = document.querySelector('.video-button__play');
    const videoButtonStop = document.querySelector('.video-button__stop');
    const videoProgress = document.querySelector('.video-progress');
    const videoTimePassed = document.querySelector('.video-time__passed');
    const videoTimeTotal = document.querySelector('.video-time__total');

    const toggleIcon = () => {
        // Функция меняет иконку play-pause
        if (videoPlayer.paused) {
            videoButtonPlay.classList.remove('fa-pause');
            videoButtonPlay.classList.add('fa-play');
        } else {
            videoButtonPlay.classList.add('fa-pause');
            videoButtonPlay.classList.remove('fa-play');
        }
    }

    const tooglePLay = () => {
        // Запускает нативные методы play-pause
        if (videoPlayer.paused) {
            videoPlayer.play();
            console.log('[Play] - видео проигрывается');
        } else {
            videoPlayer.pause();
            console.log('[Pause] - видео на паузе');
        }
        
        // Функия toggleIcon запускается после нажатия play-pause
        toggleIcon();
    }

    const stopPlay = () => {
        // Обнуляет время просмотра видео
        videoPlayer.pause();
        videoPlayer.currentTime = 0;
        toggleIcon();
        console.log('[Stop] - видео остановлено');
    }

    // Добавляем ноль на панель управления ко времени,
    // если время меньше 10 секунд
    const addZero = n => n < 10 ? '0' + n : n;

    videoPlayer.addEventListener('click', tooglePLay);
    videoButtonPlay.addEventListener('click', tooglePLay);
    videoButtonStop.addEventListener('click', stopPlay)
    
    videoPlayer.addEventListener('timeupdate', () => {
        // Забираем нативные методы "текущее время" и "продолжительность"
        const currentTime = videoPlayer.currentTime;
        const duration = videoPlayer.duration;

        videoProgress.value = (currentTime / duration) * 100;

        // Конвертируем текущее время в минуты
        let minutePassed = Math.floor(currentTime / 60);
        let secondsPassed = Math.floor(currentTime % 60);

        // Конвертируем продолжительность в минуты
        let minuteTotal = Math.floor(duration / 60);
        let secondsTotal = Math.floor(duration % 60);

        // Отображаем время на панеле управления плеера
        videoTimePassed.textContent = `${addZero(minutePassed)}:${addZero(secondsPassed)}`;
        videoTimeTotal.textContent = `${addZero(minuteTotal)}:${addZero(secondsTotal)}`;
    });

    videoProgress.addEventListener('change', () => {
        const duration = videoPlayer.duration;
        const value = videoProgress.value;
        // Переключаем ползунок прогресса
        videoPlayer.currentTime = (value * duration) / 100;
    });
}
