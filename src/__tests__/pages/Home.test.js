import React from 'react';
import { mount } from 'enzyme';

import Component from '../../pages/Home';

describe('Company Graphic page', () => {
  it('should be render', () => {
    const wrapper = mount(<Component />);
    expect(wrapper).toBeTruthy();
  });
});
