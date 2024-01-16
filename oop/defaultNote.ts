import Note from './note';

class DefaultNote extends Note {
    constructor(id: string, title: string, content: string) {
        super(id, title, content);
    }
}

export default DefaultNote;