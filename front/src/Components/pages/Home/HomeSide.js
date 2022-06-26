import HomeComment from "./HomeComment";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faToggleOn, faToggleOff, faCircleXmark} from "@fortawesome/free-solid-svg-icons"
import {faSave} from "@fortawesome/free-regular-svg-icons"
import "./HomeSide.scss"
import {useDispatch, useSelector} from "react-redux";
import {removeAllSelect, selectAll} from "../../../redux/modules/favoritesSlice";

const HomeSide = () => {
    const dispatch = useDispatch()
    const favorites = useSelector(state => state.favorites.favorites)
    const selectAllBtn = useSelector(state => state.favorites.selectAllBtn)

    return (
        <div className="hashtag__side hashtag__block">
            <div className="top border-bottom mb-20">
                <h1 className="title">
                    Избранное
                </h1>
            </div>
            <div className="hashtag__side-control">
                <label className={`flex align-center ${selectAllBtn ? 'active' : ''}`}>
                    <button
                        className={`hashtag__side-control_select-all`}
                        type={"button"}
                        onClick={() => dispatch(selectAll())}
                    >
                        <FontAwesomeIcon icon={selectAllBtn ? faToggleOn : faToggleOff}/>
                    </button>
                    <span>Выбрать все</span>
                </label>
                <label className={'flex align-center'}>
                    <button className="hashtag__side-control_select-all"
                            type={"button"}
                            onClick={() => dispatch(removeAllSelect())}
                    >
                        <FontAwesomeIcon icon={faCircleXmark}/>
                    </button>
                    <span>Удалить отмеченные</span>
                </label>
                <label className={'flex align-center'}>
                    <button className="hashtag__side-control_select-all"
                            type={"button"}
                            onClick={() => console.log(123)}
                    >
                        <FontAwesomeIcon icon={faSave}/>
                    </button>
                    <span>Сохранить все</span>
                </label>
            </div>
            <div className="hashtag__side_main">
                <div className="hashtag__side_main-cont">
                    {
                        favorites.length ?
                            favorites.map((item, index) => (
                                <HomeComment
                                    key={item.id}
                                    {...item}
                                    index={index}
                                />
                            )) :
                            <div className="text-center">Вы пока ничего не добавили</div>
                    }
                    {/*{*/}
                    {/*    fileText ?*/}
                    {/*        fileText.map((item, index) => {*/}
                    {/*            return <TestComment key={uniqueId()} item={item} index={index}/>*/}
                    {/*        }) :*/}
                    {/*        <div className="text-center">Вы пока ничего не добавили</div>*/}
                    {/*}*/}
                </div>
            </div>
        </div>
    )
}

export default HomeSide