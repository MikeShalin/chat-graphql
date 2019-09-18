import React from 'react'

import { Form, TextArea } from 'semantic-ui-react'

import { Button } from 'features/Button'

type TProps = {
  nick: string,
  message: string,
  handleOnChange: () => void,
}

export const ChatArea = ({
  nick,
  message,
  handleOnChange,
}: TProps) => (
  <>
    <Form.Group>
      <TextArea
        placeholder={`Start chat, ${nick}`}
        value={message}
        onChange={handleOnChange}
      />
    </Form.Group>
    <Form.Group>
      <Button>Submit</Button>
    </Form.Group>
  </>
)
