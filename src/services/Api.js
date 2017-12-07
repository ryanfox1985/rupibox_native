import axios from 'axios';

const pinDemoList = [
  { id: '1', name: 'test1', pin_pi: '10', value: true },
  { id: '2', name: 'test2', pin_pi: '11', value: false },
  { id: '3', name: 'test3', pin_pi: '12', value: false },
  { id: '4', name: 'test4', pin_pi: '13', value: true }
];

class PinsApi {
  static getAllPins(dispatch, settings) {
    const { server, port, demo } = settings;

    if (demo) {
      dispatch({ type: 'SET_PINS', pins: pinDemoList })
    } else {
      axios
        .get(`http://${server}:${port}/pins.json`)
        .then(response => dispatch({ type: 'SET_PINS', pins: response.data }));
    }
  }
}

export default PinsApi;
