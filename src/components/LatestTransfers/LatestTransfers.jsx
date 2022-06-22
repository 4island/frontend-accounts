import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from 'react-router-dom';
import { api } from '../../Services/Api';
import Transfer from '../Transfer'

export const LatestTransfers = () => {
    const history = useNavigate();
    const [transfers, setTransfers] = useState([]);
    const {clientId} = useParams();
    const getLastestTransfers = async () => {
        const transfers = await api.getTransfers(clientId);
        setTransfers(transfers);
    };
    useEffect(() => {
        getLastestTransfers();
    }, [])

    return (
        <>
            <div className="main">
                <div className="header" />
                <div className="transfers-details-container">
                    {transfers.map((transfer) => <Transfer 
                        number={transfer.numero_transferencia}
                        source={transfer.numero_cuenta_origen}
                        post={transfer.numero_cuenta_destino}
                        amount={transfer.monto}
                        client={transfer.numero_de_cliente}
                        key={transfer.numero_transferencia}></Transfer>)
                    }
                    <div className="btn-back"
                        onClick={() => history(`/?client=${clientId}`)}
                    >
                        <h3>Volver</h3>
                    </div>
                </div>
            </div>
        </>
    )
}