import React, {useRef} from "react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faCircleXmark} from "@fortawesome/free-solid-svg-icons"
import {faCheckCircle, faSave} from "@fortawesome/free-regular-svg-icons"
import {useDispatch} from "react-redux";
import {removeHandler, saveHandler, selectHandler} from "../../Utils/redux/modules/favoritesSlice";


const HashtagsComment = ({index, id, selected, text1, text2}) => {
    const inputRef = useRef()
    const textareaRef = useRef()
    const dispatch = useDispatch()
    const textTwo = text2.join(" ")

    const saveFavorite = () => {
        const obj = {
            id,
            text1: inputRef.current.value,
            text2: textareaRef.current.value
        }
        return dispatch(saveHandler(obj))
    }

    return (
        <div className={`hashtag__comment ${selected ? 'selected' : ''}`}>
            <div className="hashtag__comment_top flex justify-content-between align-center">
                <h2 className="hashtag__comment_title">
                    Блок #{index + 1}
                </h2>
                <div className="hashtag__comment-control flex">
                    <button className="hashtag__comment-control_btn hashtag__comment-control_remove"
                            onClick={() => dispatch(removeHandler({id}))}
                    >
                        <FontAwesomeIcon icon={faCircleXmark}/>
                    </button>
                    <button className="hashtag__comment-control_btn hashtag__comment-control_check"
                            onClick={() => dispatch(selectHandler({id}))}
                    >
                        <FontAwesomeIcon icon={faCheckCircle}/>
                    </button>
                    <button className="hashtag__comment-control_btn hashtag__comment-control_save"
                            onClick={() => saveFavorite()}
                    >
                        <FontAwesomeIcon icon={faSave}/>
                    </button>
                </div>
            </div>
            <div>
                <div className={"hashtag__comment_block mb-20"}>
                    Первый комментарий не был отправлен
                </div>
                <div className="input-field mb-20">
                    <input
                        ref={inputRef}
                        type="text"
                        defaultValue={text1}
                        className={"w-100"}
                    />
                    <label>
                        Комментарий 1
                    </label>
                </div>
                <div className="input-field">
                    <textarea
                        ref={textareaRef}
                        defaultValue={textTwo}
                        className={"w-100"}
                    />
                    <label
                    >
                        Комментарий 2
                    </label>
                </div>
            </div>
        </div>
    )
}

export default HashtagsComment