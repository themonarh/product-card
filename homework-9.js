const outputEmail = document.querySelector('#email-form');
outputEmail.addEventListener('submit', (event) => {
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());
    console.log(data);
})

const openModal = document.querySelector('.register-button')
const closeModal = document.querySelector('.modal-close-button')
const modalWindow = document.querySelector('.modal')

openModal.addEventListener('click', () => {
    modalWindow.classList.add('modal-showed');
})

closeModal.addEventListener('click', () => {
    modalWindow.classList.remove('modal-showed')
})

let user = undefined
const registrForm = document.querySelector('#register-form')
registrForm.addEventListener('submit', (event) => {
    event.preventDefault();
    if (!registrForm.checkValidity()) {
        alert('Неверный формат заполнения')
        return
    }
    const form = event.target
    const formData = new FormData(form)
    const formInfo = Object.fromEntries(formData.entries())
    if (formInfo.password !== formInfo.repeatPassword) {
        alert('Пароли не совпадают')
        return
    }
    user = formInfo
    user.createOn = new Date()
    console.log(user)
    modalWindow.classList.remove('modal-showed')
})