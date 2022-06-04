import Sidebar from "./Components/sidebar/Sidebar";
import Routing from "./Components/Routes/Route";
import Block from "./Components/common/Block";
import "./App.scss";
import Container from "./Components/common/Container";
import React from "react";
import NewSideBar from "./Components/newSideBar/newSideBar";

function App() {
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
