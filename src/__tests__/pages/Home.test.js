import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Home from '../../pages/Home';

describe('Home component', () => {
  it('should be call handleSubmit Function', async () => {
    const { getByTestId } = render(<Home />);

    const input = getByTestId('form-input');
    const form = getByTestId('form-company');
    fireEvent.change(input, { target: { value: 'Tesla' } });
    fireEvent.submit(form);
    expect(!!getByTestId('company-list')).toBe(true);
  });
});
