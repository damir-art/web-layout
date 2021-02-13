# Grid Area
`grid area` - объединение ячеек. После создания сетки, мы можем объединять ячейки. Объединённым ячейкам также можно дать имя.

Все ячейки должны быть пронумерованы, если хотите пропустить ячейку, то вместо её имени нужно поставить точку `.`. Area могут быть только прямоугольными/квадратными.

## Сетка
Создаём сетку с помощью `grid-area`:

    .grid {
        ...
        grid-template-areas:
            "header header header header header header header header header header header header"
            "left left left content content content content content content right right right"
            "footer footer footer footer footer footer footer footer footer footer footer footer"
        ;
    }

    .item-1 {
        grid-area: header;
    }

    .item-2 {
        grid-area: left;
    }

    .item-3 {
        grid-area: content;
    }

    .item-4 {
        grid-area: right;
    }

    .item-5 {
        grid-area: footer;
    }
