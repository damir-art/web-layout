# Вспомогательные функции
- `minmax(min, max)` указывает минимальную или максимальную ширину грид трека
- `min-content`
    1fr min-content 1fr 1fr // занимает ширину по минимальному контенту
- `max-content`
    1fr max-content 1fr 1fr // занимает ширину по максимальному контенту, строка не переносится
- `fit-content()` // сокращенная запись функции minmax()
    fit-content(300px) растягивать по контенту до 300px

Пример:

    .container {
        grid-template-columns: 25% minmax(300px, 40%) 25% 25%
        grid-template-columns: 1fr minmax(300px, 40%) 1fr 1fr
        grid-template-columns: 1fr minmax(min-content, 40%) 1fr 1fr
        // с фракцией, не появится нижней полосы прокрутки, на минимальных ширинах экрана
    }

- repeat() - избавляет от написания повторений, например 12 раз `1fr`
    - repeat(3, 1fr) - повторить 3 раза
    - grid-template-columns:
        - [l-sidebar-s] repeat(3, 1fr) [l-sidebar-e] 1fr 1fr 1fr 1fr 1fr 1fr [r-sidebar-s] 1fr 1fr 1fr [r-sidebar-e];
- repeat(3, 1fr 20px) - 1fr 20px 1fr 20px 1fr 20px (аналог)