// Файл для кнопки пролистывания вверх

// Функция для самого скролла вверх
export function goTop(backToTopButton) {
    backToTopButton.addEventListener("click", () => {
        window.scrollTo({top: 0, behavior: "smooth"})
    });
}

// Функция для автоматического появления/исчезновения кнопки
export function trackScroll(backToTopButton) {
    window.addEventListener("scroll", () => {
        const offset = window.scrollY;
        const coords = document.documentElement.clientHeight;

        if (offset > coords) {
            backToTopButton.classList.add("active")
        } else {
            backToTopButton.classList.remove("active")
        }
    });
}