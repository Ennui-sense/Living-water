// Проверка каждого инпута на валидность и незаполненность
// Также эта функция реализовывает загрузку файла (я ООООООЧЕНЬ долго ебался с этим)
// Как хорошо, что еще со времен пайтона я пользуюсь счетчиками))

export function checkForm(submitButton, inputs) {
    let counter = 0;

    submitButton.addEventListener("click", () => {
        counter = 0

        inputs.forEach(input => {
            if (input.validity.valid && input.value !== "") {
                counter += 1
            }
        })

        if (counter === inputs.length) {
            const link = document.createElement("a");
            link.setAttribute("href", "test.txt")
            link.setAttribute("download", "абэбик.txt")
            link.click()
        }
    })
}