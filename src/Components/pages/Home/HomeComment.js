import React from "react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faCircleXmark} from "@fortawesome/free-solid-svg-icons"
import {faCheckCircle} from "@fortawesome/free-regular-svg-icons"
import {faBox} from "@fortawesome/free-solid-svg-icons"


const HomeComment = ({item, handleSelect, handleRemove, index}) => {

    return (
        <div className={`hashtag__comment ${item.selected ? 'selected' : ''}`}>
            <div className="hashtag__comment_top flex justify-content-between align-center">
                <h2 className="hashtag__comment_title">
                    Блок #{index + 1}
                </h2>
                <div className="hashtag__comment-control flex">
                    <button onClick={() => handleRemove(item)}>
                        <FontAwesomeIcon icon={faCircleXmark}/>
                    </button>
                    <button onClick={() => handleSelect(item)}>
                        <FontAwesomeIcon icon={faCheckCircle}/>
                    </button>
                    <button>
                        <FontAwesomeIcon icon={faBox}/>
                    </button>
                </div>
            </div>
            <div>
                <button className={"blue-btn_invert mb-20"}>
                    Первый комментарий не был отправлен
                </button>
                <div className="input-field mb-20">
                    <input
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