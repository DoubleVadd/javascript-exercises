const findTheOldest = function(array) {
    let max = 0;
    let best = [];
    const d = new Date();
    for(const a of array){
        let death = a.yearOfDeath ?? d.getFullYear();
        let birth = a.yearOfBirth;
        let age = death - birth;
        console.log(a.name, age, death);
        if (age>max){
            max = age;
            best = a;
        }
    }
    return best;

};

// Do not edit below this line
module.exports = findTheOldest;
