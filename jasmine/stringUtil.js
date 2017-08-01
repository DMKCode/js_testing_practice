var stringUtil = {
    firstWord: function(text) {
        return this.nthWord(text, 1);
    },

    nthWord: function(text, i){
        return text.split(" ")[i - 1];
    }

};

module.exports = stringUtil;