const quotes = [
    // {
    //     quote: "",
    //     name: "",
    //     date: "",
    //     place: "",
    //     source: "",
    // },
    // {
    //     quote: "",
    //     dialogue: [
    //         { name: "", line: "" },
    //         { name: "", line: "" },
    //     ],
    //     date: "",
    //     place: "",
    //     source: "",
    // },
    {
        quote: "як завжди підсипають каміння",
        dialogue: [
            { name: "Dayanetta", line: "Та це якийсь жах, я хотіла менше напрягатись, а вони як завжди підсипають каміння" },
            { name: "Dayanetta", line: "Чому, чому , постійно на нас якісь челенжі і нововведення" },
        ],
        date: "2025_03_06",
        place: "Telegram",
    },
    {
        quote: "чому лекцію не можна на паузу?",
        name: "Макс Степ (purpexe)",
        date: "2025_05_08",
        place: "Telegram",
    },
    {
        quote: "Домашня Генерація",
        dialogue: [
            { name: "chichik (xl4tir)", line: "пам'ятаєте колись на початку зошита треба було писати \"Домашня робота\"" },
            { name: "chichik (xl4tir)", line: "це роки були десь до 2022 року" },
            { name: "chichik (xl4tir)", line: "від 2022 року пишуть \"Домашня Генерація\"" },
        ],
        date: "2025_05_08",
        place: "Telegram",
    },
    {
        quote: "максимально погано",
        dialogue: [
            { name: "Макс Степ (purpexe)", line: "я роблю щоб мені було максимально погано але концентровано. щоб це швидко пройшло і потім було добре" },
        ],
        date: "2025_04_15",
        place: "Telegram",
    },
    {
        quote: "я вмію гарно давати завдання",
        dialogue: [
            { name: "Макс Степ (purpexe)", line: "це ти сам придумуєш?" },
            { name: "chichik (xl4tir)", line: "не" },
            { name: "chichik (xl4tir)", line: "я не вмію думати" },
            { name: "chichik (xl4tir)", line: "я вмію гарно давати завдання над якими нада думати" },
        ],
        date: "2025_04_15",
        place: "Telegram",
    },
    {
        quote: "нарождений кайфувати - примушений працювати",
        name: "Макс Степ (purpexe)",
        date: "2025_04_10",
        place: "Telegram",
    },
    {
        quote: "я обрав одне життя замість багатьох",
        dialogue: [
            { name: "Макс Степ (purpexe)", line: "I chose one life instead of many" },
        ],
        date: "2022_11_08",
        place: "Steam",
        source: "https://steamcommunity.com/id/Max_Stepanyuk",
    },
    {
        quote: "і гдз нема бо книжка від університету(",
        name: "GreyXArt",
        date: "2024_09_30",
        place: "Telegram",
    },
    {
        quote: "А то кожен день нові приколи",
        name: "Ден Б.",
        date: "2024_10_09",
        place: "Telegram",
    },
    {
        quote: "Я такі дурниці не запам'ятовою",
        name: "Ден Б.",
        date: "2025_10_06",
        place: "Telegram",
    },
    {
        quote: " Немає нереальних завдань",
        dialogue: [
            { name: "Ден Б.", line: 'Бо я завжди схиляюся до: "Немає нереальних завдань, є лише відсутність або сили, або знань, або часу." В цілому ресурсів)' },
        ],
        date: "2025_01_04",
        place: "Telegram",
    },
    {
        quote: "До речі, як добре що я ту прогу про віддалене керування написав, прям дуже зручно пиво пити з смаколиками)",
        name: "Ден Б.",
        date: "2025_03_08",
        place: "Telegram",
    },
    {
        quote: "Адміни чату сплять.",
        name: "Yaroslav H.",
        date: "2024_04_18",
        place: "Telegram",
    },
    {
        quote: "Я нічо не пропускаю",
        dialogue: [
            { name: "chichik (xl4tir)", line: "Що там пари" },
            { name: "chichik (xl4tir)", line: "Я нічо не пропускаю братанчики мої любі" },
            { name: "Shin8", line: "Я теж братанчік" },
            { name: "Макс Степ (purpexe)", line: "і я" },
            { name: "chichik (xl4tir)", line: "ахпхапх, так я питання задав типу" },
        ],
        date: "2025_03_13",
        place: "Telegram",
    },
    {
        quote: "На метрологів вчаться майбутні мільярдери",
        name: "Нікіта Персик",
        date: "2024_11_28",
        place: "Telegram",
    },
    {
        quote: "життя до LLM",
        name: "Макс Степ (purpexe)",
        date: "2025_01_05",
        place: "Telegram",
    },
    {
        quote: "Можна все, але бувають різні наслідки.",
        dialogue: [
            { name: "Макс Степ (purpexe)", line: "Все можна і можуть бути різні наслідки)" },
        ],
        date: "2024_03_06 задокументовано. а раніше були різні варіації",
        place: "Життя. Telegram",
    },
    {
        quote: "Студенти замість того, щоб вчитися, спілкуються", //without context is funnier
        name: "Женя В",
        date: "2023_10_09",
        place: "Telegram",
    },
    // {
    //     quote: "Студенти замість того, щоб вчитися, спілкуються", //with context
    //     dialogue: [
    //         { name: "Yaroslav H", line: "900+.повідомлень, що сталося?" },
    //         { name: "Женя В", line: "Студенти замість того, щоб вчитися, спілкуються" },
    //     ],
    //     date: "2023_10_09",
    //     place: "Telegram",
    // },
    {
        quote: "Не можуть ті хто вже вмер...",
        dialogue: [
            // { name: "chichik (xl4tir)", line: "Я реву. Не можу" },
            { name: "Ден Б.", line: `"Можеш. Не можуть ті, хто вже вмер... А ти можеш.": Фізрук колись мені таке казав.` },
        ],
        date: "2025_02_01",
        place: "Telegram",
    },
    {
        quote: "З кібером попрощався — зі звичайним привітався",
        name: "Макс Степ (purpexe)",
        date: "2022_05_28",
        place: "Telegram"
    },
    {
        quote: "життя продовжується",
        dialogue: [
            { name: "Shin8", line: "ну нічого. життя продовжується. треба знайти сили жити далі. і йти далі. допоки воно поволі буде тліти. аж до самого кінця... а коли той кінець настане. не знає ніхто. сама лиш доля" },
        ],
        date: "2023_05_14",
        place: "Telegram",
    },
    {
        quote: "Я в діжку",
        dialogue: [
            { name: "Макс Степ (purpexe)", line: "То що робимо?" },
            { name: "chichik (xl4tir)", line: "Я в діжко Вже Добраніч" },
            { name: "Макс Степ (purpexe)", line: "Добраніч. Я теж в діжку тоді скоро" },
        ],
        date: "2023_05_18 01:20",
        place: "Telegram",
    },
    {
        quote: "Приємного не багато",
        name: "chichik (xl4tir)",
        date: "2024_04_01",
        place: "Telegram"
    },
    {
        quote: "Добре що так можна в 2023",
        name: "chichik (xl4tir)",
        date: "2023_12_11",
        place: "Telegram"
    },
    {
        quote: "Це дахіття",
        name: "chichik (xl4tir)",
        date: "2023_03_01",
        place: "Telegram"
    },
];