import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import Accounts from "./Accounts";
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from "react-router-dom";

const component = render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Accounts />} />
        </Routes >
    </BrowserRouter>
);

test('renders Account component', () => {
    component.getByText('Seleccione la Cuenta a Consultar');
    expect(component.container).toHaveTextContent('Consulta de Saldo');
    expect(component.container).toHaveTextContent('Más opciones');
});