const documents = {
    1: {content: "I am a document", authorId: 1},
    2: {content: "I am also a document", authorId: 2},
    3: {content: "You guessed it!", authorId: 2}
}
const authors = {
    1: {name: "Adam"},
    2: {name: "Dave"}
}
const sleep = (milliseconds) => {
    return new Promise(dothis => setTimeout(dothis, milliseconds))
  }
const getDocument = (documentId) => {
        return new Promise(documentId => setTimeout(dothis, milliseconds))
        }  
        
        
const getDocument = (documentId) => {
    return new Promise(documentId => setTimeout(dothis, milliseconds))
    }   
    
  
function getAuthor(authorId) {
    function loadComplete() {
        return authors[authorId]
    }
    setTimeout(loadComplete, 100)
}
getDocument(1)
  .then(document => getAuthor(document.authorId))
  .then(author => console.log(author.name)) 

// getDocument returns a promise
const documentPromise = getDocument(1)

// documentCallback is the function that needs to be used when the document is available
const documentCallback = document => getAuthor(document.authorId)

// calling then() always returns a new promise
const authorPromise = documentPromise.then(documentCallback)

// authorCallback is the callback for when the author has been loaded
const authorCallback = author => console.log(author.name)

// chain another callback. we don't use this return value
authorPromise.then(authorCallback)

