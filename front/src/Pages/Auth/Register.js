import {useEffect} from "react"
import './Auth.scss'
import * as yup from "yup"
import {useForm} from "react-hook-form"
import {yupResolver} from "@hookform/resolvers/yup/dist/yup"
import google from "../../Assets/image/landing/google.svg"
import facebook from "../../Assets/image/landing/facebook.svg"
import AuthLeft from "./AuthLeft";

const Register = () => {

    useEffect(() => {
        document.querySelector('.App').classList.add('auth-wrapper');

        return () => document.querySelector('.auth-wrapper').classList.remove('auth-wrapper');
    },[])

    return (
        <section className="auth">
            <AuthLeft />
            <AuthRight />
        </section>
    )
}

export default Register

const AuthRight = () => {
    const schema = yup.object({
        name: yup.string().required("Поле обязательно к заполнению"),
        email: yup.string().email("Введите корректный email").required("Поле обязательно к заполнению"),
        password: yup.string().required("Поле обязательно к заполнению").min(5, "Минимум 5 символов"),
        iAgree: yup.boolean()
    })

    const {register, handleSubmit, formState: {errors}} = useForm({
        mode: "onBlur",
        resolver: yupResolver(schema)
    })

    const onSubmit = (data) => {
        alert(JSON.stringify(data, null, 2))
    }

    return (
        <div className="auth__right">
            <div className="auth__right_cont">
                <div className="auth__title">
                    <h1>Регистрация</h1>
                    <span>Введите свои данные и продолжайте работу</span>
                </div>
                <form className="auth-form" onSubmit={handleSubmit(onSubmit)}>
                    <label className="auth-label">
                        <span>Ваше имя</span>
                        <input
                            className={!!errors.name ? "input-error" : ""}
                            type="text"
                            placeholder="Ваше имя"
                            {...register("name")}
                        />
                        <div className="error-message">
                            {
                                !!errors.name && <p>{errors?.name?.message}</p>
                            }
                        </div>
                    </label>
                    <label className="auth-label">
                        <span>Ваша почта</span>
                        <input
                            className={!!errors.email ? "input-error" : ""}
                            type="text"
                            placeholder="Ваша почта"
                            {...register("email")}
                        />
                        <div className="error-message">
                            {!!errors.email && <p>{errors?.email?.message}</p>}
                        </div>
                    </label>
                    <label className="auth-label">
                        <span>Придумайте пароль</span>
                        <input
                            className={!!errors.password ? "input-error" : ""}
                            type="text"
                            placeholder="Ваше пароль"
                            {...register("password")}
                        />
                        <div className="error-message">
                            {!!errors.password && <p>{errors?.password?.message}</p>}
                        </div>
                    </label>
                    <label className="auth-label_checkbox">
                        <input
                            className={!!errors.iAgree ? "input-error" : ""}
                            type="checkbox"
                            {...register("iAgree")}
                        />
                        <span>I agree to terms & conditions</span>
                        <div className="error-message">
                            {!!errors.iAgree && <p>{errors?.iAgree?.message}</p>}
                        </div>
                    </label>
                    <button className="auth-btn auth-btn_submit" type="submit">
                        Зарегистрироваться
                    </button>
                </form>
                <button className='auth-btn auth-btn_2auth '>
                    <img src={google} alt="google"/>
                    <span>Регистрация с Google</span>
                </button>
                <button className='auth-btn auth-btn_2auth '>
                    <img src={facebook} alt="facebook"/>
                    <span>Регистрация с FaceBook</span>
                </button>
            </div>
        </div>
    )
}
