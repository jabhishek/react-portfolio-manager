import React from 'react';
import {expect} from 'chai';
import { shallow } from 'enzyme';
import Portfolio from './portfolio';

describe('portfolio', () => {
  it('should exist', () => {
    const wrapper = shallow(<Portfolio/>);
    expect(wrapper).to.exist;
  })
})