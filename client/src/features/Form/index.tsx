import React from 'react'

import {
  Form as FormUI,
  Header,
  Image,
  Message,
} from 'semantic-ui-react'

import { Button } from 'features/Button'

type TProps = {
  inputs: Array<{
    key: string,
    fluid: boolean,
    icon: string,
    iconPosition: string,
    placeholder: string,
    type?: string,
  }>,
  submitButtonValue: string,
  title: string,
  onChange: (key: string) => (e: React.ChangeEvent<HTMLInputElement>) => void,
  values: {
    login?: string,
    password?: string,
    nick?: string,
  }
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void,
  error?: boolean
  submitButtonDisable?: boolean
}

export const Form = ({
  inputs,
  submitButtonValue,
  title,
  onChange,
  values,
  onSubmit,
  error,
  submitButtonDisable,
}: TProps) => (
  <>
    <Header as='h2' color='teal' textAlign='center'>
      <Image src='/logo512.png' />
      {title}
    </Header>
    <FormUI
      size='large'
      onSubmit={onSubmit}
      error={error}
    >
      {
        inputs.map((props) => {
          const { key } = props
          return (
            // @ts-ignore
            <FormUI.Input
              // @ts-ignore
              onChange={onChange(key)}
              // @ts-ignore
              value={values[key]}
              {...props}
            />
          )
        })
      }
      {
        error && (
          <Message
            error={error}
            header='Password or login is not correct' //todo текст сообщений
            content='You should check it'
          />
        )
      }
      <Button disabled={submitButtonDisable}>{submitButtonValue}</Button>
    </FormUI>
  </>
)

export default Form