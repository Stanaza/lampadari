// === BURGER ===
const header = document.querySelector('.section-header');
const mainNavigation = document.getElementById('main-navigation');

document.querySelector('.btn-burger').addEventListener('click', () => {
    header.classList.toggle('section-header--active-nav');

    if (header.classList.contains('section-header--active-nav')) {
        hideScroll()
    } else {
        showScroll()
    }
})


const hideScroll = () => {
    const scrollWidth = `${getScrollbarWidth()}px`;

    document.body.style.paddingRight = scrollWidth;
    document.body.style.overflow = 'hidden';

    mainNavigation.style.paddingRight = scrollWidth;
};
const showScroll = () => {
    document.body.style.paddingRight = '';
    document.body.style.overflow = 'visible';
    mainNavigation.style.paddingRight = ''
}

const resetNav = () => {
    header.classList.remove('section-header--active-nav')
    showScroll()
}

window.addEventListener('resize', resetNav)

const getScrollbarWidth = () => {
    const outer = document.createElement('div');

    outer.style.position = 'absolute';
    outer.style.top = '-9999px';
    outer.style.width = '50px';
    outer.style.height = '50px';
    outer.style.overflow = 'scroll';
    outer.style.visibility = 'hidden';

    document.body.appendChild(outer);
    const scrollbarWidth = outer.offsetWidth - outer.clientWidth;
    document.body.removeChild(outer);

    return scrollbarWidth;
}
// === /BURGER ===




// === POPUP ===
const popupLinks = document.querySelectorAll('.popup-link');
const body = document.querySelector('body');
const lockPadding = document.querySelectorAll('.lock-padding')

let unlock = true;

const timeout = 800;

if (popupLinks.length > 0) {
    for (let i = 0; i < popupLinks.length; i++) {
        const popupLink = popupLinks[i];
        popupLink.addEventListener('click', (e) => {
            const popupName = popupLink.getAttribute('href').replace('#', '');
            const currentPopup = document.getElementById(popupName);
            popupOpen(currentPopup);
            e.preventDefault();
        });
    }
}

const popupCloseIcon = document.querySelectorAll('.close-popup');
if (popupCloseIcon.length > 0) {
    for (let i = 0; i < popupCloseIcon.length; i++) {
        const el = popupCloseIcon[i]
        el.addEventListener('click', (e) => {
            popupClose(el.closest('.section-popup'));
            e.preventDefault();
        })
    }
}

function popupOpen(currentPopup) {
    if (currentPopup && unlock) {
        const popupActive = document.querySelector('.selection-popup.open');
        if (popupActive) {
            popupClose(popupActive, false)
        } else {
            bodyLock();
        }
        currentPopup.classList.add('open');
        currentPopup.addEventListener('click', (e) => {
            if (!e.target.closest('.section-popup-body-content')) {
                popupClose(e.target.closest('.section-popup'));
            }
        })
    }
}


function popupClose(popupActive, doUnlock = true) {
    if (unlock) {
        popupActive.classList.remove('open');
        if (doUnlock) {
            bodyUnLock();
        }
    }
}

function bodyLock() {
    const lockPaddingValue = window.innerWidth - document.querySelector('.wrapper').offsetWidth + 'px';
    if (lockPadding.length > 0) {
        for (let i = 0; i < lockPadding.length; i++) {
            const el = lockPadding[i];
            el.style.paddingRight = lockPaddingValue;
        }
    }
    body.style.paddingRight = lockPaddingValue;
    body.classList.add('lock');

    unlock = false;
    setTimeout(() => {
        unlock = true;
    }, timeout)
}

function bodyUnLock() {
    setTimeout(() => {
        if (lockPadding.length > 0) {
            for (let i = 0; i < lockPadding.length; i++) {
                const el = lockPadding[i];
                el.style.paddingRight = '0px';
            }
        }
        body.style.paddingRight = '0px';
        body.classList.remove('lock');
    }, timeout)


    unlock = false;
    setTimeout(() => {
        unlock = true;
    }, timeout)
}
// === / POPUP ===

// === SWIPER ===
new Swiper('.section-hero-image', {
    speed: 1500,
    pagination: {
        el: '.section-hero-image .dots',
        clickable: true
    },
})
// === / SWIPER ===

// === BOX-APPERTI ===
$('.section-hero-image-box-apperti-btn').on('click', () => {
    console.log('sdfsf')
    $('.section-hero-image-box-apperti-wrapper')
        .slideToggle();
    $('.section-hero-image-box-apperti-btn')
        .toggleClass('section-hero-image-box-apperti-btn--active');
});
// === / BOX-APPERTI ===