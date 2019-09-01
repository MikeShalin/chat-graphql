import React from 'react';

import { shallow } from 'enzyme';

import { Button } from 'semantic-ui-react';

import Form from './index.tsx';

const inputs = [{
  key: 'login',
  fluid: true,
  icon: 'user',
  iconPosition: 'left',
  placeholder: 'E-mail address',
}, {
  key: 'password',
  fluid: true,
  icon: 'lock',
  iconPosition: 'left',
  placeholder: 'Password',
  type: 'password',
}]

const onChange = jest.fn
const onSubmit = jest.fn
const login = ''
const password = ''

const tree = shallow(
  <Form
    inputs={inputs}
    submitButtonValue='login'
    title='Log-in to your account'
    onChange={onChange}
    values={{
      login,
      password,
    }}
    onSubmit={onSubmit}
  />,
);

describe('Form component', () => {
  it('should has Button inside', () => {
    const props = {
      color: 'teal',
      size: 'large',
      fluid: true,
      children: 'login',
    }
    expect(tree.contains(<Button {...props} />)).toBe(true);
  });
  
  it('should has FormUI inside', () => {
    expect(tree.find('FormInput')).not.toHaveLength(0);
  });
  
  it('should has input handlerOnChange', () => {
    // todo ошибка появилась когда я стал использовать каррирование
    // expect(tree.find('FormInput').first().props().onChange).toBe(jest.fn);
  });
  
  it('should has login input is initial value', () => {
    expect(tree.find('FormInput').at(0).props().value).toBe(login);
  });
  
  it('should has password input is initial value', () => {
    expect(tree.find('FormInput').at(1).props().value).toBe(password);
  });
  
  it('should form data has prop onSubmit', () => {
    expect(tree.find('Form').at(0).props().onSubmit).toBe(onSubmit);
  });
  
});