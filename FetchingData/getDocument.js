const documents = {
    1: {content: "I am a document", authorId: 1},
    2: {content: "I am also a document", authorId: 2},
    3: {content: "You guessed it!", authorId: 2}
}
const authors = {
    1: {name: "Adam"},
    2: {name: "Dave"}
}

function getDocument(documentId, callback) {
    function loadComplete() {
        callback(documents[documentId])
    }
    loadComplete()
}
function getDocument2(documentId) {
    function loadComplete() {
        return(documents[documentId])
    }
    loadComplete()
}

function getAuthor(authorId, callback) {
    function loadComplete() {
        callback(authors[authorId])
    }
    loadComplete()
}

function getAuthor2(authorId) {
    function loadComplete() {
        return (authors[authorId])
    }
    loadComplete()
}


getDocument(1, document => {
    getAuthor(document.authorId, author => {
        console.log(author.name)
    })
})

getDocument2(1)
  .then(document => getAuthor2(document.authorId))
  .then(author => console.log(author.name))