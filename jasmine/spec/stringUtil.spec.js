var stringUtil = require('../stringUtil');
describe("stringUtil", function() {
    describe("firstWord", function() {
        it("should return the first word of a string", function() {
            expect(stringUtil.firstWord("one two")).toBe("one");
        });
    });

    describe("nthword", function(){
        it("should return the nth word of a string", function() {
            expect(stringUtil.nthWord("one two", 1)).toBe("one");
            expect(stringUtil.nthWord("one two", 1)).toBe("two");
        });
    });
});