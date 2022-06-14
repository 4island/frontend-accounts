import React from "react";
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from "react-router-dom";
import MainGrid from './components/MainGrid';
import {AccountDetails} from './components/AccountDetails'

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<MainGrid />} />
                <Route path="/account/:clientId/:accountId" element={<AccountDetails />} />
            </Routes>
        </BrowserRouter>
    )
};

export default App;