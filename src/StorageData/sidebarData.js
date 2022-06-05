import {pathName} from "./navigateData";

import {faHome} from "@fortawesome/free-solid-svg-icons/faHome";
import {faFileDownload} from "@fortawesome/free-solid-svg-icons/faFileDownload";
import {faUserPlus} from "@fortawesome/free-solid-svg-icons/faUserPlus";
import {faEnvelope} from "@fortawesome/free-solid-svg-icons";
import {faComment} from "@fortawesome/free-solid-svg-icons";
import {faCheckCircle} from "@fortawesome/free-regular-svg-icons";
import {faStopwatch} from "@fortawesome/free-solid-svg-icons";
import {faLink} from "@fortawesome/free-solid-svg-icons";
import {faCog} from "@fortawesome/free-solid-svg-icons";
import {faWallet} from "@fortawesome/free-solid-svg-icons";
import {faBookOpen} from "@fortawesome/free-solid-svg-icons";
import {faQuestionCircle} from "@fortawesome/free-regular-svg-icons";
import {faDoorOpen} from "@fortawesome/free-solid-svg-icons";


export const sidebarTop = [
            {img: faHome, text: pathName.home.state, path: pathName.home.path},
            {img: faFileDownload, text: pathName.parsing.state, path: pathName.parsing.path},
            {img: faUserPlus, text: pathName.invite.state, path: pathName.invite.path},
            {img: faEnvelope, text: pathName.mailing.state, path: pathName.mailing.path},
            {img: faComment, text: pathName.chat.state, path: pathName.chat.path},
            {img: faCheckCircle, text: pathName.checker.state, path: pathName.checker.path},
            {img: faStopwatch, text: pathName.session.state, path: pathName.session.path},
            {img: faLink, text: pathName.hashtag.state, path: pathName.hashtag.path}
]

export const  sidebarMiddle = [
    {img: faCog, text: pathName.setting.state, path: pathName.setting.path},
    {img: faWallet, text: pathName.payment.state, path: pathName.payment.path},
    {img: faBookOpen, text: pathName.instruction.state, path: pathName.instruction.path},
    {img: faQuestionCircle, text: pathName.faq.state, path: pathName.faq.path}
]

export const sidebarBottom = [
    {img: faComment, text: pathName.help.state, path: pathName.help.path},
    {img: faDoorOpen, text: pathName.exit.state, path: pathName.exit.path}
]