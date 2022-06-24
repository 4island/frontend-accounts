import '@testing-library/jest-dom/extend-expect';
import { render, fireEvent, screen } from '@testing-library/react';
import Accounts from "./Accounts";
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from "react-router-dom";


describe('<Options />', () => {
    let component
    beforeEach(() => {
        component = render(
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Accounts />} />
                </Routes >
            </BrowserRouter>)
    });

    test('Renders Account component', () => {
        component.getByText('Seleccione la Cuenta a Consultar');
        expect(component.container).toHaveTextContent('Consulta de Saldo');
        expect(component.container).toHaveTextContent('Más opciones');
    });

    test('The hook useOptions show Options modal when options button is clicked', () => {
        const optionsButton = screen.getByText(/Más opciones >>/);
        fireEvent.click(optionsButton);
        const modalOptions = screen.getByText(/Hacer una transferencia/);
        expect(modalOptions.container).toBeDefined;
    });

    test('The hook useOptions close Options when options-button is clicked', () => {
        const optionsButton = screen.getByText(/Más opciones >>/);
        fireEvent.click(optionsButton);
        const modalCloseButton = screen.getByLabelText('Close');
        fireEvent.click(modalCloseButton);
        expect(modalCloseButton.container).toBe(undefined);
    });

});