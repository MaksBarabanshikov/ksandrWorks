import * as yup from "yup";
import {useForm} from "react-hook-form"
import {yupResolver} from "@hookform/resolvers/yup";
import Block from "../common/Block"
import logo from "../../Assets/image/logo.png"
import subtract from "../../Assets/image/header/user/Subtract.svg"
import "./User.scss"
import {parsePhoneNumber} from "libphonenumber-js";

const schema = yup.object({
    fio: yup.string().required("Поле обязательно к заполнению").min(10, "Минимум 10 символов"),
    email: yup.string().email("Введите корректный email").required("Поле обязательно к заполнению"),
    tel: yup.string().required("Поле обязательно к заполнению"),
    oldPassword: yup.string().required("Поле обязательно к заполнению").min(5, "Минимум 5 символов"),
    newPassword: yup.string().required("Поле обязательно к заполнению").min(5, "Минимум 5 символов")
})

const User = ({visible}) => {
    const {register, handleSubmit, formState: {errors}} = useForm({
        mode: "onBlur",
        resolver: yupResolver(schema)
    })

    const normalizePhoneNumber = value => {
        const phoneNumber = parsePhoneNumber(value)

        if (!phoneNumber) {
            return value
        }

        return (
            phoneNumber.formatInternational()
        )
    }

    const onSubmit = (data) => {
        alert(JSON.stringify(data, null, 2))
    }

    return (
        <div className={`header-user user user-${visible ? "visible" : ""}`}>
            <form className="user-form" onSubmit={handleSubmit(onSubmit)}>
                <div className="user-column">
                    <div className="user-head">
                        <h1 className="user-title">
                            Учетная запись
                        </h1>
                        <p className="user-subtitle">
                            В данном окне вы можете изменить свои персональные
                            данные и пароль. Приятного пользования!
                        </p>
                    </div>
                    <div className="user-data">
                        <label className="user-label">
                            <span>Ф.И.О.</span>
                            <input
                                className={!!errors.fio ? "input-error" : null}
                                {...register("fio")}
                                type="text"
                            />
                            <div className="user-errors">
                                {!!errors.fio && <p>{errors?.fio?.message}</p>}
                            </div>
                        </label>
                        <label className="user-label">
                            <span>E-mail</span>
                            <input
                                className={!!errors.email ? "input-error" : null}
                                {...register("email")}
                                type="email"
                            />
                            <div className="user-errors">
                                {errors?.email && <p>{errors?.email?.message || "Error!"}</p>}
                            </div>
                        </label>
                        <label className="user-label">
                            <span>Номер телефона</span>
                            <input
                                className={!!errors.tel ? "input-error" : null}
                                {...register("tel")}
                                defaultValue={"+7"}
                                type="tel"
                                onChange={event => {
                                    event.target.value = normalizePhoneNumber(event.target.value)
                                }}
                            />
                            <div className="user-errors">
                                {errors?.tel && <p>{errors?.tel?.message || "Error!"}</p>}
                            </div>
                        </label>
                    </div>
                    <div className="user-password">
                        <label className="user-label">
                            <span>Старый пароль</span>
                            <input
                                className={!!errors.oldPassword ? "input-error" : null}
                                {...register("oldPassword")}
                                type="password"
                            />
                            <div className="user-errors">
                                {!!errors.oldPassword && <p>{errors?.oldPassword?.message}</p>}
                            </div>
                        </label>
                        <label className="user-label">
                            <span>Новый пароль</span>
                            <input
                                className={!!errors.newPassword ? "input-error" : null}
                                {...register("newPassword")}
                                type="password"
                            />
                            <div className="user-errors">
                                {!!errors.newPassword && <p>{errors?.newPassword?.message || "Error!"}</p>}
                            </div>
                        </label>
                    </div>
                </div>
                <div className="user-column">
                    <Block stylees="logo">
                        <img className="logo-image" src={logo} alt="logo"/>
                        <Block stylees="logo__text">
                            <h6 className="logo__title">
                                TeleSpace
                            </h6>
                        </Block>
                    </Block>
                    <img src={subtract} alt=""/>
                    <input type="submit" className="blue-btn" value="Подтвердить"/>
                </div>
            </form>
        </div>
    )
}

export default User