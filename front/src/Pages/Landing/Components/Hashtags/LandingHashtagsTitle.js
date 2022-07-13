const LandingHashtagsTitle = () => {

  const tabs = [
      'Парсинг аудитории',
      'Рассылка сообщений',
      'Лайкинг',
      'Комментинг',
      'Авторегистрация'
  ]

  return (
      <div className='landing-hashtags__title'>

        <h1><strong>Хештеги</strong></h1>

        <div className='landing-hashtags_tabs flex justify-content-between'>
          {tabs.map(tab => <div key={tab} className='landing-hashtags_tab text-white-op-15'>{tab}</div>)}
        </div>
      </div>
  )
}
export default LandingHashtagsTitle