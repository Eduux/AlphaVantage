import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { mount } from 'enzyme';

import Component from '../../components/Header';

describe('Header component', () => {
  it('should be render.', () => {
    const wrapper = mount(
      <BrowserRouter>
        <Component />
      </BrowserRouter>,
    );

    expect(wrapper).toBeTruthy();
  });
});
