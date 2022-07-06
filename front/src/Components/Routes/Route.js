import React from "react";
import {Routes, Route, Navigate} from "react-router-dom";
import Hashtags from "../../Pages/Hashtags/Hashtags";
import Payment from "../../Pages/Payment/Payment";
import Instruction from "../../Pages/Instruction/Instruction";
import Faq from "../../Pages/Faq/Faq";
import Help from "../../Pages/Help/Help";
import Exit from "../../Pages/Exit/Exit";

const Routing = () => {
    return (
        <Routes>
            <Route path="/" element={<Hashtags/>}/>
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