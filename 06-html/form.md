# Формы

## Кнопка
Всегда используйте только этот тег для кнопки:

    <button class="button" type="button">
        Кнопка
    </button>

- Всегда указывайте тип кнопки
- Не вставляйте кнопку в форму если она не является частью формы

## Lable и input
Lable - описание тега input.
    
    <form action="https://echo.htmlacademy.ru" method="post">
        <label for="appointment-date">Дата</label>
        <input id="appointment-date" type="text" name="date" placeholder="01.01.2020" />
    </form>

## Форма

    <form action="https://echo.htmlacademy.ru" method="post">
        <p>
            <label for="login-login">Логин</label>
            <input id="login-login" type="email" name="login" placeholder="email@example.com" required />
        </p>
        <p>
            <label for="login-password">Пароль</label>
            <input id="login-password" type="password" name="password" placeholder="********" required />
        </p>
        <p>
            <label>
                <input type="checkbox" name="remember" />
                Запомните меня
            </label>
            <a href="#">Я забыл пароль!</a>
        </p>
        <button type="submit">Войти</button>
    </form>
    <button type="button">Закрыть</button>

## Фильтр товаров
    <form action="https://echo.htmlacademy.ru" method="get">

        <!-- Чекбокс -->
        <fieldset>
            <legend>Производители:</legend>
            <ul>
                <li>
                    <input type="checkbox" name="baxter-of-california" id="filter-baxter-of-california" checked />
                    <label for="filter-baxter-of-california">Baxter of California</label>
                </li>
            </ul>
        </fieldset>

        <!-- Радио -->
        <fieldset>
            <legend>Группы товаров:</legend>
            <ul>
                <li>
                    <input type="radio" name="product-group" value="shaving" id="filter-shave" checked />
                    <label for="filter-shave">Бритвенные принадлежности</label>
                </li>
            </ul>
        </fieldset>
        
        <button type="submit">Показать</button>
    </form>
