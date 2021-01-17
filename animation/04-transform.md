# Transform
Трансформации. 2D и 3D трансформации.

    transform: ;
        translate(x, y)    - сдвигает элемент
        scale(x, y)        - масштабирование элемента
        rotate(20deg)      - поворот
        skew(10deg, 20deg) - деформация
        matrix()           - объединение нескольких трансформаций

    transform-origin: top left; - смещение центра трансформации
        center/top/right/bottom/left

    transform-style:; - стиль трансформации
    backface-visibility:;

    translate3d(x, y, z)

## Разное
- свойство transform применяется только к блочным или inline-block объектам
- трансформированные объекты не влияют на окружение
- к трансформированным объектам можно применять анимации