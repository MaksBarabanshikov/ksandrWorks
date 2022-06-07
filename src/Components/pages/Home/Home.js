import React, {useRef, useState} from "react";
import Header from "../../header/Header";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faStar} from "@fortawesome/free-regular-svg-icons"
import RemainingPosts from "./RemainingPosts";
import SliderPost from "./SliderPost";
import HomeSide from "./HomeSide";
import {useForm} from "react-hook-form";
import axios from "axios"
import './Home.scss';
import {faHashtag} from "@fortawesome/free-solid-svg-icons";
import fileOfHashtags from "../../../request/POST/fileOfHashtags";


const Home = () => {
    const refInput1 = useRef()
    const refInput2 = useRef()
    const [favorit, setFavorit] = useState(null)
    const [fileText, setFileText] = useState(null)
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

    const addFavoritesEnter = (event) => {
        if (event.key === "Enter") {
            addFavorites()
        }
    }

    const onSubmit = data => {

        if (! (window.File && window.FileReader && window.FileList && window.Blob)) {
            alert('The File APIs are not fully supported in this browser.')
        }

        const file = data.files[0]

        if (!file.type.match('text.*')) {
            return alert(file.name + " is not a valid text file.");
        }

        const reader = new FileReader()
        reader.readAsText(file)

        reader.onload = () => {
            fileOfHashtags(reader.result)
            console.log(reader.result)

            // const textToArray = reader.result.split(/,?\s+/).map(x => "#" + x)
            // const size = 30; //размер подмассива
            // const subarray = []; //массив в который будет выведен результат.
            // for (let i = 0; i <Math.ceil(textToArray.length/size); i++){
            //     subarray[i] = textToArray.slice((i*size), (i*size) + size);
            // }
            // console.log(subarray);
            // setFileText(subarray);
        }
    }

    return (
        <>
            <Header title="Хештеги" icon={faHashtag}/>
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
                        <div className="main colm-2 all-btn-strong justify-content-between">
                            <div className="mr-25 flex-column justify-content-between">
                                <div>
                                    <div className="input-field">
                                        <input type="text"
                                               id="comment1"
                                               className={"w-100"}
                                               ref={refInput1}
                                               onKeyDown={(event) => addFavoritesEnter(event)}
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
                                            onKeyDown={(event) => addFavoritesEnter(event)}
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
                            <div className="flex justify-content-end">
                                <SliderPost/>
                            </div>
                        </div>
                    </div>
                    <div className="hashtag__block">
                        <div className="top border-bottom pb-25 mb-20">
                            <h1 className="title">
                                Процессы
                            </h1>
                        </div>
                        <div className="main">
                            <ul className="hashtag__list">
                                <li>
                                    <div>Необходимо переподключить токен. Сделайте это по соответствующей кнопке</div>
                                </li>
                                <li>
                                    <div>Процесс находиться на паузе</div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div>
                    <HomeSide favorit={favorit} fileText={fileText}/>
                </div>
            </div>
        </>
    )
}

export default Home