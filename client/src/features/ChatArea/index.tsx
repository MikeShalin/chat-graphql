import React from 'react'

import { Form, TextArea } from 'semantic-ui-react'

import { Button } from 'features/Button'

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
