# Слайдер
https://www.youtube.com/watch?v=2Bo619QsSE4
Слайдер можно настраивать по количеству изображений и прокуртки. Кнопки сереют, если изображения закончились.

## HTML

    <div class="banner__wrap slider-container">
        <div class="slider-track">
            <div class="slider-item ">
                <div class="banner__title">У тебя<br /> к этому<br /> талант</div>
                <img class="banner__img" src="design/banner.png" width="1110" height="400" alt="Баннер компании Гросс Маркет" />
            </div>
            <div class="slider-item">
                <div class="banner__title">У тебя<br /> всё под<br /> контролем</div>
                <img class="banner__img" src="design/banner-2.png" width="1110" height="400" alt="Баннер компании Гросс Маркет" />
            </div>
        </div> <!-- slider-track -->
        <div class="btn btn--banner">
            <button class="btn__item btn__item--left btn-prev"><img class="btn__arrow" src="design/banner-arrow-left-gray.png" width="10px" height="10px" alt="" /></button>
            <button class="btn__item btn__item--right btn-next"><img class="btn__arrow" src="design/banner-arrow-right.png" width="10px" height="10px" alt="" /></button>
            <img class="btn__line" src="design/banner-btn-line.png" width="1" height="28" alt="" />
        </div>
    </div> <!-- slider-container -->

## CSS

    .slider-container {
        overflow: hidden;
        background-color: pink;
    }

    .slider-track {
        display: flex;
        transition: 0.2s;
        background-color: yellow;
    }
    .slider-item {
        // min-width: 1110px;
        height: 400px;
    }

    .banner__title {
        position: absolute;
        top: 48px;
        font-size: 72px;
        line-height: 66px;
        font-weight: 500;
    }

    .banner__img {
        display: block;
    }

    .btn--banner {
        position: absolute;
        bottom: 48px;
    }

## JavaScript

    let   position       = 0;
    const slidesToShow   = 1; // сколько элементов показывать
    const slidesToScroll = 1; // сколько элементов проскроливать
    const container      = document.querySelector('.slider-container');
    const track          = document.querySelector('.slider-track');
    const btnPrev        = document.querySelector('.btn-prev');
    const btnNext        = document.querySelector('.btn-next');
    const items          = document.querySelectorAll('.slider-item');
    const itemsCount     = items.length;
    const itemWidth      = container.clientWidth / slidesToShow;
    const movePosition   = slidesToScroll * itemWidth;

    items.forEach((item) => {
        item.style.minWidth = `${itemWidth}px`;
    });

    btnNext.addEventListener('click', () => {
        const itemsLeft = itemsCount - (Math.abs(position) + slidesToShow * itemWidth) / itemWidth;
        
        position -= itemsLeft >= slidesToScroll ? movePosition : itemsLeft * itemWidth;

        setPosition();
        checkBtns();
    });

    btnPrev.addEventListener('click', () => {
        const itemsLeft = Math.abs(position) / itemWidth;

        position += itemsLeft >= slidesToScroll ? movePosition : itemsLeft * itemWidth;

        setPosition();
        checkBtns();
    });

    const setPosition = () => {
        track.style.transform = `translateX(${position}px)`;
    }

    // Проверка кнопок
    const checkBtns = () => {
        btnPrev.disabled = position === 0;
        
        btnNext.disabled = position <= -(itemsCount - slidesToShow) * itemWidth;
    }

    checkBtns();
