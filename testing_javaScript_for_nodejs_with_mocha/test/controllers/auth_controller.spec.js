var assert = require("assert");
var authController = require("../../controllers/auth_controller");

describe("AuthController", function() {
    describe("isAthourised", function(){
        it("Should return false if not authorised", function() {
            assert.equal(false, authController.isAuthorised(['user'], 'admin'));
        });

        it("Should return true is authorised", function() {
            assert.equal(true, authController.isAuthorised(['user', 'admin'], 'admin'));
        });
    });
});