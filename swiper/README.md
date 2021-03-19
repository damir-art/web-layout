# Swiper
- https://swiperjs.com/get-started

Плагин Swiper, современный слайдер.
- написан на чистом JavaScript
- CSS-классы слайдера могут быть изменены
- Если добавить слайдер внутрь флекс-элемента, то могут возникнуть проблемы
    - чтобы избежать этих проблем
    - добавьте флекс элементу CSS-свойство `min-width: 0;`
    - обновите страницу через `Ctrl + F5`
- Проблемы могут возникнуть если поместить слайдер в изначально скрытый объект, например элемент таба
- Адаптивен изначально
- Если добавить `dir="rtl"` в `<div dir="rtl" class="image-slider swiper-container">` то слайды будут крутиться с конца до начала
- Можно помещать, слайдер внутри слайдера

## Подключение

    CSS: <link rel="stylesheet" href="https://unpkg.com/swiper/swiper-bundle.min.css" />
    JS: <script src="https://unpkg.com/swiper/swiper-bundle.min.js"></script>

## HTML-каркас слайдера

    <!-- Главный контейнер слайдера -->
    <div class="swiper-container">
        <!-- Дополнительная обязательная оболочка -->
        <div class="swiper-wrapper">
            <!-- Слайды -->
            <div class="swiper-slide">
                <!-- Контент внутри слайдера -->
                Текст, картинки, другие слайдеры, теги и т.д.
            </div>
            <div class="swiper-slide">
                <!-- Контент внутри слайдера -->
                Текст, картинки, другие слайдеры, теги и т.д.
            </div>
            <div class="swiper-slide">
                <!-- Контент внутри слайдера -->
                Текст, картинки, другие слайдеры, теги и т.д.
            </div>
            <!-- и так далее... -->
        </div>

        <!-- Добавляем, если нам нужны стрелки управления -->
        <div class="swiper-button-prev"></div>
        <div class="swiper-button-next"></div>

        <!-- Добавляем, если нам нужна пагинация -->
        <div class="swiper-pagination"></div>

        <!-- Добавляем если нам нужна полоса прокрутки (scrollbar) -->
        <div class="swiper-scrollbar"></div>
    </div> <!-- swiper-container -->

## Инициализация слайдера
Пишем в `script.js`:

    new Swiper('.image-slider');

Теперь слайдер можно прокручивать мышкой.

## Настраиваем слайдер

    new Swiper('.image-slider', {

    });
