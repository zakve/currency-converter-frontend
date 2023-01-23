import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import AppBarResponsive from '../../components/AppBarResponsive';

describe('AppBarResponsive', () => {
    it('should render a title with text "Currency Converter"', () => {
        render(<AppBarResponsive />, { wrapper: MemoryRouter });
        expect(screen.getByTestId('title')).toBeInTheDocument();
    });
});
