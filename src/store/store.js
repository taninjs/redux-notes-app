import { createStore } from 'redux';
import rootReducer from '../reducers/reducers';

const initialState = {
  notes: []
}

let notes = localStorage.getItem('notes')
if (notes) {
  initialState.notes = JSON.parse(notes)
}

export default createStore(rootReducer, initialState);
