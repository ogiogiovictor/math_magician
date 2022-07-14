import React from 'react';
import TestRenderer from 'react-test-renderer';
import Calculator from '../components/calculator/calculator.component';
import Quote from '../pages/quote/quote';

describe('testing react components using jest snapshot', () => {

it('Testing Calculator component', () => {
    const testRenderer = TestRenderer.create(<Calculator />).toJSON();
    expect(testRenderer).toMatchSnapshot();
  });

  it('Testing Button component', () => {
    const testRenderer = TestRenderer.create(<Quote />).toJSON();
    expect(testRenderer).toMatchSnapshot();
  });

});
