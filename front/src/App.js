import React from "react";
import Routing from "./Components/Routes/Route";
import Block from "./Components/common/Block";
import Container from "./Components/common/Container";
import NewSideBar from "./Components/newSideBar/newSideBar";
import "./App.scss";
import "slick-carousel/slick/slick-theme.scss";
import "slick-carousel/slick/slick.scss";

const App = () => {
    return (
            <div className="App">
                <NewSideBar/>
                <Block stylees="content">
                    <Container>
                        <Routing/>
                    </Container>
                </Block>
            </div>
    );
}

export default App;
