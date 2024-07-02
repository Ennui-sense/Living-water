import { openModal, openSubmenu } from "./modals.js";
import { controlVideo, displayButton, mobileDisplayButton } from "./controlVideo.js";
import { goTop, trackScroll } from "./goTop.js";
import { checkForm } from "./checkForm.js";
import { clearForm } from "./clearForm.js";


// Использование input-mask
const selector = document.querySelector("#tel");
const inputMask = new Inputmask("+7 999 999-99-99");
inputMask.mask(selector)



// Очень тоже нравится реализация этой структуры
// Для всех product-card с модификатором --new создаются кнопки, показывающие их новизну
const newProducts = document.querySelectorAll(".product-card--new")
newProducts.forEach(elem => {
    elem.firstElementChild.insertAdjacentHTML(
        "afterbegin",
        '<button class="product-card__button button button__small">Новый</button>')
})



// Кнопка скролла вверх и соответствующие функции
const backToTopButton = document.querySelector("#back-to-top-button");

goTop(backToTopButton)
trackScroll(backToTopButton)



// Контроль и отображение кнопки воспроизведения
const machineVideo = document.querySelector(".machine__video")
const machineButton = document.querySelector(".machine__button");
const machineIconPlay = document.querySelector(".play-button__icon-play")
const machineIconPause = document.querySelector(".play-button__icon-pause")

controlVideo(machineVideo, machineIconPlay, machineIconPause)
controlVideo(machineVideo, machineIconPlay, machineIconPause, machineButton)

displayButton(machineVideo, machineButton)
mobileDisplayButton(machineVideo, machineButton)



// Открытие модального меню-окна
const openMenuButton = document.querySelector(".menu-modal__open-button")
const menuModal = document.querySelector(".menu-modal")
const menuModalInner = document.querySelector(".menu-modal__inner")
const closeMenuButton = document.querySelector(".menu-modal__close-button")

openModal(openMenuButton, menuModal, menuModalInner, closeMenuButton, backToTopButton)



// Открытие модального окна-корзины
const openCartButton = document.querySelector(".cart-modal__open-button")
const cartModal = document.querySelector(".cart-modal")
const cartModalInner = document.querySelector(".cart-modal__inner")
const closeCartButton = document.querySelector(".cart-modal__close-button")

openModal(openCartButton, cartModal, cartModalInner, closeCartButton, backToTopButton)



// Открытие сабменю каталога
const submenuCatalogLink = document.querySelector(".header-bottom__catalog")
const submenuCatalog = document.querySelector(".submenu");

openSubmenu(submenuCatalogLink, submenuCatalog)



// Открытие модального окна с бизнес-планом, проверка формы и ее очистка
const openPlanButtons = document.querySelectorAll(".plan-modal__open-button");
const planModal = document.querySelector(".plan-modal");
const planModalInner = document.querySelector(".plan-modal__inner");
const closePlanButton = document.querySelector(".plan-modal__close-button");

openPlanButtons.forEach(elem =>
    openModal(elem, planModal, planModalInner, closePlanButton, backToTopButton))


const planModalForm = document.querySelector("#plan-modal-form");
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
        {
            validator: (value) => {
                const phone = selector.inputmask.unmaskedvalue();
                return Boolean(Number(phone) && phone.length === 10)
            },
            errorMessage: "Введите ваш номер телефона"
        }
    ])

clearForm(planModalForm, planValidation, closePlanButton, planModal)


const submitPlanButton = document.querySelector(".plan-modal__form-button");
const planInputs = document.querySelectorAll(".plan-modal__form-input");

checkForm(submitPlanButton, planInputs)



// Открытие модального окна с подпиской и очистка формы
const openSubscribeButton = document.querySelector(".subscribe-modal__open-button");
const subscribeModal = document.querySelector(".subscribe-modal");
const subscribeModalInner = document.querySelector(".subscribe-modal__inner");
const closeSubscribeButton = document.querySelector(".subscribe-modal__close-button");

openModal(openSubscribeButton, subscribeModal, subscribeModalInner, closeSubscribeButton, backToTopButton)


const subscribeModalForm = document.querySelector("#subscribe-modal-form");
const subscribeValidation = new JustValidate("#subscribe-modal-form", {errorLabelStyle: {color: "#C0C0C0"}});
subscribeValidation
    .addField("#subscribe-email", [
        {rule: 'required', errorMessage: "Введите вашу электронную почту"},
        {rule: "email", errorMessage: "Введите вашу электронную почту"}
    ])

clearForm(subscribeModalForm, subscribeValidation, closeSubscribeButton, subscribeModal)