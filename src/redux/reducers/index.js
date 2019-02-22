import { combineReducers } from 'redux';
import { reducer as reducerForm } from 'redux-form';

import agenda from './agenda';

const reducers = combineReducers({
  form: reducerForm,
  agenda: agenda
});

export default reducers;