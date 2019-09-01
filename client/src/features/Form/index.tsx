import React from 'react'

// import map from 'lodash/map'
import {
  Button,
  Form as FormUI,
  Grid,
  Header,
  Image,
} from 'semantic-ui-react'

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
  onChange: (e: MouseEvent) => void,
  values: {
    login: string,
    password: string,
  }
}

export const Form = ({
  inputs,
  submitButtonValue,
  title,
  onChange,
  values,
}: TProps) => (
  <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
    <Grid.Column style={{ maxWidth: 450 }}>
      <Header as='h2' color='teal' textAlign='center'>
        <Image src='/logo512.png' /> {title}
      </Header>
      <FormUI size='large'>
        {
          inputs.map((props) => (
            <FormUI.Input
              // @ts-ignore
              onChange={onChange}
              // @ts-ignore
              value={values[props.key]}
              {...props}
            />
          ))
        }
        <Button
          color='teal'
          size='large'
          fluid
        >{submitButtonValue}</Button>
      </FormUI>
    </Grid.Column>
  </Grid>

)

export default Form