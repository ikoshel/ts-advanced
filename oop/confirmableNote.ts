import Note from './note';

class ConfirmableNote extends Note {
    confirmed: boolean;

    constructor(id: string, title: string, content: string) {
        super(id, title, content);
        this.confirmed = false;
    }

    confirm() {
        this.confirmed = true;
    }
}

export default ConfirmableNote;