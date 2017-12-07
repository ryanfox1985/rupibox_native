const logsReducer = (state = [], action) => {
  console.log('logsReducer:');
  console.log(action);

  switch (action.type) {
    case 'ADD_LOG':
      return [action.log, ...state];
    default:
      return state;
  }
};

export default logsReducer;
