import React from 'react';
import { render, screen } from '@testing-library/react';
import Footer from '../Footer';

describe('Footer', () => {
    it('should render the correct text', () => {
        render(<Footer />);
        expect(screen.getByText('Martin Zaklasnik 2023')).toBeInTheDocument();
    });
});
