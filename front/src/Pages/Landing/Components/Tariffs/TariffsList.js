import TariffsItem from "./TariffsItem";

const TariffsList = () => {
    const tariffs = [
        {
            id: 1,
            title: 'Трафик Хантер',
            children: [
                'Скрытые хештеги - до 9000 хештегов на каждую публикацию ',
                'База хештегов - 5000 тегов.'
            ],
            price: '790 рублей',
            isPurple: false
        },
        {
            id: 2,
            title: 'Трафик Маньяк',
            children: [
                'Все, что есть в первом тарифе ',
                'Лайкинг',
                'Комментинг'
            ],
            price: '2400 рублей',
            isPurple: false
        },
        {
            id: 3,
            title: 'Трафик Монстр',
            children: [
                'Все, что есть во втором тарифе',
                'Авторегистрация',
                'Парсинг Аудитории',
                'Рассылка сообщений'
            ],
            price: '5700 рублей',
            isPurple: true
        },
    ]

    return (
        <div className='landing-tariffs__list'>
            {tariffs.map(tariff => <TariffsItem key={tariff.id} tariff={tariff}/>)}
        </div>
    )
}

export default TariffsList