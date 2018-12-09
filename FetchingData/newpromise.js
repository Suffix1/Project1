const promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve("Wouter!"), 300), 
    setTimeout(() => reject("Niet Wouter"),300)
})

promise.then(bar => console.log("Hey", bar))
promise.catch(foo=> console.log("Hey", foo))


/*

getDocument(1, document => {
    getAuthor(document.authorId, author => {
        console.log(author.name)
    })
})

*/
function getDocument(documentId, callback) {
    function loadComplete() {
        callback(documents[documentId])
    }
    setTimeout(loadComplete, 100)
}

function getAuthor(authorId, callback) {
    function loadComplete() {
        callback(authors[authorId])
    }
    setTimeout(loadComplete, 100)
}