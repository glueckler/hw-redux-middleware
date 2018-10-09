export default ({ dispatch }) => next => action => {
  // Check to see if the action has a Promise 
  // if no promise, send to next piece of middleware
  if (!action.payload || !action.payload.then) {
    next(action)
    return
  }

  // if it does then wait for it to resolve
  action.payload.then((response) => {
    const newAction = { ...action, payload: response }
    dispatch(newAction)
  })

}