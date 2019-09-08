import React from 'react';

import { shallow } from 'enzyme';

import { Button } from '.';

describe('Button component', () => {
  it('should has everything passed props', () => {
    const props = {
      color: 'teal',
      size: 'large',
      fluid: true,
      className: 'lol'
    };
    
    const tree = shallow(<Button {...props}>login</Button>);
  
    expect(tree.props().className).toBe(props.className);
  });
});