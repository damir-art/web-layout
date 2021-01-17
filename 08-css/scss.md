# SCSS
Нет фигурных скобок и точки с запятой в конце, перед вложенностью или свойством нужно ставить отступ:

    .menu
        margin: 0
        padding: 0
        list-style: none
        
        &__item
            display: inline-block

        > p
            font-size: 20px;

## Вложенность

    menu
        &__item
        &.menu--bottom
    li
        &:hover

## Переменные

    $name:80px

    .menu
        font-size: $name

## Импортирование

    style.scss
    _head.scss

    @import 'head'

## Шаблоны

    %template_name
        font-size: 20px

    .menu
        @extend %template_name

## Миксины

    @mixin name($f) {
        font-size: $f;
    }

    .menu
        font-size: $name
        @include name(20px)

## Математические операции

    width: 300px / 960px * 100%

## Комментарии

    // комментарий не выведется в css файле

## Ссылки
https://sass-scss.ru/guide/