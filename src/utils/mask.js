import {isBackspace} from '.'

export const zipCodeMask = (event) => (!isBackspace(event)
  ? event.target.value.replace(/[^\d]/g, '').replace(/^(\d{5})(\d)/, '$1-$2')
  : event.target.value);