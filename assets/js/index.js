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


listen (btn, 'mouseover', () => {
    btn.classList.add('hovered');
});

listen(btn, 'mouseout', () => {
    btn.classList.remove('hovered');
});


listen(window, 'scroll', () => {
    cardOfImage.forEach(card => {
        const cardPosition = card.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if (cardPosition >= 0 && cardPosition.bottom <= windowHeight) {
            card.classList.add('visible');
        }
    });
});
