import React, { useEffect, useState } from "react";
import { useLocation } from 'react-router-dom';
import Account from "./Account";
import { api } from '../Services/Api';
import useOptions from "./modals/useOptions";
import Options from "./modals/Options";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const MainGrid = () => {
  const query = useQuery();
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
    <div className="main">
      <div className="header" />
      <div className="main__titles">
        <h4>Consulta de Saldo</h4>
        <h1>Seleccione la Cuenta a Consultar</h1>
      </div>
      <div className="main__accounts">
        {accounts.map((account) => <Account accountNumber={account.numero_de_cuenta} clientNumber={account.numero_de_cliente} key={account.numero_de_cuenta}></Account>)}
        <div className="main__account-box" onClick={toggle}>
          <h3>Más opciones {'>>'}</h3>
        </div>
        <Options
          isShowing={isShowing}
          hide={toggle}
          clientId={client}
        />
      </div>
    </div>
  );
};

export default MainGrid;