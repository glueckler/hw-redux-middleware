import tv4 from 'tv4'
import stateSchema from './stateSchema'

export default ({ dispatch, getState }) => (next) => (action) => {
  // we pass on the data right away and then validate as it's only a checck
  next(action);
  if (tv4.validate(getState(), stateSchema)) {
    console.warn('Invalid State yoo')
  }
}