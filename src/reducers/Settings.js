const defaultSettings = { demo: false, server: '10.10.10.19', port: '3000' };

const settingsReducer = (state = defaultSettings, action) => {
  console.log('SettingsReducer:');
  console.log(action);

  switch (action.type) {
    case 'SET_SETTINGS':
      return Object.assign({}, state, action.settings);
    default:
      return state;
  }
};

export default settingsReducer;
