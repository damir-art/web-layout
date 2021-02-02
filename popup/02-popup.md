# Попап
https://www.youtube.com/watch?v=qoO1ZNi1LyI

## HTML
    <a class="popup-link" href="#popup">Попап №1</a>

    <div id="popup" class="popup">
        <div class="popup__body">
            <div class="popup__content">
                <a href="#" class="popup__close close-popup">X</a>
                <div class="popup__title">Это модальное окно №1</div>
                <div class="popup__text">
                    <a class="popup-link" href="#popup_2">Попап №2</a> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere a, omnis debitis id ea porro incidunt deleniti ipsa quo, ratione fugit ipsam explicabo quam perferendis laudantium doloremque, alias quaerat iusto quod! Dolores.
                </div>
            </div> <!-- popup__content -->
        </div> <!-- popup__body -->
    </div> <!-- #popup -->

## JavaScript
    // не поддерживается в Internet Explorer 11

    const popupLinks = document.querySelectorAll('.popup-link');
    const body = document.querySelector('body');
    const lockPadding = document.querySelectorAll('.lockPadding');

    let unlock = true;

    const timeout = 800;

    if(popupLinks.length > 0) {
        for (let index = 0; index < popupLinks.length; index++) {
            const popupLink = popupLinks[index];
            popupLink.addEventListener('click', function(e) {
                const popupName = popupLink.getAttribute('href').replace('#', '');
                const currentPopup = document.getElementById(popupName);
                popupOpen(currentPopup);
                e.preventDefault();
            });
        }
    }

    const popupCloseIcon = document.querySelectorAll('.close-popup');
    if (popupCloseIcon.length > 0) {
        for (let index = 0; index < popupCloseIcon.length; index++) {
            const el = popupCloseIcon[index];
            el.addEventListener('click', function (e) {
                popupClose(el.closest('.popup'));
                e.preventDefault();
            });
        }
    }

    function popupOpen(currentPopup) {
        if (currentPopup && unlock) {
            const popupActive = document.querySelector('.popup.open');
            if (popupActive) {
                popupClose(popupActive, false);
            } else {
                bodyLock();
            }
            currentPopup.classList.add('open');
            currentPopup.addEventListener('click', function (e) {
                if (!e.target.closest('.popup__content')) {
                    popupClose(e.target.closest('.popup'));
                }
            });
        }
    }

    function popupClose(popupActive, doUnlock = true) {
        if (unlock) {
            popupActive.classList.remove('open');
            if (doUnlock) {
                bodyUnlock();
            }
        }
    }

    function bodyLock() {
        const lockPaddingValue = window.innerWidth - document.querySelector('.wrapper').offsetWidth + 'px';

        if (lockPadding.length > 0) {
            for (let index = 0; index < lockPadding.length; index++) {
                const el = lockPadding[index];
                el.style.paddingRight = lockPaddingValue;
            }
        }
        body.style.paddingRight = lockPaddingValue;
        body.classList.add('lock');

        unlock = false;
        setTimeout(function () {
            unlock = true;
        }, timeout);
    }

    function bodyUnLock() {
        setTimeout (function () {
            if (lockPadding.length > 0) {
                for (let index = 0; index < lockPadding.length; index++) {
                    const el = lockPadding[index];
                    el.style.paddingRight = '0px';
                }
            }
            body.style.paddingRight = '0px';
            body.classList.remove('lock');
        }, timeout);

        unlock = false;
        setTimeout(function () {
            unlock = true;
        }, timeout);
    }

    document.addEventListener('keydown', function (e) {
        if (e.code == 'Escape') {
            const popupActive = document.querySelector('.popup.open');
            popupClose(popupActive);
        }
    });
