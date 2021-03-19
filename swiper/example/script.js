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

        /* 
            // Буллеты
            clickable: true,
            // Динамические буллеты
            // dynamicBullets: true,
            // Кастомный вывод буллетов
            renderBullet: function (index, className) {
                return '<span class="' + className + '">' + (index + 1) + '</span>';
            }, 
        */
        
        
            // Вместо буллетов можно вставить фракцию (буллеты нужно будет убрать из кода JS)
            // Фракция, числа показывают сколько слайдов и какая сейчас позиция
            type: 'fraction',
            // Кастомный вывод фракции
            renderFraction: function (currentClass, totalClass) {
                return 'Фото <span class="' + currentClass + '"></span>'+ ' из ' +
                    '<span class="' + totalClass + '"></span>';
            },
        

        // Прогрессбар (можно добавить)
        // type: 'progressbar',
    },
    // Скролл
    scrollbar: {
        el: '.swiper-scrollbar',
        // Возможность перетаскивать скролл
        draggable: true,
    },
    // Перетаскивание и свайп (по-умолчанию сразу имеется)
    simulateTouch: true, // false отключаем на компьтере
    touchRatio: 1,       // Чувствительность свайпа
    touchAngle: 45,      // Угол срабатывания
    grabCursor: true,    // Курсор перетаскивания

    slideToClickedSlide: true, // Переключение на слайд при клике на него

    // Навигация по хешу
    hashNavigation: {
        // Отслеживать состояние
        watchState: true,
    },

    // Навигация с помощью клавиатуры
    keyboard: {
        enabled: true,        // Включить
        onlyInViewport: true, // Только в пределах вьюпорта
        pageUpDown: true,     // Управление клавишами page
    },

    // Навигация с помощью колеса мыши
    mousewheel: {
        sensitivity: 1, // Чувствительность колеса
        // eventsTarget: ".image-slider" // Этот параметр не используют если слайдеров много
    },

    // Высота слайдера подстраивается под текущее изображение
    autoHeight: true,

    // Количество слайдов для показа
    slidesPerView: 3, // 2.3, 'auto'

    // Количество пролистываемых слайдов
    // slidesPerGroup: 2,

    // Отключение слайдера, если изображений меньше чем slidesPerView
    watchOverflow: true,

    // Отступ между слайдами
    spaceBetween: 30,

    // Активный слайд по центру
    // centeredSlides: true,

    // Номер активного слайда с которого начнется сам слайдер
    // initialSlide: 0, // Отчет с нуля

    // Несколько рядов, отключаем автовысоту: autoHeight: false, изменяем CSS
    // slidesPerColumn: 2,

    // Бесконечный слайдер, скрол отключаем, несколько рядов не работает
    // loop: true,

    // Кол-во дублирующих слайдов. Если слайдер бесконечен и slidesPerView: 'auto'
    // loopedSlides: 2,

    // Свободный режим, слайды не зафиксированы
    // freeMode: true,

    // Автоматическая прокрутка слайда
    // autoplay: {
    //     delay: 1000,                 // Пауза между прокруткой
    //     stopOnLastSlide: true,       // Закончить на последнем слайде
    //     disableOnInteraction: false, // Отключить после ручного переключения
    // },

    // Скорость прокрутки
    speed: 1000,

    // Вертикальный слайдер, добавляем CSS
    // direction: 'vertical', // 'horizontal'

    // Эффекты переключения слайдов
    effect: 'slide', // Листание (по-умолчанию)
    // effect: 'fade', // Прозрачность
    // Дополнеие к fade, параллельная смена прозрачности
    // fadeEffect: {
    //     crossFade: true,
    // },
    // effect: 'flip', // Переворот
    // Дополнеие к flip, параллельная смена прозрачности
    // flipEffect: {
    //     slideShadows: true, // Тень
    //     limitRotation: true, // Показ только активного слайда
    // }
    // effect: 'cube', // 3D-куб
    // Дополнение к cube, настройка тени, добавляем CSS
    // cubeEffect: {
    //     slideShadows: true,
    //     shadow: true,
    //     shadowOffset: 20,
    //     shadowScale: 0.94,
    // },
    // effect: 'coverflow',
    // coverflowEffect: {
    //     rotate: 20,         // Угол
    //     stretch: 50,        // Наложение
    //     slideShadows: true, // Тень
    // },

    // Адаптивность слайдера, меняем настройки в зависимости от ширины экрана
    breakpoints: {
        320: {
            slidesPerView: 1,
        },
        480: {
            slidesPerView: 2,
        },
        992: {
            slidesPerView: 3,
        },
    },

    // Lazy Loading. Отложенная подгрузка картинок. CSS class="swiper-lazy".
    // Увеличиваем изображение при двойном клике, .swiper-zoom-container
    // zoom: {
    //     maxRatio: 5, // Максимальное увеличение
    //     minRatio: 1, // Минимальное увеличение
    // },

    // Показ превью, кол-во миниатюр должно быть равно, количеству слайдов
    thumbs: {
        swiper: {
            el: '.image-mini-slider',
            slidesPerView: 5, // Количество миниатюр для показа
        },
    },
});
