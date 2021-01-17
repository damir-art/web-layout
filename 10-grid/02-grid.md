# Гриды
Позволяет создать сетку, все дочерние элементы становятся блочными. Маргины ячеек не схлопываются.

## Из чего состояит grid
- линии сетки (горизонтальные, вертикальные, зазоры между ячейками и областями)
- дорожка сетки, столбец/строка, (пространство между двумя линиями, дорожки бывают горизонтальные или вертикальные)
- ячека сетки (пространство между 4мя линиями сетки)
- область сетки (пространство между 4мя линиями сетки, включает в себя 1 или несколько ячеек)

## Родитель

    .grid {
            Включить grid разметку
        dispaly: grid;
            inline-grid

            Управляем колонками, через пробел можно задавать ширины следующих колонок
        grid-template-columns: 200px; /* ширина первой колонки */
            1fr min-content % px
            minmax(100px, 1fr) - минимальная и максимальная ширина колонки
            auto - ширина колонки зависит от контента
            fit-content(100px) - ширина колонки зависит от контента, но максимум 100px
            repeat(3,1fr) - 3 колонки с размерами 1fr, аналог 1fr 1fr 1fr

            Управляем рядами, через пробел можно задавать ширины следующих рядов
        grid-template-rows: 200px; /* высота первого ряда */
            1fr min-content % px

            Имена областей
        grid-template-areas: ;

            Промежутки между элементами сетки
        gap: 20px;        /* расстояние между ячейками */
        row-gap: 20px;    /* расстояние между строками */
        column-gap: 20px; /* расстояние между колонками */

        justify-items: start/end/center/stretch; /* выравнивает элементы вдоль оси строки */
        align-items: start/end/center/stretch; /* выравнивает элементы вдоль оси столбца */
        
        justify-content: start/end/center/stretch/space-around/space-between/space-evenly; /* выравнивает сетку вдоль оси строки */
        align-content: start/end/center/stretch/space-around/space-between/space-evenly; /* выравнивает сетку вдоль оси столбца */

        grid-template: ряды / колонки ; /* Сокращённая запись rows columns */
        grid-template: [] ; /* Сокращённая запись areas */

        grid-auto-rows:    200px; /* высота неявной сетки */
        grid-auto-columns: 200px; /* высота неявной сетки, работает когда сетка не задана */
        grid-auto-flow:    row/column/dense ; /* автоматическое размещение неявных grid-элементов */
    }

## Потомок

    .grid__item {
            Данные свойства определяют, сколько строк и столбцов, займет ячейка
        grid-row-start:    auto; /* по-умолчанию */
        grid-row-end:      auto; /* по-умолчанию */
        grid-column-start: auto; /* по-умолчанию */
        grid-column-end:   auto; /* по-умолчанию */

            Ячейка займёт первую и вторую строку, последующие ячейки сместятся, последняя ячейка уйдет в неявную сетку
        grid-row-start:    1;
        grid-row-end:      3;

            Ячейка займёт первый и второй столбец
        grid-column-start:    1;
        grid-column-end:      3;

            Ячека сместится в конец, если 6 ячеек и 2 строки, то 2я ячейка станет первой
        grid-row-start:     2;
        grid-column-column: 3;

            span - сколько строк/столбцов займёт ячейка
        grid-row-start: span 2; /* ячейка займёт две строки */

            Располагаем контент по центру ячейки горизонтально/вертикально
        margin: auto;

        justify-self:;
        align-self:;
        oreder:; /* нужно задавать каждому элементу сетки */

        /* Примеры */
        grid-column-start: 1; /* определяет начальную позицию грид-элемента, внутри грид-столбцов */
        grid-column-end: 4;   /* определяет конечную позицию грид-элемента, внутри грид-столбцов */
        grid-column: 2 / 4;   /* сокр запись начло 2, конец 4 */
        grid-column: 2 / span 3;
        grid-row-start: 3;    /* определяет начальную позицию грид-элемента, внутри грид-строк */
        grid-row: 3 / 6;
        grid-area: 1 / 1 / 3 / 6; /* еще более сокращенная запись в двух направлениях */
    }

## Примеры
Сделаем обычную верстку сайта шапка, сайдбар, контент:

    /* Родитель */
    .grid-wrapper {
        display: grid;
        grid-template-columns: 150px 1fr;
        grid-template-rows:    100px 1fr;
        grid-template-areas:
            "header header"
            "side content";
        ;
    }

    /* Потомки */
    .grid-header {
        grid-area: header;
    }
    .grid-side {
        grid-area: side;
    }
    .grid-content {
        grid-area: content;
    }

Карточки товаров, изображений в галерее и т.д:

    .grid {
        display: grid;
        gap: 20px;
        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    }

    .grid__item {
        /* Для карточек товаров */
        display: grid;
        grid-auto-flow: row;
        grid-template: auto 1fr minmax(40px, auto) / 1fr;
    }

    .grid__img {
        position: relative;
        padding: 0 0 90% 0;
        margin: 0 0 20px 0;
    }

    .grid__img img {
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        object-fit: cover;
    }
