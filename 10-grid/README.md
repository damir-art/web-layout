# Сетки
Grid, Layout - сетка, раскладка.

- Поток
- Потоком можно управлять

## Flexbox vs Grid
Когда использовать флексы, а когда гриды:
- флексы лучше применять для одной строки
- гриды лучше применять в многострочии

## Flexbox
- Flexbox - удобное оформление интерфейсных блоков, но не текста.
- Флекс-контейнер и флекс элементы.
- Флекс элемент, может одновременно быть флекс контейнером.

Пример:

    .flex-container {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;       /* align-self: center; свойство дочернего */
        flex-wrap: nowrap;         /* по-умолчанию */
        flex-wrap: wrap;           /* перенос ячеек */
        flex-wrap: wrap-reverse;   /* перенос ячеек наоборот */
    }
    .flex-container > div {
        width: 200px;   /* можно в % */
        width: 30%;     /* flex-basis: 30%; */
        flex-grow: 1;   /* Занять всё свободное пространство */
        flex-shrink: 1; /* Гибкость на сжатие, почти не используется */
        height: 50px;   /* высоту обычно не задают */
        margin: 0 10px;
        padding: 10px;
    }

    margin: auto;

## Разное
- всегда явно задавайте размеры флекс-элементам через width или flex-basis, в процентах или пикселах
