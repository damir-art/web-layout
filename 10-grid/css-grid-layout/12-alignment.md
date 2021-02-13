# Выравнивания
Выравнивание ячеек и контента внутри самих ячеек.

Управляем расположением ячеек:

    .grid {
            /* выравнивает ячейки вдоль оси строки */
        justify-items: stretch; // по-умолчанию
            start/end/center/stretch;
        
            /* выравнивает ячейки вдоль оси столбца */
        align-items: stretch; // по-умолчанию
            start/end/center/stretch;
        
            /*
                свойства сработают при условии,
                что между ячейками есть свободное пространство,
                сумма ширин ячеек должна быть меньше ширины контейнера 
            */
        justify-content: stretch; /* выравнивает сетку вдоль оси строки */
            start/end/center/stretch/space-around/space-between/space-evenly

        align-content: stretch; /* выравнивает сетку вдоль оси столбца */
            start/end/center/stretch/space-around/space-between/space-evenly
    }

Управляем расположением ячейки:

    .item {
            /* выравнивает ячейку вдоль оси строки */
        justify-self: stretch; // по-умолчанию
            start/end/center/stretch

            /* выравнивает ячейку вдоль оси столбца */
        align-self: stretch; /*  */
            start/end/center/stretch

        oreder:; /* нужно задавать каждому элементу сетки */

            /* аналог justify-self, align-self (center) */
        margin: auto;
    }
