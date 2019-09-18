import React from 'react';

import { TextArea } from 'semantic-ui-react';
import { shallow } from 'enzyme';

import { ChatArea } from './index.tsx';

describe('Form component', () => {
  const onChange = jest.fn()
  const value = 'hello world!'
  const nick = 'Jon "Bones" Jones'
  const props = {
    onChange,
    value,
    placeholder: `Start chat, ${nick}`,
    as: 'textarea',
    rows: 3,
  }
  const tree = shallow(
    <ChatArea
      nick={nick}
      message={value}
      handleOnChange={onChange}
    />,
  );
  
  it('should has nick in TextArea placeholder', () => {
    expect(tree.contains(<TextArea {...props} />)).toBe(true);
  });
  
});
