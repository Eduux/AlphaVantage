import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { mount } from 'enzyme';

import Component from '../../components/CompanyList';

describe('Company list component', () => {
  it('should be render.', () => {
    const MakeContainerWrapper = Component;
    const wrapper = mount(
      <BrowserRouter>
        <MakeContainerWrapper />
      </BrowserRouter>,
    );

    expect(wrapper).toBeTruthy();
  });
});
