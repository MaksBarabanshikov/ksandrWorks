import React from 'react';
import logo from '../../../Assets/image/landing/ipostX.svg'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSearch} from "@fortawesome/free-solid-svg-icons/faSearch";
import LandingButton from "./LandingButton";

const HeaderLanding = () => (
    <header className="landing-header">
        <div className="flex justify-content-between align-center">
            <img width="104" src={logo} alt="ipostX"/>
            <nav className="landing-header__nav flex align-center ">
                <ul className="flex">
                    <li>
                        <a href="#">
                            Главная
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            Прайс
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            О нас
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            Контакты
                        </a>
                    </li>
                </ul>
            </nav>
            <LandingButton to="/hashtags" width={'230px'} height={'45px'} children={<span>Личный кабинет</span>}/>
        </div>
    </header>
);

export default HeaderLanding;