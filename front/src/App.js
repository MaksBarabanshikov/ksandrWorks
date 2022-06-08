import Routing from "./Components/Routes/Route";
import Block from "./Components/common/Block";
import "./App.scss";
import Container from "./Components/common/Container";
import React from "react";
import NewSideBar from "./Components/newSideBar/newSideBar";
import "slick-carousel/slick/slick.scss";
import "slick-carousel/slick/slick-theme.scss";
import HelloModal from "./Components/Modal/HelloModal";

function App() {
    return (
        <div className="App">
                <NewSideBar/>
                <Block stylees="content">
                    <Container>
                        <Routing/>
                    </Container>
                </Block>
            <HelloModal/>
        </div>
    );
}

export default App;
