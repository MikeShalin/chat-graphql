import some from 'lodash/some'

export const checkedNotEmptyInputs = (inputs: {} | Array<string>) => some(inputs, el => !el)