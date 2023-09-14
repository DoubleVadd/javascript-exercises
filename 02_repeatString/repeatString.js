const repeatString = function(textual, numberical) {
    if (numberical<0){
        return 'ERROR'
    }

    return textual.repeat(numberical);

};

// Do not edit below this line
module.exports = repeatString;
