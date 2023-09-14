const sumAll = function(a, b) {

    if((typeof a == "number" && typeof b == "number") &&
        a > 0 && b > 0){
    if( a < b){
        let initial = a;
        while (a < b){
            a += 1;
            initial += a;
        }
        // console.log(initial)
        return initial;
    } else if (b < a) {
        let initial = b;
        while (b < a){
            b += 1;
            initial += b;
        }
        return initial;
    } else {
        return a;
    }
    }
    else{
        return 'ERROR';
    }

    

};

// Do not edit below this line
module.exports = sumAll;
