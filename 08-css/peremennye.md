# Переменные в CSS

## Зачем нужны
- для частоиспользуемых значений
- для темизации, например светлая/темная

## Создание
    :root {
        --basic-color: #000;
        --accent-color: #fff;
    }

    .element {
        background-color: var(--basic-color);
        color: var(--accent-color);
    }
