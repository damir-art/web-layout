# Flexbox
Флекс-элементы, по-умолчанию, ужимаются под содержимое.

    .flex {
        display: flex;
        flex-direction: row; /* по-умолчанию */
        justify-content: space-between;
        align-items: baseline; /* выровнить по базовой линии текста */
    }

    .flex__item {
        flex-basis: auto; /* по-умолчанию */
        flex-grow: 1; /* поглотить свободное пространство */
        margin-top: auto; /* опустится вниз */
        align-self: baseline;
    }

    .flex__item:nth-child(2) {
        align-self: start;
        order: -1;
    }

## Алгоритм задания свойств флексам
- flex-basis или width
- justify-content или margin

## Разное
- не используйте `flex-grow` для задания точных ширин, например в пикселах
- используйте `flex-grow` для резиновых раскладок и адаптивности без медиавыражений
- `margin: auto` съедает свободное пространство, игнорирует `align-items`, `justify-content`, толкает другие флекс-элементы
- свойства `min/max - width/height` определяют в конце
- помните: псевдоэлементы становятся частью флекс