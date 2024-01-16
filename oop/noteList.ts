import Note from './note';
import DefaultNote from './defaultNote';
import ConfirmableNote from './confirmableNote';

enum SortType {
    ByDate = "By creation date",
    ByStatus = "By status"
}

class NoteList {
    private readonly _notes: Note[];

    constructor() {
        this._notes = [];
    }

    get notes(): Note[] {
        return this._notes;
    }

    add(note: Note) {
        this._notes.push(note);
    }

    edit(id: string, title: string, content: string) {
        const note = this._notes.find(note => note.id === id);
        if (!note) {
            throw new Error('Note not found.');
        }

        note.title = title;
        note.content = content;
    }

    delete(id: string) {
        const index = this._notes.findIndex(note => note.id === id);
        if (index === -1) {
            throw new Error('Note not found.');
        }

        this._notes.splice(index, 1);
    }

    view(id: string): Note {
        const note = this._notes.find(note => note.id === id);
        if (!note) {
            throw new Error('Note not found.');
        }

        return note;
    }

    viewAll() {
        return [...this._notes];
    }

    markAsDone(id: string) {
        const note = this._notes.find(note => note.id === id);
        if (!note) {
            throw new Error('Note not found.');
        }

        if (isConfirmable(note)) {
            note.confirm();
        } else {
            throw new Error('This note cannot be confirmed.');
        }
    }

    getStats() {
        const defaultNotes = this._notes.filter(note => note instanceof DefaultNote).length;
        const confirmableNotes = this._notes.filter(note => note instanceof ConfirmableNote).length;
        const confirmedNotes = this._notes.filter(note => note instanceof ConfirmableNote && note.confirmed).length;

        return {
            defaultNotes,
            confirmableNotes,
            confirmedNotes
        }
    }

    search(query: string) {
        return this._notes.filter(note => note.title.includes(query) || note.content.includes(query));
    }

    sort(type: SortType) {
        switch (type) {
            case SortType.ByDate:
                this._notes.sort((a, b) => a.createdAt.getTime() - b.createdAt.getTime());
                break;
            case SortType.ByStatus:
                this._notes.sort((a) => isConfirmable(a) && a.confirmed ? -1 : 1);
                break;
            default:
                throw new Error(`Unknown sort type: ${type}`);
        }
    }
}

function isConfirmable(note: Note): note is ConfirmableNote {
    return note instanceof ConfirmableNote;
}

export default NoteList;