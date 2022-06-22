import React from "react";
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from "react-router-dom";
import Accounts from './components/Accounts/Accounts';
import {AccountDetails} from './components/AccountDetails/AccountDetails'
import {LatestTransfers} from './components/LatestTransfers/LatestTransfers'
import {DoTransfer} from './components/DoTransfer/DoTransfer'

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Accounts />} />
                <Route path="/account/:clientId/:accountId" element={<AccountDetails />} />
                <Route path="/transfer/:clientId" element={<LatestTransfers />} />
                <Route path="/dotransfer/:clientId" element={<DoTransfer />} />
            </Routes>
        </BrowserRouter>
    )
};

export default App;