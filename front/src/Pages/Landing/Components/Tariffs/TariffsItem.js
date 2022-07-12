const TariffsItem = ({tariff}) => <div>
  <div className={`landing-tariffs__item ${tariff.isPurple ? 'purple' : ''}`}>
      <div className="landing-tariffs__item_title">{tariff.title}</div>
      <div className="landing-tariffs__item_main">
        <ul>
          {tariff.children.map(item => <li key={item}>{item}</li>)}
        </ul>
      </div>
      <div className="landing-tariffs__item_price">{tariff.price}</div>
  </div>
</div>

export default TariffsItem