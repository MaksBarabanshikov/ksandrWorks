import {pathName} from "./navigateData";

import regImage from "../image/sidebar/Key_alt_light.svg";
import parsingImage from "../image/sidebar/Load_circle.svg";
import userImage from "../image/sidebar/User_add.svg";
import mailImage from "../image/sidebar/Mail.svg";
import chatImage from "../image/sidebar/Chat.svg";
import checkImage from "../image/sidebar/check_ring.svg";
import timeImage from "../image/sidebar/Time.svg";
import settingImage from "../image/sidebar/Setting.svg";
import cardImage from "../image/sidebar/Credit_card.svg";
import bookImage from "../image/sidebar/Book_open.svg";
import questionImage from "../image/sidebar/Question.svg";
import commentImage from "../image/sidebar/comment_light.svg";
import exitImage from "../image/sidebar/exit.svg";

export const sidebarTop = [
            {img: regImage, text: pathName.autoreg.state, path: pathName.autoreg.path},
            {img: parsingImage, text: pathName.parsing.state, path: pathName.parsing.path},
            {img: userImage, text: pathName.invite.state, path: pathName.invite.path},
            {img: mailImage, text: pathName.mailing.state, path: pathName.mailing.path},
            {img: chatImage, text: pathName.chat.state, path: pathName.chat.path},
            {img: checkImage, text: pathName.checker.state, path: pathName.checker.path},
            {img: timeImage, text: pathName.session.state, path: pathName.session.path}
]

export const  sidebarMiddle = [
    {img: settingImage, text: pathName.setting.state, path: pathName.setting.path},
    {img: cardImage, text: pathName.payment.state, path: pathName.payment.path},
    {img: bookImage, text: pathName.instruction.state, path: pathName.instruction.path},
    {img: questionImage, text: pathName.faq.state, path: pathName.faq.path}
]

export const sidebarBottom = [
    {img: commentImage, text: pathName.help.state, path: pathName.help.path},
    {img: exitImage, text: pathName.exit.state, path: pathName.exit.path}
]