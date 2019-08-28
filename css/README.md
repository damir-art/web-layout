# CSS

* атрибут style обычно используется при верстке писем, а не web-страниц

## Подключаем шрифты
* Google Fonts: https://fonts.google.com/
* Шрифты в папке fonts: https://www.fonts-online.ru/fonts/russian

Подключаем шрифт из папки:

    @font-face {
        font-family: 'OpenSans';
        src: url('../fonts/OpenSans.ttf');
    }
    font-family: 'OpenSans', sans-serif;
    /* Значения 'OpenSans' в атрибутах font-family должны совпадать */
