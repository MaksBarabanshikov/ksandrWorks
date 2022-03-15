import Block from "./Block";

const CardDropMenu = () => {
    return(
        <Block stylees="card-select-drop">
            <ul className="card-select-drop-list">
                <li className="card-select-drop-item">Россия</li>
                <li className="card-select-drop-item">Украина</li>
                <li className="card-select-drop-item">Беларусь</li>
                <li className="card-select-drop-item">Эстония</li>
            </ul>
        </Block>
    )
}
export default CardDropMenu