var stringUtil = require('../stringUtil');
describe("stringUtil", function() {
    describe("firstWord", function() {
        it("should return the first word of a string", function() {
            expect(stringUtil.firstWord("one two")).toBe("one");
        });

        it("should delegate its logic to nthWord", function() {
            spyOn(stringUtil, "nthWord");
            stringUtil.firstWord("one two");

            expect(stringUtil.nthWord).toHaveBeenCalled();
        });
    });

    describe("nthword", function(){
        it("should return the nth word of a string", function() {
            expect(stringUtil.nthWord("one two", 1)).toBe("one");
            expect(stringUtil.nthWord("one two", 2)).toBe("two");
        });
    });
});