import React, { useEffect, useState } from "react";
import { useLocation } from 'react-router-dom';
import Account from "./Account";
import { api } from '../Services/Api';
import useOptions from "./useOptions";
import Options from "./Options";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const MainGrid = () => {
  const query = useQuery();
  const [accounts, setAccounts] = useState([]);
  const { isShowing, toggle } = useOptions();

  const getAccounts = async (value) => {
    const accountsList = await api.searchAccounts(value);
    const slicedAccounts = accountsList.slice(0, 5);
    setAccounts(slicedAccounts);
  };

  useEffect(() => {
    const value = query.get("client");
    if (value) {
      getAccounts(value);
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
        />
      </div>
    </div>
  );
};

export default MainGrid;