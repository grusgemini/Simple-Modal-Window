const modal = {
    modalContentContainer: document.querySelector('.modal-window'),
    modalOpenButton: document.querySelector('.show-modal'),
    modalCloseButton: document.querySelector('.modal-btn'),
    modalCloseXButton: document.querySelector('.close-x'),
    init: function(){
        this.modalOpenButton.addEventListener('click', () => {
            this.modalContentContainer.classList.add('show');
        });
        this.modalCloseButton.addEventListener('click', () => {
            this.modalContentContainer.classList.remove('show');
        });
        this.modalCloseXButton.addEventListener('click', () => {
            this.modalContentContainer.classList.remove('show');
        });

    }
}

modal.init();