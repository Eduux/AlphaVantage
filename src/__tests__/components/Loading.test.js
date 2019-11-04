import React from 'react';
import { mount } from 'enzyme';

import Component from '../../components/Loading';

describe('Loading component', () => {
  it('should be render.', () => {
    const wrapper = mount(<Component />);

    expect(wrapper).toBeTruthy();
  });
});
