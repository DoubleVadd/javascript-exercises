const palindromes = function (word) {
    let newword = word.replace(/\W+/g,'');
    let newword2 = newword.split('').reverse().join("");
    
    console.log(newword)
    if(newword.toLowerCase() == newword2.toLowerCase()){return true} else{
        return false;
    }
};

// Do not edit below this line
module.exports = palindromes;
