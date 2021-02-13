# Стандартный CSS и JS-файл

## CSS

    /* CSS-слайдера */
    .image-slider {
        padding: 30px 0 70px 0;
    }
    /* .image-slider__wrapper {

    }
    .image-slider__slide {

    } */
    .image-slider__image {
        text-align: center;
    }
    .image-slider__image img {
        max-width: 100%;
        /* object-fit: contain; */
    }

    /* Стрелки слайдера, иконочный шрифт */
    .image-slider .swiper-button-prev::after,
    .image-slider .swiper-button-next::after {
        color: #fff;
        font-size: 80px;
    }

    /* Пагинация слайдера */
    .image-slider .swiper-pagination {
        bottom: 0;
    }
    /* Буллеты слайдера, span */
    .image-slider .swiper-pagination-bullet {
        width: 20px;
        height: 20px;
        line-height: 20px;
        font-size: 14px;
        background-color: #fff;
    }

## JavaScript

    new Swiper('.image-slider', {
        // Показываем стрелки
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        // Навигация
        // Буллеты, текущее положение, прогрессбар
        pagination: {
            el: '.swiper-pagination',
            // Буллеты
            clickable: true,
        },
    });
