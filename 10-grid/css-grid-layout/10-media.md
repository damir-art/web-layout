# Медиа-запросы

    .grid {
        display: grid;
        height: 100%;
        grid-template-columns: 200px 1fr 300px;
        grid-template-rows: 80px 1fr 100px;
        grid-template-areas:
            "header header header"
            "left content right"
            "footer footer footer"
        ;
        grid-gap: 20px;
    }

    .item-1 {
        grid-area: header;
    }

    .item-2 {
        grid-area: left;
    }

    .item-3 {
        grid-area: content;
    }

    .item-4 {
        grid-area: right;
    }

    .item-5 {
        grid-area: footer;
    }

    @media (max-width: 768px) {
        .container {
            background-color: deeppink;
        }
        .grid {
            grid-template-areas:
                "header header header"
                "left content content"
                "right right right"
                "footer footer footer";
            grid-template-rows: 80px 1fr 80px 100px;
        }
    }
