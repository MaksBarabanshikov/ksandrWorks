import React from 'react';
import logo from '../../../Assets/image/landing/ipostX.svg'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSearch} from "@fortawesome/free-solid-svg-icons/faSearch";

const Header = () => (
    <header className="landing-header">
        <div className="container">
            <img src={logo} alt="ipostX"/>
            <nav className="landing-header__nav">
                <ul>
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
            <div className="landing-header__search">
                <input placeholder="Поиск" type="text"/>
                <FontAwesomeIcon icon={faSearch}/>
            </div>
            <button>
                <span></span>
            </button>
        </div>
    </header>
);

export default Header;