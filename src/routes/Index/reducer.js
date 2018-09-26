import { ACTION_TYPES } from './action'

const initialState = {
  message: 'Hello world'
};

export default (state = initialState, action) => {
  let newState = state;
  switch (action.type) {

  }

  return { ...newState }
}
