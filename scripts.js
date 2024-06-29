const body = document.querySelector("body")

const selector = document.querySelector("#tel");
const inputMask = new Inputmask("+7 999 999-99-99");
inputMask.mask(selector)



const menuButton = document.querySelector(".menu-button.mobile-visible")
const menuModal = document.querySelector(".menu-modal")
const menuModalInner = document.querySelector(".menu-modal__inner")
const closeMenuButton = document.querySelector(".close-button")

menuButton.addEventListener("click", () => {
    menuModal.classList.add("open")
    body.classList.add("modal-open")
})

closeMenuButton.addEventListener("click", () => {
    menuModal.classList.remove("open")
    body.classList.remove("modal-open")
})

menuModalInner.addEventListener("click", event => {
    event._isClickWithInModal = true
})

menuModal.addEventListener("click", event => {
    if (event._isClickWithInModal) return;
    event.currentTarget.classList.remove("open");
})



const planModalForm = document.querySelector("#plan-modal-form");
const planButtons = document.querySelectorAll(".download__button");
const planModal = document.querySelector(".plan-modal");
const planModalInner = document.querySelector(".plan-modal__inner");
const closePlanModal = document.querySelector(".plan-modal__close-button");

planButtons.forEach(elem => elem.addEventListener("click", () => {
    planModal.classList.add("open")
    body.classList.add("modal-open")
}))

closePlanModal.addEventListener("click", () => {
    planModal.classList.remove("open")
    body.classList.remove("modal-open")
    planModalForm.reset()
    planValidation.refresh()
})

planModalInner.addEventListener("click", event => {
    event._isClickWithInModal = true
})

planModal.addEventListener("click", event => {
    if (event._isClickWithInModal) return;
    event.currentTarget.classList.remove("open");
    body.classList.remove("modal-open")
    planModalForm.reset()
    planValidation.refresh()
})

const planValidation = new JustValidate("#plan-modal-form", {errorLabelStyle: {color: "#C0C0C0"}});
planValidation
    .addField("#name", [
        {rule: 'required', errorMessage: "Введите ваше имя"},
        {rule: "minLength", errorMessage: "Введите ваше имя", value: 2}
    ])
    .addField("#email", [
        {rule: 'required', errorMessage: "Введите вашу электронную почту"},
        {rule: "email", errorMessage: "Введите вашу электронную почту"}
    ])
    .addField("#tel", [
        {rule: 'required', errorMessage: "Введите ваш номер телефона"},
        {validator: (value) => {
                const phone = selector.inputmask.unmaskedvalue();
                return Boolean(Number(phone) && phone.length === 10)
            },
            errorMessage: "Введите ваш номер телефона"
        }
    ])


const subscribeModalForm = document.querySelector("#subscribe-modal-form");
const subscribeButton = document.querySelector(".menu-button--transparent");
const subscribeModal = document.querySelector(".subscribe-modal");
const subscribeModalInner = document.querySelector(".subscribe-modal__inner");
const closeSubscribeButton = document.querySelector(".subscribe-modal__close-button");

subscribeButton.addEventListener("click", () => {
    subscribeModal.classList.add("open")
    body.classList.add("modal-open")
})

closeSubscribeButton.addEventListener("click", () => {
    subscribeModal.classList.remove("open")
    body.classList.remove("modal-open")
    subscribeModalForm.reset()
    subscribeValidation.refresh()
})

subscribeModalInner.addEventListener("click", event => {
    event._isClickWithInModal = true
})

subscribeModal.addEventListener("click", event => {
    if (event._isClickWithInModal) return;
    event.currentTarget.classList.remove("open");
    body.classList.remove("modal-open")
    subscribeModalForm.reset()
    subscribeValidation.refresh()
})

const subscribeValidation = new JustValidate("#subscribe-modal-form", {errorLabelStyle: {color: "#C0C0C0"}});
subscribeValidation
    .addField("#subscribe-email", [
        {rule: 'required', errorMessage: "Введите вашу электронную почту"},
        {rule: "email", errorMessage: "Введите вашу электронную почту"}
    ])



const backToTopButton = document.querySelector("#back-to-top-button")
window.addEventListener("scroll", trackScroll)

function trackScroll() {
    const offset = window.pageYOffset;
    const coords = document.documentElement.clientHeight;

    if (offset > coords) {
        backToTopButton.classList.add("active")
    } else {
        backToTopButton.classList.remove("active")
    }
}




// function downloadPlan() {
//     document.querySelector("#download-file").click()
// }