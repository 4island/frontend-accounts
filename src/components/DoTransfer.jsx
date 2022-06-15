import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from 'react-router-dom';
import { api } from '../Services/Api';

export const DoTransfer = () => {
    const history = useNavigate();
    const [accounts, setAccounts] = useState([]);
    const { clientId } = useParams();

    const getAccounts = async () => {
        const accounts = await api.searchAccounts(clientId);
        setAccounts(accounts);
    };

    const postClientTransfer = async (data) => {
        try {
            const response = await api.postTransfer(data);
            if (response) alert('Transferencia realizada')
        } catch {
            alert('Hubo un error intente nuevamente');
        }
    };

    useEffect(() => {
        getAccounts();
    }, [])

    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.target);
        const objectData = {
            numero_cuenta_origen: data.get('source'),
            numero_cuenta_destino: data.get('destination'),
            monto: data.get('amount'),
            numero_de_cliente: clientId
        }
        objectData.numero_cuenta_origen != objectData.numero_cuenta_destino ?
        postClientTransfer(objectData) :
        alert('La cuenta de origen debe ser diferente a la del destino!');

    }

    return (
        <div className="main">
            <div className="header" />
            <div className="main__titles">
                <h1>Tranferencia del Cliente nº: {clientId}</h1>
            </div>
            <div className="dotransfers-container">
                <form onSubmit={handleSubmit} className="dotransfers-container__form">
                    <div className="dotransfers-container__form__row">
                        <label>Monto</label>
                        <input name='amount' pattern="^[1-9][0-9]*$" requiered/>
                    </div>
                    <div className="dotransfers-container__form__row">
                        <label>Cuenta origen</label>
                        <select requiere="true" name='source'>
                            {accounts.map((account) => <option key={account.numero_de_cuenta + 1}>{account.numero_de_cuenta}</option>)}
                        </select>
                    </div>
                    <div className="dotransfers-container__form__row">
                        <label>Cuenta destino</label>
                        <select requiere="true" name='destination'>
                            {accounts.map((account) => <option key={account.numero_de_cuenta - 1}>{account.numero_de_cuenta}</option>)}
                        </select>
                    </div>
                    <button className="dotransfers-container__form__btn" type='submit'>Transferir</button>
                </form>
                <div className="btn-back"
                    onClick={() => history(`/?client=${clientId}`)}
                >
                    <h3>Volver</h3>
                </div>
            </div>
        </div>
    )
}