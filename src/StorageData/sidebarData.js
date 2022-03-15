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
            {img: regImage, text: "Авторег", path: "/"},
            {img: parsingImage, text: "Парсинг", path: "/parsing"},
            {img: userImage, text: "Инвайтинг", path: "/invite"},
            {img: mailImage, text: "Рассылка", path: "/mailing"},
            {img: chatImage, text: "Диалоги", path: "/chat"},
            {img: checkImage, text: "Чекер", path: "/checker"},
            {img: timeImage, text: "Сессии", path: "/session"}
]

export const  sidebarMiddle = [
    {img: settingImage, text: "Настройки", path: "/setting"},
    {img: cardImage, text: "Оплата", path: "/payment"},
    {img: bookImage, text: "Инструкция", path: "/instruction"},
    {img: questionImage, text: "FAQ", path: "/faq"}
]

export const sidebarBottom = [
    {img: commentImage, text: "Помощь", path: "/help"},
    {img: exitImage, text: "Выход", path: "/exit"}
]