import {createSlice} from "@reduxjs/toolkit";
import hash from "../../../Assets/image/landing/hash-front-color.png";
import hashWebp from "../../../Assets/image/landing/hash-front-color.webp";
import rocket from "../../../Assets/image/landing/rocket-front-color.png";
import rocketWebp from "../../../Assets/image/landing/rocket-front-color.webp";
import settings from "../../../Assets/image/landing/setting-front-gradient.png";
import settingsWebp from "../../../Assets/image/landing/setting-front-gradient.webp";
import locker from "../../../Assets/image/landing/locker-front-color.png";
import lockerWebp from "../../../Assets/image/landing/locker-front-color.webp";

const landingSlice = createSlice({
    name: 'landing',
    initialState: {
        tabsContent: {
            hashtags: [
                {
                    id: 1,
                    img: hash,
                    webp: hashWebp,
                    title: 'Cоберите целевую базу хештегов под ваш бизнес',
                    text: 'минимум 300 #тегов максимум 9000 #тегов, после чего наш сервис автоматически будет проставлять выбранные хештеги под каждую вашу публикацию.',
                    active: false
                },
                {
                    id: 2,
                    img: rocket,
                    webp: rocketWebp,
                    title: 'В первые 24 часа вас ждет прирост',
                    text: 'Уже в первые 24 часа вы уведите огромный прирост по охватам, лайкам, подпискам',
                    active: false
                },
                {
                    id: 3,
                    img: settings,
                    webp: settingsWebp,
                    title: 'Вы можете сами контролировать хештеги',
                    text: 'IpostX сам пройдет по всем тегам, проверит, где вы находитесь в ТОПе и расскажет вам',
                    active: true
                },
                {
                    id: 4,
                    img: locker,
                    webp: lockerWebp,
                    title: 'Для всех пользователей мы подготовим базу',
                    text: 'из 5000 хештегов, но мы советуем вам готовить список самостоятельно, чтобы аудитория была максимально целевая',
                    active: false
                }
            ],
            parsing: [
                {
                    id: 5,
                    img: hash,
                    webp: hashWebp,
                    title: 'Вы сможете скачать базу клиентов из инстаграм',
                    text: 'просто введя ссылку на профиль. Хотите сделать предложение всем, кто подписан на вашего любимого блогера? Пожалуйста',
                    active: false
                },
                {
                    id: 6,
                    img: rocket,
                    webp: rocketWebp,
                    title: 'VK',
                    text: 'Вы сможете собирать аудиторию из Вконтакте',
                    active: false
                },
                {
                    id: 7,
                    img: settings,
                    webp: settingsWebp,
                    title: 'Viber',
                    text: 'Вы сможете собирать аудиторию из Вайбера',
                    active: true
                },
                {
                    id: 8,
                    img: locker,
                    webp: lockerWebp,
                    title: 'WhatsApp',
                    text: 'Вы сможете собирать аудиторию из Вацап',
                    active: false
                }
            ],
            mailing: [
                {
                    id: 9,
                    img: hash,
                    webp: hashWebp,
                    title: 'С нашим сервисом вы сможете делать массовую рассылкуe в инстаграм по собранным базам',
                    text: ' Если ваше предложение инетерсно, а рекламное сообщение составлено грамотно, вы удевитесь тому, на сколько эффективным будет этот метод продаж.',
                    active: false
                },
                {
                    id: 10,
                    img: settings,
                    webp: settingsWebp,
                    title: 'Вы сможете общаться с клиентами',
                    text: 'которые ответили на вашу рассылку прямо в нашем сервисе, благодаря чему повысите конверсию в десятки раз.',
                    active: true
                },
            ],
            liking: [
                {
                    id: 11,
                    img: hash,
                    webp: hashWebp,
                    title: 'Вы сможете настроить сервис',
                    text: 'чтобы он в автоматичком режиме проставлял лайки по заданным параметрам.',
                    active: false
                },
                {
                    id: 12,
                    img: rocket,
                    webp: rocketWebp,
                    title: 'Лайки по Хештегу',
                    text: 'Ставьте лайки по заданному хештегу',
                    active: false
                },
                {
                    id: 13,
                    img: settings,
                    webp: settingsWebp,
                    title: 'Лайки всем',
                    text: 'Ставьте лайки всем подписчикам пользователя ',
                    active: true
                },
                {
                    id: 14,
                    img: locker,
                    webp: lockerWebp,
                    title: 'Лайки комментам',
                    text: 'Ставьте лайки всем пользователям оставивших комментарии ',
                    active: false
                }
            ],
            commenting: [
                {
                    id: 15,
                    img: hash,
                    webp: hashWebp,
                    title: 'Вы сможете настроить сервис',
                    text: 'чтобы в автоматичком режиме проставлять комментарии по заданным параметрам',
                    active: false
                },
                {
                    id: 16,
                    img: rocket,
                    webp: rocketWebp,
                    title: 'Пишите комментарии',
                    text: 'по заданному хештегу',
                    active: false
                },
                {
                    id: 17,
                    img: settings,
                    webp: settingsWebp,
                    title: 'Комменты всем',
                    text: 'Пишите комментарии всем подписчикам выбранного пользователя',
                    active: true
                },
                {
                    id: 18,
                    img: locker,
                    webp: lockerWebp,
                    title: 'Комменты выбранным',
                    text: 'Пишите комментарии всем пользователям, оставивших комментарии',
                    active: false
                }
            ],
            autoreg: [
                {
                    id: 19,
                    img: hash,
                    webp: hashWebp,
                    title: 'Вы сможете настроить сервис',
                    text: 'чтобы в автоматичком режиме проставлять комментарии по заданным параметрам',
                    active: false
                },
                {
                    id: 20,
                    img: rocket,
                    webp: rocketWebp,
                    title: 'Пишите комментарии',
                    text: 'по заданному хештегу',
                    active: false
                },
                {
                    id: 21,
                    img: settings,
                    webp: settingsWebp,
                    title: 'Комменты всем',
                    text: 'Пишите комментарии всем подписчикам выбранного пользователя',
                    active: true
                },
                {
                    id: 22,
                    img: locker,
                    webp: lockerWebp,
                    title: 'Комменты выбранным',
                    text: 'Пишите комментарии всем пользователям, оставивших комментарии',
                    active: false
                }
            ]
        },
        tabsTitle: [
            {
                id: 'hashtags',
                text: 'Хештеги',
                title: 'Хештеги'
            },
            {
                id: 'parsing',
                text: 'Парсинг аудитории',
                title: 'Парсинг'
            },
            {
                id: 'mailing',
                text: 'Рассылка сообщений',
                title: 'Рассылка'
            },
            {
                id: 'liking',
                text: 'Лайкинг',
                title: 'Лайкинг'
            },
            {
                id: 'commenting',
                text: 'Комментинг',
                title: 'Комментинг'
            },
            {
                id: 'autoreg',
                text: 'Авторегистрация',
                title: 'Авторегистрация'
            }
        ],
        activeTab: {
            id: 'hashtags',
            text: 'Хештеги',
            title: 'Хештеги'
        },

        helpBlocks: [
            {
                title: 'SMM-специалист',
                body: [
                    'Подобрать для клиента базу из целевой аудитории, подготовить креативы и сделать массувую\n' +
                    'рассылку всем потенциальным клиентам/подписчикам. Твой клиент наверняка возбудиться\n' +
                    'от притока новых клиентов и возжможно даже уводит своего маркетолога, так что будь аккратней с\n' +
                    'нашим оружием.😃',
                    'Вы сможете вести диалоги со всеми клиентами из рассылок, это позволит вам выстроить качественную цепочку писем, для утепления \n' +
                    'и последужщей продажи. Именно при таком подходе мы наблюдаем наивысшие показатели конверсий. Людям не нравится спам, а с Айпост вы сможете очень деликатно вести продажи. '

                ],
                active: true,
            },
            {
                title: 'Блогерам',
                body: [
                    'Если вы начинающий блогер, IpostX будет для вас настоящим драйвером роста, мы прекрасно знаем\n' +
                    'как важно на начальных этапах получать обратную связь людейпо своему контенту, в виже лайков,\n' +
                    'комментариев и подписок\n' +
                    'Когда этого не происходит, падает мотивация\n' +
                    'и пропадает желание вести блок. А кто знает, быть может именно ты новый блоггер-миллионник.\n' +
                    'Позволь IpostX сделать свое дело!',

                    'IpostX сделает так, чтобы тебя замечали настоящие, живые люди, которые будут принимать рещение\n' +
                    'самостоятельно, подписываться на твой аккаунт или нет. Но согласись, когда твой пост увидело 100\n' +
                    'тысяч человек, шансов\n' +
                    'понравиться части аудитории гораздо выше, чем когда тебя смотрит только твои пару друзей, кто-то\n' +
                    'из родственников и кот'
                ],
                active: false,
            },
            {
                title: 'МЛМ предпринимателям',
                body: [
                    'IpostX поможет заработать тебе первые деньги в сетевом маркетинге за 30 дней. Теперь ты навсегда забудешь о проблеме с трафиком. Поздравляю, волшебная палочка найдена =)',
                    'Используя Ipostx и генерируя качественный контент, нацеленный на формирование личного бренда, ты\n' +
                    'быстро станешь топ лидером в своей компании. Начни зарабатывать как топ лидеры с нашим сервисом.'
                ],
                active: false,
            },
            {
                title: 'Владельцам бизнеса',
                body: [
                    ' Вы сэкономите сотни тысяч рублей на smm специалистах, уделяя нашему сервису 20 минут в день (из которых 15 минут будете радоваться своим охватам и новым заявкам ',
                    'Познакомите со своим продуктом/услугой людей, которые бы никогда не узнали про ваше предложение без Ipost'
                ],
                active: false,
            }
        ]
    },
    reducers: {
        setActiveTab: (state, action) => {
            state.activeTab = action.payload
        },

        setActiveBlock: (state, action) => {
            state.helpBlocks.map(block => {
                block.active = false
            })
            state.helpBlocks[action.payload].active = true
        }
    },
})

export const {
    setActiveTab,
    setActiveBlock,
} = landingSlice.actions

export default landingSlice.reducer