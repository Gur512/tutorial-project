'use strict';

function select(selector, scope = document) {
    return scope.querySelector(selector);
}

function listen(event, selector, callback) {
    return selector.addEventListener(event, callback);
}

const cardOfImage = select('.image-card');
const headingText = select('.heading');
const btn = select('.btn-1');


listen ('mouseover', btn, () => {
    btn.classList.add('hovered');
});

listen('mouseout', btn, () => {
    btn.classList.remove('hovered');
});


listen('scroll', window, () => {
    cardOfImage.forEach(card => {
        const cardPosition = card.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if (cardPosition >= 0 && cardPosition.bottom <= windowHeight) {
            card.classList.add('visible');
        }
    });
});
