// ------ HTML references ------
let notesUList = document.getElementById('notes');
let addNoteForm = document.getElementById('add-note');
let addNoteTitle = addNoteForm['title'];
let addNoteContent = addNoteForm['content'];


// ------ Redux ------
function deleteNote(id) {

  // console.log(id);
}

function renderNotes() {

}


// ------ Event Listeners ------
addNoteForm.addEventListener('submit', (e) => {
  e.preventDefault();

  // console.log('Title:', addNoteTitle.value, 'Content:', addNoteContent.value);
});


// ------ Render the initial Notes ------
renderNotes();