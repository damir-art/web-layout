# Гриды
Позволяет делать раскладку страницы очень удобной.

Родитель:

    .grid {
        dispaly: grid;
        grid-template-rows:
            min-content
            1fr
            min-content;
        row-gap: 20px; /* расстояние между строками */
        grid-template-columns:
            1fr 1fr 1fr;
        grid-template-columns:
            min-content 1fr 1fr;
        grid-template-columns:
            40px 1fr 40px;
        column-gap: 20px; /* расстояние между колонками */
        align-items: start; /* не растягивать */
        gap: 20px; /* расстояние между карточками */
    }

Потомок:

    .grid__item {
        justify-self: center;
    }