import WhyIPostXCard from "./WhyIPostXCard";

const WhyIPostXList = () => {
    const cards = [
        {
            id: 1,
            title: '01',
            buttonText: 'Освободиться от рутины',
            textStrong: 'Искусственный интеллект ipostX выполняет работу в автоматическом режиме',
            text: 'снимая с вас многочасовую рутинную работу. Теперь вы сможете заниматься более важными задачами, остальное остаьте для нас.',
        },
        {
            id: 2,
            title: '02',
            buttonText: 'Найти клиентов',
            textStrong: 'С нашим сервисом проблема с поиском клиентов уйдет в прошлое,',
            text: 'всего за пару кликов вы сможете собирать целевую аудиторию со всех популярных сетей и мессенджеров, чтоб в дальнейшем работать с базой не выходя с сервиса.',
        },
        {
            id: 3,
            title: '03',
            buttonText: 'Увеличить продажи',
            textStrong: 'больше клиентов = больше денег',
            text: 'Инструменты Телеспейс приведут вам большой трафик входящих заявов',
        },
        {
            id: 4,
            title: '04',
            buttonText: ['Дополнительные деньги', 'Прирост подписчиков'],
            textStrong: 'зарабатывать до 20% комиссионных ежемесячно',
            text: ['Рекомендуя наш сервис, вы можете', 'Наш сервис увеличит ваши озваты в десятки раз, а значит, при наличии качественного оформления профиля \n' +
            'и авторского контента на вас будут подписываться десятки новых пользователей с каждой'],
        },
    ]

    return (
        <div className="why-ipostX__list">
            {cards.map(card => <WhyIPostXCard key={card.id} card={card}/>)}
        </div>
    )

}

export default WhyIPostXList