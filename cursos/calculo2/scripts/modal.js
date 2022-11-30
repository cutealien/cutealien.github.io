var modalBtns = document.querySelectorAll('[data-modal-btn]')

modalBtns.forEach(btn => {
    const modal = document.querySelector(`[data-modal=${btn.dataset.modalBtn}]`)
    const modalBack = document.querySelector(`[data-modal-background=${btn.dataset.modalBtn}]`)
    btn.addEventListener('click', () => {
        modal.classList.add('modal--active')
        modal.querySelector('.modal__content').scrollTop = 0
        // modal.scrollTop = 0
        // document.querySelector('body').style.overflow = 'hidden'
    })
    modalBack.addEventListener('click', () => {
        modal.classList.remove('modal--active')
        document.querySelector('body').style.overflow = 'visible'
    })
});
