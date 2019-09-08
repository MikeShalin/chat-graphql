import React from 'react'

import {
  Form,
  TextArea,
  // Button,
} from 'semantic-ui-react'

import { Button } from '../Button';

export const ChatArea = () => (
  <Form>
    <Form.Field
      id='form-textarea-control-opinion'
      control={TextArea}
      label='Opinion'
      placeholder='Opinion'
    />
    <Button>Submit</Button>
  </Form>
)
