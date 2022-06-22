import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from 'react-router-dom';
import { api } from '../../Services/Api';

export const AccountDetails = () => {
    const history = useNavigate();
    const [account, setAccount] = useState({});
    const { clientId, accountId } = useParams();
    const getAccount = async () => {
        const account = await api.searchAccount(clientId, accountId);
        setAccount(account);
    };
    useEffect(() => {
        getAccount();
    }, [])

    return (
        <>
            <div className="main">
                <div className="header"/>
                <div className="account-details-container">
                    <div className="account-details-container__account-details">
                        <h3>Numero de Cliente: {account.numero_de_cliente}</h3>
                        <h3>Cuenta Corriente Nro: {account.numero_de_cuenta}</h3>
                        <h3>Monto: {account.monto}</h3>
                    </div>
                    <div className="btn-back"
                        onClick={() => history(`/?client=${account.numero_de_cliente}`)}
                    >
                        <h3>Volver</h3>
                    </div>
                </div>
            </div>
        </>
    )
}