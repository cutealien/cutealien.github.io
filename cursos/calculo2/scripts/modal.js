var modalBtns = document.querySelectorAll('[data-modal-btn]')
var modalsBack = document.querySelectorAll(`[data-modal-background]`)

if(modalBtns.length > 0) {
    modalBtns.forEach(btn => {
        const modal = document.querySelector(`[data-modal=${btn.dataset.modalBtn}]`)
        // const modalBack = document.querySelector(`[data-modal-background=${btn.dataset.modalBtn}]`)
        btn.addEventListener('click', () => {
            modal.classList.add('modal--active')
            modal.querySelector('.modal__content').scrollTop = 0
        })
        // modalBack.addEventListener('click', () => {
        //     modal.classList.remove('modal--active')
        // })
    });
}

modalsBack.forEach(modalBack => {
    modalBack.addEventListener('click', () => {
        document.querySelector(`[data-modal=${modalBack.dataset.modalBackground}]`).classList.remove('modal--active')
    })
})