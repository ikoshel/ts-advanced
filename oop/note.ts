abstract class Note {
 id: string;
 title: string;
 content: string;
 createdAt: Date;

 protected constructor(id: string, title: string, content: string) {
     this.id = id;
     this.title = title;
     this.content = content;
     this.createdAt = new Date();
 }
}

export default Note;