import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { mount } from 'enzyme';

import Component from '../../components/PriceList';
import { Price } from '../../components/PriceList/styles';

describe('Price list component', () => {
  it('should be render all items in price.', () => {
    const prices = [
      [
        '2019-11-01',
        {
          close: '11.7700',
          high: '11.9450',
          low: '11.6400',
          open: '11.8900',
          volume: '1176669',
        },
      ],
    ];

    const wrapper = mount(
      <BrowserRouter>
        <Component list={prices} />
      </BrowserRouter>,
    );

    expect(wrapper.find(Price).length).toBe(1);
  });
});
