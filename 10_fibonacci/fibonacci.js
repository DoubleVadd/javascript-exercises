const fibonacci = function(a) {
    if(Number(a)>0){

        a = Number(a)
        let final = 1;
        let j = 0;
        let i = 0;
        a--;
        
        while(a>0){
            i = j;
            j = final;
            final = i + j;
            a--;
        }
        return final;


    } else{
        return "OOPS"
    }

};

// Do not edit below this line
module.exports = fibonacci;
0