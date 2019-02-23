import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import agendaReducers from './agendas';

const reducers = combineReducers({
  form: formReducer,
  agenda: agendaReducers
});

export default reducers;