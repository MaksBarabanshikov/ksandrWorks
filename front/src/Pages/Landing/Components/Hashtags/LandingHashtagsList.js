import hash from '../../../../Assets/image/landing/hash-front-color.png'
import hashWebp from '../../../../Assets/image/landing/hash-front-color.webp'
import rocket from '../../../../Assets/image/landing/rocket-front-color.png'
import rocketWebp from '../../../../Assets/image/landing/rocket-front-color.webp'
import settings from '../../../../Assets/image/landing/setting-front-gradient.png'
import settingsWebp from '../../../../Assets/image/landing/setting-front-gradient.webp'
import locker from '../../../../Assets/image/landing/locker-front-color.png'
import lockerWebp from '../../../../Assets/image/landing/locker-front-color.webp'

import LandingHashtagsItem from "./LandingHashtagsItem";

const LandingHashtagsList = () => {
  const list = [
    {
      id: 1,
      img: hash,
      webp: hashWebp,
      title: 'Cоберите целевую базу хештегов под ваш бизнес',
      text: 'минимум 300 #тегов максимум 9000 #тегов, после чего наш сервис автоматически будет проставлять выбранные хештеги под каждую вашу публикацию.'
    },
    {
      id: 2,
      img: rocket,
      webp: rocketWebp,
      title: 'В первые 24 часа вас ждет прирост',
      text: 'Уже в первые 24 часа вы уведите огромный прирост по охватам, лайкам, подпискам'
    },
    {
      id: 3,
      img: settings,
      webp: settingsWebp,
      title: 'Вы можете сами контролировать хештеги',
      text: 'IpostX сам пройдет по всем тегам, проверит, где вы находитесь в ТОПе и расскажет вам"'
    },
    {
      id: 4,
      img: locker,
      webp: lockerWebp,
      title: 'Для всех пользователей мы подготовим базу',
      text: 'из 5000 хештегов, но мы советуем вам готовить список самостоятельно, чтобы аудитория была максимально целевая'
    }
  ]

  return(
      <div className='landing-hashtags__border'>
        <div className="landing-hashtags__list">
          {list.map(item => <LandingHashtagsItem key={item.id} item={item}/>)}
        </div>
      </div>
  )
}

export default LandingHashtagsList