import React from 'react'

import { Grid } from 'semantic-ui-react'

export const FormWrapper = ({ children }: { children: React.ReactNode }) => (
  <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
    <Grid.Column style={{ maxWidth: 450 }}>
      {children}
    </Grid.Column>
  </Grid>
)
