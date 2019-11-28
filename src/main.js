import store from './store/store'
import { addNote, removeNote } from './actions/actions'


// ------ HTML references ------
let notesUList = document.getElementById('notes');
let addNoteForm = document.getElementById('add-note');
let addNoteTitle = addNoteForm['title'];
let addNoteContent = addNoteForm['content'];


// ------ Redux ------
store.subscribe(() => {
  renderNotes();
})

function deleteNote(id) {
  console.log(id);
  store.dispatch(removeNote(id))
}

function renderNotes() {
  // Clear notes
  notesUList.innerHTML = ''

  // Render notes
  let notes = store.getState().notes;
  for (let note of notes) {
    let noteItem = `
      <li>
        <b>${note.title}</b>
        <button data-id="${note.id}">x</button>
        <br />
        <span>${note.content}</span>
      </li>
    `;

    notesUList.innerHTML += noteItem
  }

  setDeleteNoteButtonsEventListeners()
}

function setDeleteNoteButtonsEventListeners() {
  let buttons = document.querySelectorAll('ul#notes li button')

  for (let button of buttons) {
    button.addEventListener('click', () => {
      deleteNote(button.dataset.id)
    })
  }
}


// ------ Event Listeners ------
addNoteForm.addEventListener('submit', (e) => {
  e.preventDefault();

  let title = addNoteTitle.value
  let content = addNoteContent.value

  store.dispatch(addNote(title, content))
});


// ------ Render the initial Notes ------
renderNotes();