import { work1 } from './work1.js';
import { work2 } from './work2.js';
import { work3 } from './work3.js';

const worksData         = [work1, work2, work3];
const mail              = document.querySelector('.mail');
const workpanelTitle    = document.querySelector('.workpanel__title');
const workpanelLabels   = document.querySelector('.workpanel__scopelabels');
const workpanelDesc     = document.querySelector('.workpanel__description');
const workpanelButton   = document.querySelector('.workpanel__button');
const list              = document.querySelector('.splide__list');
const detail            = document.querySelector('.detail');
const detailButton      = document.querySelector('.detail__button');
const detailTitle       = document.querySelector('.detail__title');
const detailContents    = document.querySelector('.detail__contents');
const leftkeyTooltip    = document.querySelector('.leftkey');
const rightkeyTooltip   = document.querySelector('.rightkey');
const scrim             = document.querySelector('.scrim');

const prevKeys          = ['a', 'q', 'k', 'ArrowLeft'];
const nextKeys          = ['d', 'e', 'j', 'ArrowRight'];
const toggleKeys        = ['w', 's', 'o', 'f'];

const TH_SWIPE          = window.innerWidth * 0.25
let touchStartX         = 0;
let isSwitching         = false;

function updateContent(index) {
    const data = worksData[index];

    detailContents.scrollTop    = 0;
    workpanelTitle.textContent  = data.title;
    workpanelDesc.textContent   = data.description;
    detailTitle.textContent     = data.title;
    detailContents.innerHTML    = data.infoHTML ?? '';
    workpanelLabels.innerHTML   = '';
    data.category.forEach(cat => {
        const li = document.createElement('li');
        li.textContent = cat;
        workpanelLabels.appendChild(li);
    });
}

function switchContent(index) {
    if (isSwitching) return;
    isSwitching = true;

    detail.classList.add('is-switching-out');

    detail.addEventListener('animationend', () => {
        updateContent(splide.index);
        detail.classList.replace('is-switching-out', 'is-switching-in');

        detail.addEventListener('animationend', () => {
            detail.classList.remove('is-switching-in');
            delete detail.dataset.direction;
            isSwitching = false;
        }, { once: true });
    }, { once: true });
}

function goPrev() {
    detail.dataset.direction = 'prev';
    splide.go('<');
}
function goNext() {
    detail.dataset.direction = 'next';
    splide.go('>');
}

function handleOpenOverlay() {
    scrim.classList.add('is-open');
    detail.classList.add('is-open');
    detail.setAttribute('aria-hidden', 'false');
    document.addEventListener('keydown', handleTrapFocus);
    detail.removeAttribute('inert'); 
}

function handleCloseOverlay() {
    scrim.classList.remove('is-open');
    detail.classList.remove('is-open', 'is-switching-out', 'is-switching-in');
    detail.setAttribute('aria-hidden', 'true');
    document.removeEventListener('keydown', handleTrapFocus);
    delete detail.dataset.direction;
    isSwitching = false;
    workpanelButton.focus();                                                                // detail内部にfocusが残るのを防ぐため
    detail.setAttribute('inert', ''); 
}

function handleTrapFocus(e) {                                                               // Overlay内外でFocusを分離させるため
    if (e.key !== 'Tab') return;
    
    const focusable =   detail.querySelectorAll('a, button');
    const first     =   focusable[0];
    const last      =   focusable[focusable.length - 1];

    if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
    } else if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
    }
}

function handleKeydown(e) {
    if (e.key === 'Escape' && detail.classList.contains('is-open')) {
        handleCloseOverlay();
        return;
    }
    if (toggleKeys.includes(e.key)) {
        detail.classList.contains('is-open')
            ? handleCloseOverlay()
            : handleOpenOverlay();
        return;
    }
    if (prevKeys.includes(e.key)) goPrev();
    if (nextKeys.includes(e.key)) goNext();
}

function handleTouchStart(e) {
    touchStartX = e.changedTouches[0].clientX;
}

function handleSwipe(e) {
    const diff = e.changedTouches[0].clientX - touchStartX;
    if (Math.abs(diff) < TH_SWIPE) return;
    diff < 0 ? goNext() : goPrev();
}

function handleCopyMail() {
    const addr = ['mail', 'adachigeorge.com'].join('@');
    navigator.clipboard.writeText(addr);
    mail.dataset.label = 'Copied!';
    mail.classList.add('is-copied');
    setTimeout(() => {
        mail.classList.remove('is-copied');
        setTimeout(() => {
            mail.dataset.label = 'Click to copy';
        }, 200);    
    }, 700);
}

worksData.forEach(work => {
    list.insertAdjacentHTML('beforeend',
    `<li class="splide__slide"><img src="${work.image}" alt="${work.title}" loading="lazy" decoding="async"></li>`);
});

updateContent(0);

const splide = new Splide('.splide', {
    type:       'fade',
    speed:      1500,
    arrows:     false,
    pagination: true,
    keyboard:   'global',
    drag:       false,
}).mount();

splide.on('move', () => { switchContent(splide.index); });

const events = [
//  targets             events          handlers                    options
    [document,          'keydown',      handleKeydown],
    [document,          'touchstart',   handleTouchStart,          { passive: true }],
    [document,          'touchend',     handleSwipe],
    [mail,              'click',        handleCopyMail],
    [list,              'click',        handleOpenOverlay],
    [workpanelButton,   'click',        handleOpenOverlay],
    [detailButton,      'click',        handleCloseOverlay],
    [leftkeyTooltip,    'click',        goPrev],
    [rightkeyTooltip,   'click',        goNext],
    [scrim,             'click',        handleCloseOverlay],
];

events.forEach(([target, event, handler, option]) => target.addEventListener(event, handler, option));

if (!CSS.supports('animation-timeline', 'scroll()')) {
    console.log('このサイトではArc/Chrome/EdgeなどBlinkブラウザ、もしくはWebKitブラウザからの閲覧を強くおすすめします。\nCan I use animation-timeline ?(https://caniuse.com/?search=animation-timeline)より。');
}