import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCircleXmark} from "@fortawesome/free-solid-svg-icons";
import {faCheckCircle, faSave} from "@fortawesome/free-regular-svg-icons";
import React from "react";

const TestComment = ({item, index}) => {
    const uniqueId = () => (
        Math.random().toString(16).slice(2)
    )
    return(
        <div className={`hashtag__comment`}>
            <div className="hashtag__comment_top flex justify-content-between align-center">
                <h2 className="hashtag__comment_title">
                    Блок № {index + 1}
                </h2>
                <div className="hashtag__comment-control flex">
                    <button className="hashtag__comment-control_btn hashtag__comment-control_remove">
                        <FontAwesomeIcon icon={faCircleXmark}/>
                    </button>
                    <button className="hashtag__comment-control_btn hashtag__comment-control_check">
                        <FontAwesomeIcon icon={faCheckCircle}/>
                    </button>
                    <button className="hashtag__comment-control_btn hashtag__comment-control_save">
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
                        type="text"
                        className={"w-100"}
                        defaultValue={uniqueId()}
                    />
                    <label
                    >
                        Комментарий 1
                    </label>
                </div>
                <div className="input-field">
                    <textarea
                        className={"w-100"}
                        defaultValue={item.join(" ")}
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

export default TestComment