// Файл для очистки формы после закрытия модальнах окон

export function clearForm(form, validation, closeButton, modal) {
    closeButton.addEventListener("click", () => {
        form.reset()
        validation.refresh()
    })

    modal.addEventListener("click", event => {
        if (event._isClickWithInModal) return;
        form.reset()
        validation.refresh()
    })
}