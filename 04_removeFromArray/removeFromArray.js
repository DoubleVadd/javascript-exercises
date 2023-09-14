function removing(val, varis){
    for(const a in varis){
        if(varis[a] !== val){
            return val;
        }

    }

}


const removeFromArray = function(arr, ...theargs) {
    // console.log(arr);
    // console.log(theargs);
    // const final = []

    console.log("initially", arr, theargs);

    for(const arg of theargs){
        while(arr.indexOf(arg) !== -1){
            arr.splice(arr.indexOf(arg),1);
        }
    }

    console.log("becomes", arr, theargs);
    return arr

    // for(const val of theargs){
    //     for(const a in arr){
    //         if(val == arr[a]){
    //             final.push(a);
    //         }
    //     }
    // }

    // final.sort;
    // final.reverse;
    // console.log(`this is the final`, final);


    // for(const f of final){
    //     console.log(f)
    //     arr.splice(f,1);
    // }

    // console.log(arr);

    return arr;


    

 



};


// Do not edit below this line
module.exports = removeFromArray;
