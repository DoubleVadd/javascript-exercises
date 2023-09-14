const getTheTitles = function(arr) {
    console.log("WOOOOOOW", arr);
    const books = [];
    for(a of arr){
        books.push(a['title'] ?? undefined);
    }
    console.log(books);
    return books;

};

// Do not edit below this line
module.exports = getTheTitles;
