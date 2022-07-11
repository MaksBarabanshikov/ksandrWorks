import React, {Suspense} from "react";
import {Routes, Route, Navigate} from "react-router-dom";
import Loader from "../common/Loader";
import Layout from "../../Layout/Layout";

const Hashtags = React.lazy(() => import('../../Pages/Hashtags/Hashtags'))
const Landing = React.lazy(() => import('../../Pages/Landing/Landing'))
const Payment = React.lazy(() => import('../../Pages/Payment/Payment'))
const Instruction = React.lazy(() => import('../../Pages/Instruction/Instruction'))
const Faq = React.lazy(() => import('../../Pages/Faq/Faq'))
const Help = React.lazy(() => import('../../Pages/Help/Help'))
const Routing = () => {
    return (
        <Routes>
            <Route path="/" element={<Layout/>}>
                <Route index element={
                    <Suspense fallback={<Loader width={50} height={50}/>}>
                        <Landing/>
                    </Suspense>
                }/>
                <Route path="/hashtags" element={
                    <Suspense fallback={<Loader width={50} height={50}/>}>
                        <Hashtags/>
                    </Suspense>
                }/>
                <Route path="/payment" element={
                    <Suspense fallback={<Loader width={50} height={50}/> }>
                        <Payment/>
                    </Suspense>
                }/>
                <Route path="/instruction" element={
                    <Suspense fallback={<Loader width={50} height={50}/> }>
                        <Instruction/>
                    </Suspense>
                }/>
                <Route path="/faq" element={
                    <Suspense fallback={<Loader width={50} height={50}/> }>
                        <Faq/>
                    </Suspense>
                }/>
                <Route path="/help" element={
                    <Suspense fallback={<Loader width={50} height={50}/> }>
                        <Help/>
                    </Suspense>
                }/>
            </Route>
            <Route path="*" element={<Navigate to="/" />}/>
        </Routes>
    )
}

export default Routing