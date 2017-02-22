import React from 'react';
import { shallow } from 'enzyme';
import AddPortfolio from './add-portfolio';
import { expect } from 'chai';
import { noop } from 'lodash';

const createAddPortfolio = shouldResolve => portfolio => {
  return new Promise((resolve, reject) => {
    if (shouldResolve) {
      resolve(portfolio);
    } else {
      reject(portfolio);
    }
  });
};

describe('Add Portfolio', () => {
  let wrapper
  afterEach(() => {
    wrapper && wrapper.unmount();
  })
  describe('with default props', () => {
    beforeEach(() => {
      wrapper = shallow(<AddPortfolio />);
    })

    it('should have a subheader', () => {
      const subheader = wrapper.find('SubHeader');
      expect(subheader.length).to.equal(1);
      expect(subheader.props().headerText).to.equal('Add New Portfolio');
    });
    it('should have a form', () => {
      const form = wrapper.find('form');
      expect(form.length).to.equal(1);
    });
    it('should have a TextField inside form', () => {
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
        expect(wrapper.find('TextField').props().hintText).to.equal('Enter Portfolio Name');
        expect(wrapper.find('TextField').props().value).to.equal('');

        wrapper.setState({ portfolio: 'PF' });
        expect(wrapper.find('TextField').props().value).to.equal('PF');
      });
    });
  })
  describe('On Submit', () => {
    it('should reset the portfolio input on submit if success', () => {
      wrapper = shallow(<AddPortfolio addPortfolio={ createAddPortfolio(true) }/>);
      wrapper.setState({ portfolio: 'Test' });
      const form = wrapper.find('form');
      form.prop('onSubmit')({ preventDefault: noop });
      setTimeout(() => {
        expect(wrapper.state().portfolio).to.equal('');
      }, 0);
    })

    it('should not reset the portfolio input on submit if error', () => {
      wrapper = shallow(<AddPortfolio addPortfolio={ createAddPortfolio(false) }/>);
      wrapper.setState({ portfolio: 'Test' });
      const form = wrapper.find('form');
      form.prop('onSubmit')({ preventDefault: noop });

      expect(wrapper.state().portfolio).to.equal('Test');
    })
  });
});
