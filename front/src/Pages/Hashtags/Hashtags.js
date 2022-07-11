import React, {useEffect, useRef, useState, Suspense} from "react";
import Header from "../../Components/header/Header";
import RemainingPosts from "./RemainingPosts";
import {useForm} from "react-hook-form";
import {faStar} from "@fortawesome/free-regular-svg-icons"
import {faHashtag} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {useDispatch, useSelector} from "react-redux";
import {addFavorites, transformFavorites} from "../../Utils/redux/modules/favoritesSlice";
import {openModalProcess} from "../../Utils/redux/modules/modalSlice";
import ProcessBarModal from "../../Components/Modal/ProcessBar";
import {
    useGetFavoritesQuery,
    useSendFileMutation
} from "../../Utils/redux/services/hashtagsApi";
import {skipToken} from "@reduxjs/toolkit/dist/query/react";
import './Hashtags.scss';
import FacebookLogo from "../../Components/FacebookLogo/FacebookLogo";
import Loader from "../../Components/common/Loader";

const HelloModal = React.lazy(() => import('../../Components/Modal/HelloModal'))
const HashtagsSide = React.lazy(() => import('./HashtagsSide'))
const SliderPost = React.lazy(() => import('./SliderPost'))

const Hashtags = () => {
    const refInput1 = useRef()
    const refInput2 = useRef()
    const {register, handleSubmit} = useForm()
    const [sendFile, isFulfilled] = useSendFileMutation()
    const {data: favorites} = useGetFavoritesQuery(isFulfilled.status === "fulfilled" ?
        null :
        skipToken)
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

    const checkForDisabled = () => {
        if (!!fbPage && myFavorites.length && postId !== null) {
            setIsPostId(false)
        } else {
            setIsPostId(true)
        }
    }

    useEffect(() => {
        if (favorites) {
            dispatch(transformFavorites(favorites))
        }
    }, [favorites, dispatch])

    useEffect(() => {
        checkForDisabled()
    }, [myFavorites, fbPage, postId])

    return (
        <>
            {!window.FB ? <FacebookLogo hidden={true}/> : null}
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
                                            onClick={() => dispatch(openModalProcess())
                                            }
                                            disabled={isPostId}
                                    >
                                        Отправить в обработку
                                    </button>
                                    <RemainingPosts number={30}/>
                                </div>
                            </div>
                            <div className="hashtag__block_slider flex justify-content-end">
                                <SliderPost isSendId={true}/>
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
                    <Suspense fallback={<Loader width={50} height={50}/>}>
                        <HashtagsSide/>
                    </Suspense>
                </div>
            </div>
            {isOpenProcess && <ProcessBarModal/>}
            <Suspense fallback={<Loader width={50} height={50}/>}>
                <HelloModal/>
            </Suspense>
        </>
    )
}

export default Hashtags