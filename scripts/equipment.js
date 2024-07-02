// ЗРЯ ТЫ СЮДА ПОЛЕЗ...

const filters = document.querySelectorAll(".equipment__form-filter")
filters.forEach(elem => {
    const choices = new Choices(elem, {searchEnabled: false, itemSelectText: ""})
})