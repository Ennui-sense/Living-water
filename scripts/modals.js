// Файл для работы с модальными окнами (включая сабменю)
// Так как поведение у модалок и сабменю хоть и похоже, но все равно отличается, я решил оформить функции по разному

export function openModal(openButton, modal, modalInner, closeButton, backToTopButton) {
    openButton.addEventListener("click", () => {
        modal.classList.add("open")
        document.body.classList.add("modal-open")
        backToTopButton.classList.add("disable")
    })

    closeButton.addEventListener("click", () => {
        modal.classList.remove("open")
        document.body.classList.remove("modal-open")
        backToTopButton.classList.remove("disable")
    })

    modalInner.addEventListener("click", event => {
        event._isClickWithInModal = true
    })

    modal.addEventListener("click", event => {
        if (event._isClickWithInModal) return;
        event.currentTarget.classList.remove("open");
        document.body.classList.remove("modal-open")
        backToTopButton.classList.remove("disable")
    })
}



export function openSubmenu(openLink, submenu) {
    openLink.addEventListener("click", () => {
        submenu.classList.add("open")
        openLink.classList.add("active")
    })

    window.addEventListener('click', function(event){
        if (submenu.contains(event.target) || openLink.contains(event.target)) {
            {}
        } else {
            submenu.classList.remove("open")
            openLink.classList.remove("active")
        }
    })
}