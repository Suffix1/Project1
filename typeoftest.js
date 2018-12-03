class User {
    constructor(name, birthday) {
      this.name = name
      this.dateOfBirth = birthday
    }
    getBirthday() {
      return Date.parse(this.dateOfBirth)
    }
  }

  const bert = new User("bert", "1900-01-01")

  console.log(bert)
  console.log(bert.getBirthday())

  function User2(name, birthday) {
    this.name = name
    this.birthday = birthday
    this.getBirthday = function() {
      return this.birthday
    }
  }
  

    const ernie = new User2("Ava", 638928000000)
    
    console.log(ernie)


  