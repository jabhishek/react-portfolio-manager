import React from 'react';
import { shallow } from 'enzyme';
import AddPortfolio from './add-portfolio';
import { expect } from 'chai';

describe('Add Portfolio', () => {
  it('should have a subheader', () => {
    const wrapper = shallow(<AddPortfolio />);
    const subheader = wrapper.find('SubHeader');
    expect(subheader.length).to.equal(1);
    expect(subheader.props().headerText).to.equal('Add New Portfolio');
  });
  it('should have a form', () => {
    const wrapper = shallow(<AddPortfolio />);
    const form = wrapper.find('form');
    expect(form.length).to.equal(1);
  });
  it('should have a TextField inside form', () => {
    const wrapper = shallow(<AddPortfolio />);
    const form = wrapper.find('form');
    const TextField = form.find('TextField');
    expect(TextField.length).to.equal(1);

    const textFieldProps = TextField.props();
    expect(textFieldProps.hintText).to.equal('Enter Portfolio Name');
    expect(textFieldProps.value).to.equal('');

    wrapper.setState({ portfolio: 'PF' });
    expect(wrapper.find('TextField').props().value).to.equal('PF');
  });
  describe('TextField', () => {
    it('should have a TextField inside form', () => {
      const wrapper = shallow(<AddPortfolio />);

      expect(wrapper.find('TextField').props().hintText).to.equal('Enter Portfolio Name');
      expect(wrapper.find('TextField').props().value).to.equal('');

      wrapper.setState({ portfolio: 'PF' });
      expect(wrapper.find('TextField').props().value).to.equal('PF');
    });
  });
});
