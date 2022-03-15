import {Routes, Route, Navigate} from "react-router-dom";
import Autoreg from "../pages/Autoreg/Autoreg";
import Parsing from "../pages/Parsing/Parsing";
import Invite from "../pages/Invite/Invite";
import Mailing from "../pages/Mailing/Mailing";
import Chat from "../pages/Chat/Chat";
import Checker from "../pages/Checker/Checker";
import Session from "../pages/Session/Session";
import Setting from "../pages/Setting/Setting";
import Payment from "../pages/Payment/Payment";
import Instruction from "../pages/Instruction/Instruction";
import Faq from "../pages/Faq/Faq";
import Help from "../pages/Help/Help";
import Exit from "../pages/Exit/Exit";



const Routing = () => {
  return(
    <Routes>
        <Route path="/" element={<Autoreg/>}/>
        <Route path="/parsing" element={<Navigate to={"/parsing/telegram"} replace/>}/>
          <Route path="/parsing/:id" element={<Parsing/>}/>
        <Route path="/invite" element={<Invite/>}/>
        <Route path="/mailing" element={<Mailing/>}/>
        <Route path="/chat" element={<Chat/>}/>
        <Route path="/checker" element={<Checker/>}/>
        <Route path="/session" element={<Session/>}/>

        <Route path="/setting" element={<Setting/>}/>
        <Route path="/payment" element={<Payment/>}/>
        <Route path="/instruction" element={<Instruction/>}/>
        <Route path="/faq" element={<Faq/>}/>
        <Route path="/help" element={<Help/>}/>
        <Route path="/exit" element={<Exit/>}/>

        <Route path="*" element={<Autoreg/>}/>
    </Routes>
  )
}

export default Routing