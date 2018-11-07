import storageHandler from './storage.servic.js'
import utilService from './util.service.js'

export const notesService = {
    query,
    findById,
    addNote
}

const NOTES_KEY = 'notes';

var notesDB = [];

function query() {
    var notes = storageHandler.load(NOTES_KEY) || [];

    notesDB = notes;
    return notesDB;
}

function findById(id) {
    return notesDB.find(note => id === note.id);
}

function addNote(note) {
    let newNote = {...note, id: utilService.makeId() }

    notesDB.push(newNote);
    storageHandler.store(NOTES_KEY, notesDB);
}