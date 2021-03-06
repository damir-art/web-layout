# Блочная модель

CSS-свойства влияют на:
- размер элемента (ширина, высота)
- на поведение элемента в потоке
- тип блока (бокса) зависит от свойства `display`

На размер элемента влияют:
- width (auto - по-умолчанию) - размер контента
- height - размер контента
- padding
- border
- margin

width: 100% = ширине родителя + контент + padding + border + margin

width: auto = ширина родителя (padding, border, margin вписываются в ширину родителя)

box-sizing: border-box;
- padding
- border

## Блочно строчная модель
display: inline-block
- внутри как блочный, снаружи как строчный
- похож на inline-flex
- понимает vertical-align и text-align
- используйте vertical-align

## Разное
- в списке товаров, карточкам высоту задавайте через `min-height`
- в веб-верстке обычно `height` контентным элементам не задают, если нужно юзайте `min-height`
- схлопывание отступов `margin`, при вертикальном расположении
- выпадение отступов `margin`, при вертикальном расположении, чтобы не выпадало, для родителя пишем одно из:
    - overflow: hidden;
    - padding-top: 1px;
    - border-top: 1px solid transparent;
    - flex
    - grid
- отцентрировать
    - margin: 0 auto;
