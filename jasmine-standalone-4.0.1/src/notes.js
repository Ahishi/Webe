let notesList = [];
let notes = (function() {

    return {
        add: function(note) {
            if(note !== null && note.trim().length > 0){
                notesList.push(note);
                return true;
            } else {
                return false;
            }
        },
        remove: function(index) {
            if(index > 0 && index < notesList.length){
                notesList.splice(index, 1);
                return true;
            } else {
                return false;
            }
        },
        count: function() {
            return notesList.length;
        },
        list: function() {
            let notesReturn = [];
            for(let i = 0; i < notesList.length; i++){
                const obj =
                    {
                        note: notesList[i],
                        timestamp: new Date().getTime(),
                    }
                notesReturn.push(obj);
            }
            return notesReturn;
        },
        find: function(string) {
            let processNotes = notes.list();
            if (processNotes.some(e => e.note !== string)) {
                for(let i = 0; i < notesList.length; i++){
                    if(!notesList[i].contains(string)){
                        notes.remove(i);
                    }
                }
                return processNotes;
            } else {
                return false;
            }
        },
        clear: function() {
            notesList = [];
            return true;
        }
    }
}());