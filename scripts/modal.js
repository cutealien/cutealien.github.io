var modalBtns = document.querySelectorAll('[data-modal-btn]')

modalBtns.forEach(btn => {
    const modal = document.querySelector(`[data-modal=${btn.dataset.modalBtn}]`)
    const modalBack = document.querySelector(`[data-modal-background=${btn.dataset.modalBtn}]`)
    btn.addEventListener('click', () => {
        modal.classList.add('modal--active')
    })
    modalBack.addEventListener('click', () => {
        modal.classList.remove('modal--active')
    })
});
