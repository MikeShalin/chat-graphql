import React from 'react'
import { Header as HeaderUI, Icon } from 'semantic-ui-react'

const styles = {
  marginTop: 10,
}

export const Header = () => (
  <div style={styles}>
    <HeaderUI as='h2' icon textAlign='center'>
      <Icon name='users' circular />
      <HeaderUI.Content>Chat with friends</HeaderUI.Content>
    </HeaderUI>
  </div>
)
