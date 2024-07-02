// Файл для контроля видео

// Функция для остановки/запуска видео, в зависимости от кликабельной области (по умолчанию само видео)
export function controlVideo(video, iconPlay, iconPause, clickedObject = video) {
    clickedObject.addEventListener("click", () => {
        if (getComputedStyle(iconPlay).display === "block" && !video.ended) {
            iconPlay.style.display = "none";
            iconPause.style.display = "block";
            video.play()
        } else {
            iconPause.style.display = "none";
            iconPlay.style.display = "block";
            video.pause()
        }
    })
}



// Функция для отображения кнопки на устройствах по ширине больших мобильного
export function displayButton(video, button) {
    video.addEventListener("mouseout", () => {
        if (!video.paused) {
            button.style.display = "none"
        }
    })

    video.addEventListener("mouseover", () => {
        button.style.display = "flex"
    })

    button.addEventListener("mouseover", () => {
        button.style.display = "flex"
    })
}



// Функция для отображения кнопки на мобильных устройствах
export function mobileDisplayButton(video, button) {
    const mobileWidthMedia = window.matchMedia('(max-width: 767px)')

    function checkWidthMedia(mobileSize) {
        if (mobileSize) {
            button.style.display = "none"

            video.addEventListener("click", () => {
                if (video.paused) {
                    button.style.display = "block"
                }
            })
        }
    }

    button.addEventListener("click", () => {
        checkWidthMedia(mobileWidthMedia.matches)
    })

    video.addEventListener("click", () => {
        if (!video.paused) {
            checkWidthMedia(mobileWidthMedia.matches)
        }
    })
}