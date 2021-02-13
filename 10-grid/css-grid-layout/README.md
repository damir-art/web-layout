# CSS Grid Layout
## Изучаем CSS Grid Layout

- Похож на таблицы с абсолютным позиционированием таблицы, строк, столбцов, ячеек
- Не заменяет флексбокс

## Базис
`display: grid;` - основной контейнер
- строки, колонки, ячейки
- ячейку тоже можно сделать гридом

`grid line`, линия между ячейкамии, основной элемент `grid`:
- горизонтальные (строчные) линии
- вертикальные (колоночные) линии

`grid track` - расстояние между двумя линиями, образующие строку или колонку
- шириной можно управлять
- количеством ячеек можно управлять

`grid cell` - ячейка, расстояние между 4-мя линиями
- для манипуляции ячейками указывают необходимые линии
- (строка 2, 3 колонка 3, 4) линии означет что мы обращаемся к ячейке которая располагается на 3-й ячейке по горизонтали и второй  ячейке по вертикали
- благодаря указаниям линий, мы можем менять положение ячеек

`grid area` - область, расстояние между 4-мя линиями
- может объединять/занимать несколько ячеек

`grid gutters` - расстояние между ячейками
- расстояние можно задавать в px, % и т.д.

## Разное
- https://developer.mozilla.org/ru/docs/Web/CSS/CSS_Grid_Layout