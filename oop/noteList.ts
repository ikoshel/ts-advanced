import Note from './note';
import DefaultNote from './defaultNote';
import ConfirmableNote from './confirmableNote';

class NoteList {
    private readonly notes: Note[];

    constructor() {
        this.notes = [];
    }

    add(note: Note) {
        this.notes.push(note);
    }

    edit(id: string, title: string, content: string) {
        const note = this.notes.find(note => note.id === id);
        if (!note) {
            console.log('Note not found.');
            return;
        }

        note.title = title;
        note.content = content;
    }

    delete(id: string) {
        const index = this.notes.findIndex(note => note.id === id);
        if (index === -1) {
            console.log('Note not found.');
            return;
        }

        this.notes.splice(index, 1);
    }

    view(id: string) {
        const note = this.notes.find(note => note.id === id);
        if (!note) {
            console.log('Note not found.');
            return;
        }

        console.log(note);
    }

    viewAll() {
        console.log(this.notes);
    }

    markAsDone(id: string) {
        const note = this.notes.find(note => note.id === id);
        if (!note) {
            console.log('Note not found.');
            return;
        }

        if (note instanceof ConfirmableNote) {
            note.confirm();
        } else {
            console.log('This note cannot be confirmed.');
        }
    }

    getStats() {
        const defaultNotes = this.notes.filter(note => note instanceof DefaultNote).length;
        const confirmableNotes = this.notes.filter(note => note instanceof ConfirmableNote).length;
        const confirmedNotes = this.notes.filter(note => note instanceof ConfirmableNote && note.confirmed).length;

        console.log(`Default notes: ${defaultNotes}`);
        console.log(`Confirmable notes: ${confirmableNotes}`);
        console.log(`Confirmed notes: ${confirmedNotes}`);
    }

    search(query: string) {
        const results = this.notes.filter(note => note.title.includes(query) || note.content.includes(query));
        console.log(results);
    }

    sort(type: string) {
        if (type === 'By creation date') {
            this.notes.sort((a, b) => a.createdAt.getTime() - b.createdAt.getTime());
        } else if (type === 'By status') {
            this.notes.sort((a) => (a instanceof ConfirmableNote && a.confirmed ? -1 : 1));
        }

        console.log(this.notes);
    }
}

export default NoteList;