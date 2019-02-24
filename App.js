import React from 'react';
import { Provider} from 'react-redux';
import Agenda from './src/screens/AgendaHome';

import store from './src/redux/store';

class Root extends React.Component {
  render() {
    return (
      <Provider store={store}>
          <Agenda />
      </Provider>
    );
  }
}

export default Root;