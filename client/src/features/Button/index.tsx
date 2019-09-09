import React from 'react'

import { Button as ButtonUI } from 'semantic-ui-react'

type TProps = {
  children: string,
  onClick?: () => void,
}

export const Button = ({ children, ...props }: TProps) => (
  <ButtonUI
    color='teal'
    size='large'
    fluid
    {...props}
  >{children}</ButtonUI>
)
