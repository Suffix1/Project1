class Animals {
    constructor(age) {
        this.age = age
    }
    getWeightInKg() {
        return Math.min(this.minWeight, this.age * this.weightFactor)
    }
    getValueInEuros() {
        return this.price * this.getWeightInKg()
    }

}

class Pig extends Animals {
    constructor(age) {
        super(age)
        this.weightFactor = 2.3
        this.price = 4
        this.minWeight = 700
    }
}

class Cow extends Animals {
    constructor(age) {
        super(age)
        this.weightFactor = 1.5
        this.price = 5
        this.minWeight = 1200
    }
}

class Horse extends Animals {
    constructor(age) {
        super(age)
        this.weightFactor = 1.7
        this.price = 10
        this.minWeight = 1000
    }
}



module.exports = {Animals, Pig, Cow, Horse}