import React, {useEffect, useRef, useState} from "react";
import Header from "../../Components/header/Header";
import RemainingPosts from "./RemainingPosts";
import SliderPost from "./SliderPost";
import HashtagsSide from "./HashtagsSide";
import HelloModal from "../../Components/Modal/HelloModal";
import {useForm} from "react-hook-form";
import {faStar} from "@fortawesome/free-regular-svg-icons"
import {faHashtag} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {useDispatch, useSelector} from "react-redux";
import {addFavorites, transformFavorites} from "../../redux/modules/favoritesSlice";
import {openModalProcess} from "../../redux/modules/modalSlice";
import ProcessBarModal from "../../Components/Modal/ProcessBar";
import {useGetFavoritesQuery, useSendFavoritesMutation, useSendFileMutation} from "../../redux/services/hashtagsApi";
import {skipToken} from "@reduxjs/toolkit/dist/query/react";
import './Hashtags.scss';


const Hashtags = () => {
    const refInput1 = useRef()
    const refInput2 = useRef()
    const {register, handleSubmit} = useForm()
    const [sendFile, isFulfilled] = useSendFileMutation()
    const {data: favorites} = useGetFavoritesQuery(isFulfilled.status === "fulfilled" ?
        null :
        skipToken)
    const [sendFavorites] = useSendFavoritesMutation()
    const [isPostId, setIsPostId] = useState(true);

    const myFavorites = useSelector(state => state.favorites.favorites)
    const isOpenProcess = useSelector(state => state.modalFb.isOpenProcess)
    const fbPage = useSelector(state => state.facebook.user.fbPage)
    const postId = useSelector(state => state.instagramPosts.currentPostId)

    const dispatch = useDispatch()

    const handleAddFavorites = () => {
        if (refInput1.current.value && refInput2.current.value) {
            const favorites = [
                refInput1.current.value,
                refInput2.current.value
            ]
            dispatch(addFavorites(favorites))
            refInput1.current.value = ""
            refInput2.current.value = ""
            refInput1.current.focus()
        }
    }

    const addFavoritesEnter = (event) => {
        if (event.key === "Enter") {
            handleAddFavorites()
        }
    }

    useEffect(() => {
        if (favorites) {
            dispatch(transformFavorites(favorites))
        }
    }, [favorites, dispatch])

    const onSubmit = data => {
        if (!(window.File && window.FileReader && window.FileList && window.Blob)) {
            alert('Файловые API не полностью поддерживаются в этом браузере.')
        }

        const file = data.files[0]

        if (!file.type.match('text.*')) {
            return alert(file.name + " is not a valid text file.");
        }

        const reader = new FileReader()

        reader.readAsText(file)

        reader.onload = async () => {
            await sendFile({
                file: reader.result
            })
        }
    }

    const sendForProcessing = async () => {
        const data = myFavorites.map(f => ({
                text1: f.text1,
                text2: f.text2.join(" "),
            }
        ))
        await sendFavorites({data})
        dispatch(openModalProcess())
    }

    const checkForDisabled = () => {
        if (!!fbPage && myFavorites.length && !!postId) {
            setIsPostId(false)
        } else {
            setIsPostId(true)
        }
    }

    useEffect(() => {
            checkForDisabled()
    }, [myFavorites, fbPage, postId]);


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
                                комментарий с указанными вами хэштегами. После этого первый комментарий будет
                                удален.
                            </p>
                        </div>
                        <div className="main colm-2 all-btn-strong justify-content-between">
                            <div className="hashtag__block_inputs mr-25 flex-column justify-content-between">
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
                                            onClick={() => handleAddFavorites()}
                                        >
                                            <FontAwesomeIcon icon={faStar}/>
                                        </button>
                                    </div>
                                </div>
                                <div>
                                    <button className="blue-btn mb-20"
                                            onClick={() => sendForProcessing()}
                                            disabled={isPostId}
                                    >
                                        Отправить в обработку
                                    </button>
                                    <button className="gray-btn mb-20">Остановить обработку</button>
                                    <RemainingPosts number={30}/>
                                </div>
                            </div>
                            <div className="hashtag__block_slider flex justify-content-end">
                                <SliderPost checkId={checkForDisabled}/>
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
                                    <div>Необходимо переподключить токен. Сделайте это по соответствующей кнопке
                                    </div>
                                </li>
                                <li>
                                    <div>Процесс находиться на паузе</div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div>
                    <HashtagsSide/>
                </div>
            </div>
            {isOpenProcess && <ProcessBarModal/>}
            <HelloModal/>

        </>
    )
}

export default Hashtags