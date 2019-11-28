import { ADD_NOTE, REMOVE_NOTE } from '../actions/actions';

const initialState = {
  notes: []
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_NOTE:
      return {
        // ให้ property อื่นๆ ของ state เป็นเหมือนเดิม
        ...state,

        // สร้าง notes ใหม่
        notes: [
          ...state.notes,
          {
            id: action.id,
            title: action.title,
            content: action.content
          }
        ]
      };
    case REMOVE_NOTE:
      return {
        ...state,
        notes: state.notes.filter(x => x.id !== action.id)
      }

    default:
      return state;
  };
}

export default rootReducer;