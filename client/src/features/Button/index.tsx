import React from 'react'

import { Button as ButtonUI } from 'semantic-ui-react'

type TProps = {
  children: string,
}

export const Button = ({ children, ...props }: TProps) => (
  <ButtonUI
    color='teal'
    size='large'
    fluid
    {...props}
  >{children}</ButtonUI>
)
