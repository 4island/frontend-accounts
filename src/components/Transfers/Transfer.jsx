import React from "react";

const Account = (props) => {
    return (
        <div className="transfers-details-container__transfers-details">
            <h3>Numero de Transferencia: {props.number}</h3>
            <h3>Cuenta de Origen: {props.source}</h3>
            <h3>Cuenta de Destino: {props.post}</h3>
            <h3>Monto: {props.amount}</h3>
            <h3>Cliente numero: {props.client}</h3>
        </div>
    )
}

export default Account;