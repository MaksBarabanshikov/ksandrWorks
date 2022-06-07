import Avatar1 from "../image/chat/avatar.png"
import Avatar2 from "../image/chat/avatar2.png"
import Avatar3 from "../image/chat/avatar3.png"
import Avatar4 from "../image/chat/avatar4.png"

export const InterlocutorsData = [
    {
        id: 0,
        img: Avatar1,
        name: 'Иван Доно',
        lastMessage: 'Добрый день! Готово.',
        wasOnline: 'Вчера, в 18:00',
        watched: true,
        messages: [
            {id: 0, sender: 'interlocutor', message: 'Привет', sentTo: 'Вчера в 18:01' },
            {id: 1, sender: 'interlocutor', message: 'Как дела?', sentTo: 'Вчера в 18:01' },
            {id: 2, sender: 'me', message: 'Здарова', sentTo: 'Вчера в 18:03' },
            {id: 3, sender: 'me', message: 'Хорошо', sentTo: 'Вчера в 18:05' },
            {id: 4, sender: 'interlocutor', message: 'У меня всё хорошо. Чуть позже напишу...', sentTo: 'Вчера в 18:07' },
            {id: 5, sender: 'me', message: 'Окей!', sentTo: 'Вчера в 18:10' },
        ]
    },
    {
        id: 1,
        img: Avatar2,
        name: 'Наталья Горданова',
        lastMessage: 'Добрый день!',
        wasOnline: 'Вчера, в 18:00',
        watched: true,
        messages: [
            {id: 0, sender: 'interlocutor', message: 'Приветствую', sentTo: 'Вчера в 18:01' },
            {id: 1, sender: 'interlocutor', message: 'Давненько тебе не писала', sentTo: 'Вчера в 18:01' },
            {id: 2, sender: 'me', message: 'Здарова', sentTo: 'Вчера в 18:03' },
            {id: 3, sender: 'me', message: 'Как дела, живой?', sentTo: 'Вчера в 18:05' },
            {id: 4, sender: 'interlocutor', message: 'У меня всё хорошо. Чуть позже напишу...', sentTo: 'Вчера в 18:07' },
            {id: 5, sender: 'me', message: 'Крутяк!', sentTo: 'Вчера в 18:10' },
        ]
    },
    {
        id: 2,
        img: Avatar3,
        name: 'Алекс Мейер',
        lastMessage: 'Готово!',
        wasOnline: 'Вчера, в 18:00',
        watched: false,
        messages: [
            {id: 0, sender: 'interlocutor', message: 'Привет', sentTo: 'Вчера в 18:01' },
            {id: 1, sender: 'interlocutor', message: 'Давненько тебе не писал', sentTo: 'Вчера в 18:01' },
            {id: 2, sender: 'me', message: 'Здарова', sentTo: 'Вчера в 18:03' },
            {id: 3, sender: 'me', message: 'Как дела, живой?', sentTo: 'Вчера в 18:05' },
            {id: 4, sender: 'interlocutor', message: 'Чуть позже напишу...', sentTo: 'Вчера в 18:07' },
            {id: 5, sender: 'me', message: 'Крутяк!', sentTo: 'Вчера в 18:10' },
        ]
    },
    {
        id: 3,
        img: Avatar4,
        name: 'Леша Козлов',
        lastMessage: 'Здарова!',
        wasOnline: 'Вчера, в 18:00',
        watched: false,
        messages: [
            {id: 0, sender: 'interlocutor', message: 'Привет', sentTo: 'Вчера в 18:01' },
            {id: 1, sender: 'interlocutor', message: 'Давненько тебе не писал', sentTo: 'Вчера в 18:01' },
            {id: 2, sender: 'me', message: 'Привет!', sentTo: 'Вчера в 18:03' },
            {id: 3, sender: 'me', message: 'Как дела?', sentTo: 'Вчера в 18:05' },
            {id: 4, sender: 'interlocutor', message: 'У меня всё хорошо. Чуть позже напишу...', sentTo: 'Вчера в 18:07' },
            {id: 5, sender: 'me', message: 'Крутяк!', sentTo: 'Вчера в 18:10' },
        ]
    },
]

