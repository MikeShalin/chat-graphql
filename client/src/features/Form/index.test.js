import React from 'react'
import { shallow } from 'enzyme'
import { shallowToJson } from 'enzyme-to-json'

import { Form } from '.'

describe('Form component', () => {
  it('should render without errors', () => {
    const tree = shallow(<Form />)
    expect(shallowToJson(tree)).toMatchSnapshot()
  })
})