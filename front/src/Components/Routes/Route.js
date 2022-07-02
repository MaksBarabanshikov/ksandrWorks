import React from "react";
import {Routes, Route, Navigate} from "react-router-dom";
import Home from "../../pages/Home/Home";
import Payment from "../../pages/Payment/Payment";
import Instruction from "../../pages/Instruction/Instruction";
import Faq from "../../pages/Faq/Faq";
import Help from "../../pages/Help/Help";
import Exit from "../../pages/Exit/Exit";

const Routing = () => {
    return (
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/payment" element={<Payment/>}/>
            <Route path="/instruction" element={<Instruction/>}/>
            <Route path="/faq" element={<Faq/>}/>
            <Route path="/help" element={<Help/>}/>
            <Route path="/exit" element={<Exit/>}/>

            <Route path="*" element={<Navigate to="/" />}/>
        </Routes>
    )
}

export default Routing