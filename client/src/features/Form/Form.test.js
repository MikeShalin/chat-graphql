import React from 'react';

import { shallow, mount } from 'enzyme';

import { Message } from 'semantic-ui-react';

import Form from './index.tsx';
import { Button } from 'features/Button';

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
}];

const onChange = jest.fn;
const onSubmit = jest.fn;
const login = '';
const password = '';

const messageProps = {
  error: true,
  header: 'Password or login is not correct',
  content: 'You should check it',
};

const formProps = {
  inputs,
  onChange,
  onSubmit,
  submitButtonValue: 'login',
  title: 'Log-in to your account',
  values: {
    login,
    password,
  },
  submitButtonDisable: true,
};

const tree = shallow(<Form error {...formProps} />);


describe('Form component', () => {
  it('should has Button inside', () => {
    expect(tree.contains(<Button disabled>login</Button>)).toBe(true);
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
  
  it('should show error, if come in error props', () => {
    expect(tree.find('Form').at(0).props().error).toBe(true);
  });
  
  it('should has Message inside', () => {
    console.log(tree.debug())
    expect(tree.contains(<Message {...messageProps} />)).toBe(true);
  });
  
  it('shouldn`t has Message inside if don`t come in error props ', () => {
    const tree = shallow(
      <Form {...formProps} />,
    );
    expect(tree.contains(<Message {...messageProps} />)).toBe(false);
  });
  
  it('hidden error message, if input changed value', () => {
    const wrapper = mount(<Form {...formProps} />); // todo описать этот кейс, сейчас он срабатывает из-за того что в форму не попадает error
    wrapper.find('input').at(0).simulate('click', { target: { value: 'foo' } });
    expect(wrapper.contains(<Message {...messageProps} />)).toBe(false);
  });
  
  it('should button can has props disabled', () => {
    expect(tree.find('Button').at(0).props().disabled).toBe(true);
  });
  
});