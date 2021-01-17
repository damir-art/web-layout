# Flexbox
Флекс-элементы, по-умолчанию, ужимаются под содержимое.

    .flex {
            Включить флекс разметку
        display: flex;
            inline-flex

            Устанавливает основную ось
        flex-direction: row; /* по-умолчанию */
            row-reverse/column/column-reverse

        justify-content: flex-start; /* по-умолчанию */
            flex-end/center/space-between/space-around

            Выравнивание вдоль поперечной оси
        align-items: stretch; /* по-умолчанию */
            flex-start/flex-end/center/baseline - не используется/
        
            Позволяет элементам перескакивать на другую строку
        flex-wrap: nowrap; /* по-умолчанию */
            wrap/wrap-reverse
    }

    .flex__item {
            Переопределяет выравнивание align-items
        align-self: stretch; /* по-умолчанию */
            flex-start/flex-end/center/baseline - не используется/
        
            Меняем порядок расположения
        order: 1;

            Базовый размер элемента
        flex-basis: auto; /* по-умолчанию */
            200px/25%

            Поглотить свободное пространство
        flex-grow: 0; /* по-умолчанию */
            1, 2, 3 ... 0 - элементу запрещено увеличиваться больше чем flex-basis

            Возможность уменьшаться в размере, можно ли уменьшаться элементу меньше чем базовый размер
        flex-shrink: 1; /* по-умолчанию */
            0 - уменьшаться нельзя

        margin-top: auto; /* опустится вниз */
    }

    .flex__item:nth-child(2) {
        align-self: start;
        order: -1;
    }

flex-basis и width не одно и тоже.

## Алгоритм задания свойств флексам
- flex-basis или width
- justify-content или margin
- flex-grow: 1

## Центрирование
    justify-content: center
    align-content:   center

## Разное
- не используйте `flex-grow` для задания точных ширин, например в пикселах
- используйте `flex-grow` для резиновых раскладок и адаптивности без медиавыражений
- `margin: auto` съедает свободное пространство, игнорирует `align-items`, `justify-content`, толкает другие флекс-элементы
- свойства `min/max - width/height` определяют в конце
- помните: псевдоэлементы становятся частью флекса

## Примеры
- растягиваем контент по высоте ячейки
    - делаем ячейку: `display: flex;`
    - делаем обертке контента: `display: flex;`, `flex-direction: column;`
    - делаем самой большой части контента: flex: 1 1 auto; 
- прижимаем футер к низ:
    - flex-direction: column
    - flex-grow: 1
- межколоночный интервал делаем 16px (если две колонки):
    - row    - margin: 0 -8px
    - column - pdding: 0 8px
https://www.youtube.com/watch?v=8Gu40PFzOHI