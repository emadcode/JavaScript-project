const notesContainer = document.getElementById('notes');
const addNoteForm = document.getElementById('add-note-form');
const noteContentInput = document.getElementById('note-content');

function fetchNotes() {
  fetch('https://jsonplaceholder.typicode.com/posts/{id}')
    .then(response => response.json())
    .then(notes => {
      notes.forEach(note => {
        const noteElement = document.createElement('div');
        noteElement.classList.add('note');
        noteElement.innerHTML = `
          <h3>${note.title}</h3>
          <p>${note.body}</p>
        `;
        notesContainer.appendChild(noteElement);
      });
    });
}

// إضافة ملاحظة جديدة
addNoteForm.addEventListener('submit', function(event) {
  event.preventDefault();
  const content = noteContentInput.value.trim();
  if (content === '') return;
  fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      title: '',
      body: content,
      userId: 1
    })
  })
  .then(response => response.json())
  .then(newNote => {
    const noteElement = document.createElement('div');
    noteElement.classList.add('note');
    noteElement.innerHTML = `
      <h3>${newNote.title}</h3>
      <p>${newNote.body}</p>
    `;
    notesContainer.appendChild(noteElement);
    noteContentInput.value = '';
  });
});

window.addEventListener('DOMContentLoaded', fetchNotes);
