import React, {useRef} from "react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faCircleXmark} from "@fortawesome/free-solid-svg-icons"
import {faCheckCircle,faSave} from "@fortawesome/free-regular-svg-icons"


const HomeComment = ({item, handleSelect, handleRemove,handleSave, index}) => {
    const inputRef = useRef()
    const textareaRef = useRef()

    return (
        <div className={`hashtag__comment ${item.selected ? 'selected' : ''}`}>
            <div className="hashtag__comment_top flex justify-content-between align-center">
                <h2 className="hashtag__comment_title">
                    Блок #{index + 1}
                </h2>
                <div className="hashtag__comment-control flex">
                    <button className="hashtag__comment-control_btn hashtag__comment-control_remove" onClick={() => handleRemove(item)}>
                        <FontAwesomeIcon icon={faCircleXmark}/>
                    </button>
                    <button className="hashtag__comment-control_btn hashtag__comment-control_check" onClick={() => handleSelect(item)}>
                        <FontAwesomeIcon icon={faCheckCircle}/>
                    </button>
                    <button className="hashtag__comment-control_btn hashtag__comment-control_save" onClick={() => handleSave(item, inputRef.current.value, textareaRef.current.value)}>
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
                        id={item.key[0]}
                        defaultValue={item.text1}
                        className={"w-100"}
                    />
                    <label
                        htmlFor={item.key[0]}
                    >
                        Комментарий 1
                    </label>
                </div>
                <div className="input-field">
                    <textarea
                        ref={textareaRef}
                        id={item.key[1]}
                        defaultValue={item.text2}
                        className={"w-100"}
                    />
                    <label
                        htmlFor={item.key[1]}
                    >
                        Комментарий 2
                    </label>
                </div>
            </div>
        </div>
    )
}

export default HomeComment