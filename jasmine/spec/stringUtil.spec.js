var stringUtil = require('../stringUtil');
describe("stringUtil", function() {
    describe("firstWord", function() {
        it("should return the first word of a string", function() {
            expect(stringUtil.firstWord("one two")).toBe("one");
        });
    });
});