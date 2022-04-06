describe('notesList module', function () {
    beforeEach(function() {
        notes.clear();
        notes.add('first note');
        notes.add('second note');
        notes.add('third note');
        notes.add('fourth note');
        notes.add('fifth note');
    });

    it("should be able to count", function () {
        expect(notes.count()).toBe(5);
    });

    it("should be able to add a new note", function () {
        expect(notes.add('sixth note')).toBe(true);
        expect(notes.count()).toBe(6);
    });

    it("should ignore blank notes", function () {
        expect(notes.add('')).toBe(false);
        expect(notes.count()).toBe(5);
    });

    it('should ignore notes containing only whitespace', function() {
        expect(notes.add('   ')).toBe(false);
        expect(notes.count()).toBe(5);
    });

    it("it should clear", function () {
        expect(notes.clear()).toBe(true);
        expect(notes.count()).toBe(0);
    });

    it('should require a string parameter', function() {
        expect(notes.add()).toBe(false);
        expect(notes.count()).toBe(5);
    });

    it("Should remove one", function () {
        expect(notes.remove(1)).toBe(true);
        expect(notes.count()).toBe(4);
    });

    it("Should return a 5 object list", function () {
        expect(notes.list().length).toBe(5);
    });

    it("Should return 1 requested object", function () {
        expect(notes.find('fifth note').length).toBe(1);
    });

    it("Should not return anything with text that doesn't exist", function () {
        expect(notes.find('test')).toBe(false);
    });
});