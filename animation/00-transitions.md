# Transitions
Применяются ко всем элементам, в том числе и псевдо. Плавная анимированная реакция на события.

    .button {

            Промежуток времени в течении которого будет происходить переход
        transition-duration: 1s;
            0.2s , 500ms

            Какие свойства учавствуют в анимации
        transition-property: all; /* по-умочланию, можно не вставлять */

            Задержка перед анимацией, используется для создания сценария анимации
        transition-delay: 0.2s;

            Задаёт стиль анимации
        transition-timing-function: ease; /* по-умолчанию */
            ease-in/ease-out/ease-in-out/linear/steps(int, start|end)/cubic-bezier(x1, y1, x2, y2)
    }

    .button:hover {
        background-color: green;
    }

## Пример
Анимируем три свойства, с тремя разными параметрами времени:

    transition-duration: 0.2s, 0.5s, 1s;
    transition-property: color, padding-top, fotnt-size;
    transition-delay: 0.5s, 1s, 1s;

## Разное
- https://fls.guru/csstransition.html