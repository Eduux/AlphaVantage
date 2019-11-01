import React from 'react';
import { mount } from 'enzyme';

import Component from '../../components/NotFound';

describe('Not found component', () => {
  it('should be render.', () => {
    const MakeContainerWrapper = Component;
    const wrapper = mount(<MakeContainerWrapper />);

    expect(wrapper).toBeTruthy();
  });
});
