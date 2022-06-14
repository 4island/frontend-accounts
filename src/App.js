import React from "react";
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from "react-router-dom";
import MainGrid from './components/MainGrid';
import {AccountDetails} from './components/AccountDetails'
import {LatestTransfers} from './components/LatestTransfers'
import {DoTransfer} from './components/DoTransfer'

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<MainGrid />} />
                <Route path="/account/:clientId/:accountId" element={<AccountDetails />} />
                <Route path="/transfer/:clientId" element={<LatestTransfers />} />
                <Route path="/dotransfer/:clientId" element={<DoTransfer />} />
            </Routes>
        </BrowserRouter>
    )
};

export default App;