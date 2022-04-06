let notesList = [];
let notes = (function() {

    return {
        add: function(note) {
            if(note){
                if(note.trim().length > 0){
                    notesList.push(note);
                    return true;
                } else {
                    return false;
                }
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
            let processNotes = [];
            if(notesList.some((e, index) =>
            {
                if(e.includes(string)){
                    processNotes.push(
                        {
                            note: notesList[index],
                            timestamp: new Date().getTime(),
                        })
                    return true;
                }
                else {
                    return false;
                }

            } )){}

            if(processNotes.length > 0){
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