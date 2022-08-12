import {pathName} from "./navigateData";

import {faHome} from "@fortawesome/free-solid-svg-icons/faHome";
import {faFileDownload} from "@fortawesome/free-solid-svg-icons/faFileDownload";
import {faUserPlus} from "@fortawesome/free-solid-svg-icons/faUserPlus";
import {faEnvelope} from "@fortawesome/free-solid-svg-icons/faEnvelope";
import {faHashtag} from "@fortawesome/free-solid-svg-icons/faHashtag";
import {faComment} from "@fortawesome/free-solid-svg-icons/faComment";
import {faCheckCircle} from "@fortawesome/free-regular-svg-icons/faCheckCircle";
import {faStopwatch} from "@fortawesome/free-solid-svg-icons/faStopwatch";
import {faCog} from "@fortawesome/free-solid-svg-icons/faCog";
import {faWallet} from "@fortawesome/free-solid-svg-icons/faWallet";
import {faBookOpen} from "@fortawesome/free-solid-svg-icons/faBookOpen";
import {faQuestionCircle} from "@fortawesome/free-regular-svg-icons/faQuestionCircle";
import {faDoorOpen} from "@fortawesome/free-solid-svg-icons/faDoorOpen";
import {faKey} from "@fortawesome/free-solid-svg-icons/faKey";


export const sidebarTop = [
    {img: faHome, text: pathName.home.state, path: pathName.home.path},
    {img: faHashtag, text: pathName.hashtag.state, path: pathName.hashtag.path},
    {img: faWallet, text: pathName.payment.state, path: pathName.payment.path},
]

export const sidebarMiddle = [
    {img: faBookOpen, text: pathName.instruction.state, path: pathName.instruction.path},
    {img: faQuestionCircle, text: pathName.faq.state, path: pathName.faq.path}
]

export const sidebarBottom = [
    {img: faComment, text: pathName.help.state, path: pathName.help.path},
    {img: faDoorOpen, text: pathName.exit.state, path: pathName.exit.path}
]