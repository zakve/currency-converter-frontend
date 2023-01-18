import React from 'react';
import { render, screen } from '@testing-library/react';
import AppBarResponsive from '../AppBarResponsive';

describe('AppBarResponsive', () => {
    it('should render a title with text "Currency Converter"', () => {
        render(<AppBarResponsive />);
        expect(screen.getByTestId('title')).toBeInTheDocument();
    });
});
