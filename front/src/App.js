import React, {useState} from "react";
import Routing from "./Components/Routes/Route";
import Block from "./Components/common/Block";
import Container from "./Components/common/Container";
import NewSideBar from "./Components/newSideBar/newSideBar";
import HelloModal from "./Components/Modal/HelloModal";
import "./App.scss";
import "slick-carousel/slick/slick-theme.scss";
import "slick-carousel/slick/slick.scss";
import {Context} from "./context/context";

const App = () => {
    const [isOpenFB, setIsOpenFB] = useState(false)
    const openModalFB = () => {
        setIsOpenFB(true)
    }
    const closeModalFB = () => {
        setIsOpenFB(false)
    }
    return (
        <Context.Provider value={{
            openModalFB, closeModalFB, isOpenFB
        }}>
            <div className="App">
                <NewSideBar/>
                <Block stylees="content">
                    <Container>
                        <Routing/>
                    </Container>
                </Block>
            </div>
        </Context.Provider>
    );
}

export default App;
