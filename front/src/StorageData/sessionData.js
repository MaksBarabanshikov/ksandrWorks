export const selectOptions = [
    {
        id: 0,
        type: "select",
        placeholder: "Выбор страны",
        options: [
            {value: "Россия", label: "Россия"},
            {value: "Украина", label: "Украина"},
            {value: "Беларусь", label: "Беларусь"},
            {value: "Эстония", label: "Эстония"},
        ]
    },
    {
        id: 1,
        type: "select",
        placeholder: "Выбор по активности",
        options: [
            {value: "Отлеженный", label: "Отлеженный"},
            {value: "Новый", label: "Новый"},
            {value: "Ограниченный", label: "Ограниченный"},
            {value: "Бан", label: "Бан"},
        ]
    },
    {
        id: 2,
        type: "input",
        placeholder: "С",
    },
    {
        id: 3,
        type: "input",
        placeholder: "ПО",
    },
    {
        id: 4,
        type: "select",
        placeholder: "Выбор формата",
        options: [
            {value: "Session", label: "Session"},
            {value: "Session+Json", label: "Session+Json"},
            {value: "Tdata", label: "Tdata"}
        ]
    },
    {
        id: 5,
        type: "input",
        placeholder: "Количество действий",
    },
]