const toggleOptionsList = () => {

    const mainBlock = document.querySelector('.multibutton-block');
    const caption = mainBlock.querySelector('.multibutton-caption');
    const list = mainBlock.querySelector('.multibutton-list-block');
    const triggerIcon = mainBlock.querySelector('.multibutton__button img');
    const chatBot = mainBlock.querySelector('.options-chat');
    const createOrderBlock = mainBlock.querySelector('.create-order');
    const contactsBlock = mainBlock.querySelector('.contacts-block');

    const modals = mainBlock.querySelectorAll('.multibutton-modal');

    mainBlock.addEventListener('click', (e) => {

        if (e.target.closest('.multibutton__button')) {
            caption.classList.toggle('hide');
            list.classList.toggle('active');

            if (list.classList.contains('active')) {
                triggerIcon.setAttribute('src', 'images/icons/dots.svg');
            } else {
                triggerIcon.setAttribute('src', 'images/options-btn-icon.svg');
            };

            modals.forEach(el => {
                el.classList.remove('active');
            });

            if (list.classList.contains('active')) {
                caption.classList.add('hide');
            }
        };

        if (e.target.classList.contains('open-chat')) {
            chatBot.classList.add('active');
            list.classList.remove('active');
        };

        if (e.target.classList.contains('order-form')) {
            createOrderBlock.classList.add('active');
            list.classList.remove('active');
        };

        if (e.target.classList.contains('contacts')) {
            contactsBlock.classList.add('active');
            list.classList.remove('active');
        };

        if (e.target.closest('.modal-top__button')) {
            modals.forEach(el => {
                el.classList.remove('active');
                triggerIcon.setAttribute('src', 'images/options-btn-icon.svg');
                caption.classList.remove('hide');
            });
        };

    });
};

toggleOptionsList();

