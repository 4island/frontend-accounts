import React from "react";
import {useNavigate} from 'react-router-dom';

const Account = (props) => {
    const history = useNavigate();
    const account = props.accountNumber;
    return (
        <div className="accounts-grid__account-box"
            onClick={ () => {
                if (account) {
                    history(`/account/${props.clientNumber}/${props.accountNumber}`);
                }
            }}
        >
            <h3>Cuenta Corriente Nro: {props.accountNumber}</h3>
        </div>
    )
}

export default Account;