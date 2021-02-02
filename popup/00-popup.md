# Попап CSS
Попап на CSS, без JavaScript. Также присутствует анимация, оверлэй и другие интересные моменты.
Также можете вставить два хештега в ссылку `href='##'` чтобы не скролило в начало страницы.

## HTML

    <div id="fix"></div>
    <div id="popup" class="popup">
        <a class="popup__area" href="#fix"></a>
        <div class="popup__body">
            <div class="popup__content">
                <a href="#fix" class="popup__close">X</a>
                <div class="popup__title">Это модальное окно №1</div>
                <div class="popup__text">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere a, omnis debitis id ea porro incidunt deleniti ipsa quo, ratione fugit ipsam explicabo quam perferendis laudantium doloremque, alias quaerat iusto quod! Dolores.

                    <!-- Здесь при необходимости размести контент, который будет больше чем высота окна  -->
                </div>
            </div> <!-- popup__content -->
        </div> <!-- popup__body -->
    </div> <!-- popup -->

## CSS

    /* popup */
    .popup {
        position: fixed;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.8);
        top: 0;
        left: 0;
        opacity: 0;
        visibility: hidden;
        overflow-y: auto;
        overflow-x: hidden;
        transition: all 0.8s ease 0s;
    }
    .popup:target {
        opacity: 1;
        visibility: visible;
    }
    .popup:target .popup__content {
        transform: perspective(600px) translate(0, 0) rotateX(0);
        opacity: 1;
    }

    .popup__area {
        position: fixed;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
    }

    .popup__body {
        min-height: 100%; /* или vh */
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 30px 10px;
        box-sizing: border-box;
    }
    .popup__content {
        position: relative;
        background-color: #fff;
        max-width: 800px;
        padding: 30px;
        transition: all 0.8s ease 0s;
        opacity: 0;
        transform: perspective(600px) translate(0, -100%) rotateX(45deg);
    }
    .popup__close {
        position: absolute;
        top: 16px;
        right: 16px;
        color: #000;
        font-size: 24px;
        line-height: 17px;
        text-decoration: none;
    }
    .popup__title {
        font-size: 40px;
        margin-bottom: 32px;
    }

    #fix {
        position: fixed;
        width: 50px;
        height: 50px;
        background-color: red;
        top: 50px;
        left: 50px;
        visibility: hidden;
        opacity: 0;
    }
