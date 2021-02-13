# Именованные линии
Можно именовать линии. Нужны чтобы не путаться в числах линий (горизонтальных/вертикальных). Например можно названчить числами ячеку сделать из неё шапку сайта и назвать `header`.

## Сетка 12 колонок
Создание сетки из 12-ти колонок.

Именуем первую линию `l-sidebar-s`, четвертую линию `l-sidebar-e`:

    .grid {
        display: grid;
        height: 100%;
        grid-template-columns:
            [l-sidebar-s] 1fr 1fr 1fr [l-sidebar-e] 1fr 1fr 1fr 1fr 1fr 1fr [r-sidebar-s] 1fr 1fr 1fr [r-sidebar-e];
        grid-template-rows: [header-s] 80px [header-e] 1fr [footer-s] 100px [footer-e];
    }

    .grid__item {
        padding: 20px;
        text-align: center;
        font-size: 24px;
        font-weight: bold;
        color: #ddd;
        /* border: 20px solid #bbb; */
    }

    .item-1 {
        grid-column: l-sidebar-s / r-sidebar-e;
        grid-row: header-s / header-e;
    }

    .item-2 {
        grid-column: l-sidebar-s / l-sidebar-e;
        grid-row: header-e / footer-s;
    }

    .item-3 {
        grid-column: l-sidebar-e / r-sidebar-s;
        grid-row: header-e / footer-s;
    }

    .item-4 {
        grid-column: r-sidebar-s / r-sidebar-e;
        grid-row: header-e / footer-s;
    }

    .item-5 {
        grid-column: l-sidebar-s / r-sidebar-e;
        grid-row: footer-s / footer-e;
    }
