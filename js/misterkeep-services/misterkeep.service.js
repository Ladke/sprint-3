import storageHandler from './storage.servic.js'
import utilService from './util.service.js'

export const notesService = {
    query,
    getLabels,
    addLabels,
    removeLabel,
    findById,
    addNote,
    // removeNote
}

const NOTES_KEY = 'notes';
const LABEL_KEY = 'labels'

var labelsDB =[];
var notesDB = [];

function getLabels() {
    var labels = storageHandler.load(LABEL_KEY) || [];

    labelsDB = labels;
    return labelsDB;
}

function addLabels() {

}

function removeLabel() {
    
}

function query() {
    var notes = storageHandler.load(NOTES_KEY) || [];

    notesDB = notes;
    return notesDB;
}

function findById(id) {
    return notesDB.find(note => id === note.id);
}

function addNote(note) {
    let newNote = {...note}

    notesDB.push(newNote);
    console.log(notesDB);
    
    storageHandler.store(NOTES_KEY, notesDB);
}

// function removeNote(id) {
//     let notes = notesDB.filter(note => id !== note.id);

//     storageHandler.store(NOTES_KEY, notes);
//     notesDB = notes;
// }