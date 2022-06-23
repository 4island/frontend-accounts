import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import Options from "./Options";

describe('<Options />', () => {
    let mockFunction
    beforeEach(() => {
        mockFunction = jest.fn();
    })

    test('The Options component should show himself', () => {
        const component = render(
            <Options
                isShowing={true}
                hide={mockFunction}
                clientId={1}
                history={mockFunction}
            >
            </Options>
        );
        expect(component).toBeDefined;
        component.getByText('Hacer una transferencia');
    });

    test('The Options component should not show himself', () => {
        const component = render(
            <Options
                isShowing={false}
                hide={mockFunction}
                clientId={1}
                history={mockFunction}
            >
            </Options>
        );
    
        expect(component).toBeNull;
    });
});
