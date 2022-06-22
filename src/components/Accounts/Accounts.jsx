import React, { useEffect, useState } from "react";
import { useLocation } from 'react-router-dom';
import Account from "./Account";
import { api } from '../../Services/Api';
import useOptions from "../Options/useOptions";
import Options from "../Options/Options";

const Accounts = () => {
  const query = new URLSearchParams(useLocation().search);
  const [accounts, setAccounts] = useState([]);
  const { isShowing, toggle } = useOptions();
  const client = query.get("client");

  const getAccounts = async (client) => {
    const accountsList = await api.searchAccounts(client);
    const slicedAccounts = accountsList.slice(0, 5);
    setAccounts(slicedAccounts);
  };

  useEffect(() => {
    if (client) {
      getAccounts(client);
    }
  }, [])

  return (
    <>
      <div className="main" />
      <div className="header" />
      <div className="section-titles">
        <h4>Consulta de Saldo</h4>
        <h1>Seleccione la Cuenta a Consultar</h1>
      </div>
      <div className="accounts-grid">
        {accounts.map((account) => <Account accountNumber={account.numero_de_cuenta} clientNumber={account.numero_de_cliente} key={account.numero_de_cuenta}></Account>)}
        <div className="accounts-grid__account-box" onClick={toggle}>
          <h3>Más opciones {'>>'}</h3>
        </div>
        <Options
          isShowing={isShowing}
          hide={toggle}
          clientId={client}
        />
      </div>
    </>
  );
};

export default Accounts;