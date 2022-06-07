const RemainingPosts = ({number}) => {
  return(
      <div>
          <span className="remaining-posts">
              Количество доступных постов: {number}<br/> (до окончания тарифа)
          </span>
      </div>
  )
}

export default RemainingPosts