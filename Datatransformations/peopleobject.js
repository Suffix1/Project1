function oldestSoFar(obj, item) {
    obj[item["id"]]
    
}


const peopleObject = {
  "123": { id: 123, name: "dave", age: 23 },
  "456": { id: 456, name: "chris", age: 23 },
  "789": { id: 789, name: "bob", age: 23 },
  "101": { id: 101, name: "tom", age: 23 },
  "102": { id: 102, name: "tim", age: 23 }
}


console.log(peopleObject.reduce(oldestSoFar))