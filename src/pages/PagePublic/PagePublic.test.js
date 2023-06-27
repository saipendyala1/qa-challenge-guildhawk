import { render, screen } from '@testing-library/react';
import PagePublic from '../PagePublic';

it('on inital render login button is enabled', () => {
    render(<PagePublic />)
    screen.debug();

})