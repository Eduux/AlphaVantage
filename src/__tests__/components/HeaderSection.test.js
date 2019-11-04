import React from 'react';
import { Link, BrowserRouter } from 'react-router-dom';
import { mount } from 'enzyme';

import Component from '../../components/HeaderSection';

describe('Header Section component', () => {
  it('should be render text prop', () => {
    const wrapper = mount(<Component text="Teste" />);

    expect(wrapper.text()).toBe('Teste');
  });

  it('should be not render back prop', () => {
    const wrapper = mount(<Component text="Teste" />);

    expect(wrapper.exists(Link)).toBe(false);
  });

  it('should be render back', () => {
    const wrapper = mount(
      <BrowserRouter>
        <Component text="Teste" pathPage="/" />
      </BrowserRouter>,
    );

    expect(wrapper.exists(Link)).toBe(true);
  });
});
