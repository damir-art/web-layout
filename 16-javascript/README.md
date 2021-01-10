# JavaScript
JavaScript - это язык программирования, его можно использовать везде: сайты, мобильные приложения, десктопные приложения, игры, умный дом и мн.др.

JavaScript взаимодействует с HTML и CSS, через DOM. JavaScript работает и взаимодействует только с DOM.

## DOM
document - корень DOM, главный объект.

## Console
Вводим в консоль `document`, нажимаем `enter` или:

    document.querySelector(".login-link");
    document.querySelectorAll("nav li");
    console.log("Данный код появится в консоли");
    link.classList.add("modal-show");
    localStorage.getItem("login");

## Основные команды
* `querySelector()` - поиск элементов
    * `querySelector()` - возврат всех элементов
* `addEventListener()` - отлов событий
* `classList` - управление классами

### querySelector()

    var link = document.querySelector(".login-link");
    var navLi = document.querySelectorAll("nav li");

### addEventListener()

    link.addEventListener("click", function (evt) {
        evt.preventDefault();
        console.log("Клик по ссылке вход");
    });

### classList
Свойство, с набором методов (add, remove, toggle, contains) для управления классами элемента.

    elem.classList.add("open");

## Ютуб блоггеры
* https://www.youtube.com/c/%D0%9F%D1%80%D0%BE%D1%81%D1%82%D0%BE%D1%80%D0%B0%D0%B7%D1%80%D0%B0%D0%B1%D0%BE%D1%82%D0%BA%D0%B0/videos (Куча JS примеров для сайта)
* https://www.youtube.com/c/FreelancerLifeStyle/videos
    * https://www.youtube.com/watch?v=nxCLXMBl4e4 (VS Code)
    * https://www.youtube.com/watch?v=stFOy0Noahg (Gulp)

## План
- слайдер (пишем свой плагин: https://www.youtube.com/watch?v=mXRUmlmlxYA)
- анимации
- VS Code (tabnine)
- Gulp
- Флексбокс/Гриды (типичный верстальщик)
- Пройтись по конспекту
- Пройтись по видео
- Добавить попап и слайдер
- переделать барбершоп
- переделать гросс маркет
