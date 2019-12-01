export const ADD_NOTE = 'ADD_NOTE'
export const REMOVE_NOTE = 'REMOVE_NOTE'
export const UPDATE_SEARCH = 'UPDATE_SEARCH'

// Action Creator
export function addNote(title, content) {
  return {
    type: ADD_NOTE,
    title: title,
    content: content,
    id: new Date().getTime().toString()
  }
}

export function removeNote(id) {
  return {
    type: REMOVE_NOTE,
    id: id
  }
}

export function updateSearch(value) {
  return {
    type: UPDATE_SEARCH,
    value: value
  }
}
