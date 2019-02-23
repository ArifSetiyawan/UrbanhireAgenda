import React from 'react';
import { Provider, connect } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
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