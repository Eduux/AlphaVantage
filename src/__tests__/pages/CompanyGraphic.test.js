import React from 'react';
import { mount } from 'enzyme';

import apiMock from '../../__mocks__/api';

import Component from '../../pages/CompanyGraphic';

describe('Company Graphic page', () => {
  it('should be load data', () => {
    apiMock
      .onGet('?function=TIME_SERIES_INTRADAY&&interval=5min&symbol=BSBR')
      .reply(200);

    const wrapper = mount(
      <Component
        match={{
          params: { id: 'BSBR' },
          isExact: true,
          path: '',
          url: '',
        }}
      />,
    );

    expect(wrapper).toBeTruthy();
  });
});
