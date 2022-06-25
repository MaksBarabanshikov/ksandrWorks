import {useEffect, useState} from "react";
import HomeComment from "./HomeComment";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faToggleOn, faToggleOff, faCircleXmark} from "@fortawesome/free-solid-svg-icons"
import {faSave} from "@fortawesome/free-regular-svg-icons"
import "./HomeSide.scss"
import {useDispatch, useSelector} from "react-redux";
import {getFavorites} from "../../../redux/modules/favoritesSlice";

const HomeSide = () => {
    const [selectAllBtn, setSelectAllBtn] = useState(false)
    const dispatch = useDispatch()
    const favorites = useSelector(state => state.favorites.favorites)

    const [comments, setComments] = useState([])

    const selectAllHandler = () => {
        setSelectAllBtn(() => !selectAllBtn)
    }

    const removeAllSelect = () => {
        setComments(comments.filter(item => !item.selected))
        setSelectAllBtn(false)
    }

    const saveAllHandler = () => {
        comments.map(item => {
            console.log(item)
        })
    }

    // const canselAllSelect = () => {
    //     setComments(comments.map(item => {
    //         item.selected = false
    //         return item
    //     }))
    //     setSelectAllBtn(false)
    // }

    const selectHandle = (item) => {
        setComments(comments.map(comment => {
                if (comment.id === item.id) {
                    comment.selected = true
                }
                return comment
            }
        ))
    }

    const removeHandler = (item) => {
        setComments(comments.filter(comment => !(comment.id === item.id)))
    }

    const saveHandler = (item, inputValue, textareaValue) => {
        setComments(comments.map(comment => {
            if (comment.id === item.id) {
                comment.text1 = inputValue
                comment.text2 = textareaValue
            }
            return comment
        }))
    }

    useEffect(() => {
        setComments(
            comments.map(item => {
                item.selected = selectAllBtn
                return item
            })
        )
    }, [selectAllBtn])

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
                        onClick={() => selectAllHandler()}
                    >
                        <FontAwesomeIcon icon={selectAllBtn ? faToggleOn : faToggleOff}/>
                    </button>
                    <span>Выбрать все</span>
                </label>
                <label className={'flex align-center'}>
                    <button className="hashtag__side-control_select-all"
                            type={"button"}
                            onClick={() => removeAllSelect()}
                    >
                        <FontAwesomeIcon icon={faCircleXmark}/>
                    </button>
                    <span>Удалить отмеченные</span>
                </label>
                <label className={'flex align-center'}>
                    <button className="hashtag__side-control_select-all"
                            type={"button"}
                            onClick={() => saveAllHandler()}
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
                                    key={item.key[0]}
                                    item={item}
                                    handleSelect={selectHandle}
                                    handleRemove={removeHandler}
                                    handleSave={saveHandler}
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