import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faXmark} from "@fortawesome/free-solid-svg-icons";
import React from "react";

const CloseModalBtn = ({ handleClose }) => {
    return (
        <button
            className="inline text-black text-right text-2xl p-0 max-w-[20px]"
            onClick={() => handleClose()}
        >
            <FontAwesomeIcon icon={faXmark}/>
        </button>
    )
}

export default CloseModalBtn
