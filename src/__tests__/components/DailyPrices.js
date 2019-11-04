import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { mount } from 'enzyme';

import Component from '../../components/DailyPrices';
import PriceList from '../../components/PriceList';

describe('Daily prices component', () => {
  it('should load prices', () => {
    const prices = {
      '2019-06-13': {
        close: '11.3300',
        high: '11.5100',
        low: '11.2354',
        open: '11.3800',
        volume: '1253300',
      },
    };
    const wrapper = mount(
      <BrowserRouter>
        <Component symbol="TST" prices={prices} />
      </BrowserRouter>,
    );

    expect(wrapper.find(PriceList).length).toBe(1);
  });

  it('should be not load prices', () => {
    const prices = {};
    const wrapper = mount(
      <BrowserRouter>
        <Component symbol="TST" prices={prices} />
      </BrowserRouter>,
    );

    expect(wrapper.find(PriceList).length).toBe(0);
  });
});
