import { uniqueId } from 'lodash'

export const ADD_NOTE = 'ADD_NOTE'

export function addNote(title, content) {
  return {
    type: ADD_NOTE,
    id: uniqueId(),
    title: title,
    content: content
  }
}
