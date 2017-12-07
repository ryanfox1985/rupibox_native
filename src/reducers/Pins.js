const pinsReducer = (state = [], action) => {
  console.log('pinsReducer:');
  console.log(action);

  switch (action.type) {
    case 'SET_PINS':
      return action.pins;
    default:
      return state;
  }
};

export default pinsReducer;
