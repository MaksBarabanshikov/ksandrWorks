import React, {useRef, useState} from "react";
import Header from "../../header/Header";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faStar} from "@fortawesome/free-regular-svg-icons"
import RemainingPosts from "./RemainingPosts";
import SliderPost from "./SliderPost";
import HomeSide from "./HomeSide";
import {useForm} from "react-hook-form";
import './Home.scss';
import HelloModal from "../../Modal/HelloModal";


const Home = () => {
    const refInput1 = useRef()
    const refInput2 = useRef()
    const [favorit, setFavorit] = useState(null)
    const { register, handleSubmit } = useForm()

    const addFavorites = () => {
        if (refInput1.current.value && refInput2.current.value) {
            setFavorit(() => (
                [{
                    value1: refInput1.current.value,
                    value2: refInput2.current.value
                }]
            ))
            refInput1.current.value = ""
            refInput2.current.value = ""
            refInput1.current.focus()
        }
    }
    const onSubmit = data => {
        console.log(data.files[0])
    }

    return (
        <>
            <Header title="Главная"/>
            <div className="hashtag">
                <div>
                    <div className="hashtag__block mb-25">
                        <div className="top mb-20">
                            <h1 className="title mb-20">
                                Хештеги
                            </h1>
                            <p className="border-bottom gray-text">
                                Сервис оставит комментарий под выбранным вами сообщением, а под первым комментарием
                                разместит
                                комментарий с указанными вами хэштегами. После этого первый комментарий будет удален.
                            </p>
                        </div>
                        <div className="main colm-2 all-btn-strong">
                            <div className="mr-25 flex-column justify-content-between">
                                <div>
                                    <div className="input-field">
                                        <input type="text"
                                               id="comment1"
                                               className={"w-100"}
                                               ref={refInput1}
                                        />
                                        <label
                                            htmlFor="comment1"
                                        >
                                            Комментарий 1
                                        </label>
                                    </div>
                                    <div className="input-field">
                                        <input
                                            type="text"
                                            id="comment2"
                                            className={"w-100"}
                                            ref={refInput2}
                                        />
                                        <label
                                            htmlFor="comment2"
                                        >
                                            Комментарий 2
                                        </label>
                                    </div>
                                    <div className="button-group flex mb-20">
                                        <form className="hashtag__form" onChange={handleSubmit(onSubmit)}>
                                            <label className="btn blue-btn-invert">
                                                Загрузить список
                                                <input {...register('files')} type="file" accept={'.txt'}/>
                                            </label>
                                        </form>
                                        <button
                                            className="button blue-btn btn-fav"
                                            onClick={() => addFavorites()}
                                        >
                                            <FontAwesomeIcon icon={faStar}/>
                                        </button>
                                    </div>
                                </div>
                                <div>
                                    <button className="blue-btn mb-20">Отправить в обработку</button>
                                    <button className="gray-btn mb-20">Остановить обработку</button>
                                    <RemainingPosts number={30}/>
                                </div>
                            </div>
                            <div>
                                <SliderPost/>
                            </div>
                        </div>
                    </div>
                    <div className="hashtag__block">
                        <div className="top mb-20">
                            <h1 className="title">
                                Процессы
                            </h1>
                        </div>
                        <div className="main">
                            <ul className="hashtag__list">
                                <li>
                                    Необходимо переподключить токен. Сделайте это по соответствующей кнопке
                                </li>
                                <li>
                                    Процесс находиться на паузе
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div>
                    <HomeSide favorit={favorit}/>
                </div>
            </div>
            <HelloModal/>
        </>
    )
}

export default Home