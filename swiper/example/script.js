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
        
        /*
            // Вместо буллетов можно вставить фракцию (буллеты нужно будет убрать из кода JS)
            // Фракция, числа показывают сколько слайдов и какая сейчас позиция
            type: 'fraction',
            // Кастомный вывод фракции
            renderFraction: function (currentClass, totalClass) {
                return 'Фото <span class="' + currentClass + '"></span>'+ ' из ' +
                    '<span class="' + totalClass + '"></span>';
            },
        */

        // Прогрессбар (можно добавить)
        type: 'progressbar',

    },
});
