import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { mount } from 'enzyme';

import Component from '../../components/CompanyList';
import { Company } from '../../components/CompanyList/styles';

describe('Company list component', () => {
  it('should be render all items in list.', () => {
    const data = [
      {
        symbol: 'TST',
        name: 'TEST',
        region: 'Brazil',
        currency: 'BRL',
      },
    ];

    const wrapper = mount(
      <BrowserRouter>
        <Component list={data} />
      </BrowserRouter>,
    );

    expect(wrapper.find(Company).length).toBe(1);
  });
});
