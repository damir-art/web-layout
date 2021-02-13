# Animation

Анимируем меню:

    .menu {
        animation-name: keyName, [keyName];
        animation-duration: 2s, [500ms];
        animation-timing-function: ease;
    }
    @keyframes keyName, [keyName] {
        0% {

        }
        100% {

        }
    }

Animation и @keyframes (ключевые кадры), создаёт более сложные анимации чем transitions.

Воспроизводит и повторяет эффекты в течении определённого времени и останавливает по событию.

        Список применяемых к элементу анимаций
    animation-name: name [, name-name, name_name];

        Продолжительность анимации
    animation-duration: 2s [, 500ms, time];

        Сценарий развития анимации, между ключевыми кадрами
    animation-timing-function: ease [, linear, ];

        Количество повторов
    animation-iteration-count: 3 [, 10, infinite];

    animation-direction: normal; /* по-умолчанию */
        alternate/alternate-reverse/reverse

        Запуск/остановка анимации по определённому событию, например ховер
    animation-play-state: running [, none, ]; /* по-умолчанию */
        paused/none

        Задержка перед анимацией
    animation-delay: 2s [-2s, 3s, 5s];

        Какие значения анимируемых свойств, применятся к объекту после завершения анимации
    animation-fill-mode: none [ , , ]; /* по-умолчанию */
        forwards

    @keyframes name {
        0% {
            left: 0;
        }
        50% {
            border-radius: 0;
        }
        100% {
            left: 500px;
        }
    }
