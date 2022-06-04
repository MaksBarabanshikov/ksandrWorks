import {useEffect, useState} from "react";
import HomeComment from "./HomeComment";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faToggleOff} from "@fortawesome/free-solid-svg-icons"
import {faToggleOn} from "@fortawesome/free-solid-svg-icons"
import {faCircleXmark} from "@fortawesome/free-solid-svg-icons"
import {faRotateLeft} from "@fortawesome/free-solid-svg-icons"
import "./HomeSide.scss"

const HomeSide = ({favorit}) => {
    const uniqueId = () => (
        Math.random().toString(16).slice(2)
    )
    const [selectAllBtn, setSelectAllBtn] = useState(false)
    const [comments, setComments] = useState([])

    const selectAllHandler = () => {
        setSelectAllBtn(() => !selectAllBtn)

    }
    const removeAllSelect = () => {
        setComments(comments.filter(item => !item.selected))
        setSelectAllBtn(false)

    }

    const canselAllSelect = () => {
        setComments(comments.map(item => {
            item.selected = false
            return item
        }))
        setSelectAllBtn(false)

    }

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

    useEffect(() => {
        setComments(
            comments.map(item => {
                item.selected = selectAllBtn
                return item
            })
        )
    }, [selectAllBtn])

    useEffect(() => {
        if (favorit) {
            setComments(prevState => ([...prevState, {
                key: [uniqueId(), uniqueId()],
                id: uniqueId(),
                selected: false,
                text1: favorit[0].value1,
                text2: favorit[0].value2
            }]))
        }
    },[favorit])

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
                            onClick={() => canselAllSelect()}
                    >
                        <FontAwesomeIcon icon={faRotateLeft}/>
                    </button>
                    <span>Отменить все</span>
                </label>
            </div>
            <div className="hashtag__side_main">
                <div className="hashtag__side_main-cont">
                    {
                        comments.length ?
                            comments.map((item,index) => (
                                <HomeComment
                                    key={item.key[0]}
                                    item={item}
                                    handleSelect={selectHandle}
                                    handleRemove={removeHandler}
                                    index={index}
                                />
                            )) :
                            <div>пусто</div>
                    }
                </div>
            </div>
        </div>
    )
}

export default HomeSide