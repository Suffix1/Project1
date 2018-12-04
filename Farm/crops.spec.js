const {Sugarcane} = require('./crops').Sugarcane
const {Wheat} = require('./crops').Wheat

test('The Wheat class can calculate a yield', () => {
    const wheat = new Wheat(100)
    expect(wheat.getYieldInKg()).toBeDefined()
})

test('The Wheat class calculates the proper yield', () => {
    const wheat = new Wheat(100)
    expect(wheat.getYieldInKg()).toBeCloseTo(674.4, 2)
})


test('The Sugarcane class can calculate a yield', () => {
    const sugarcane = new Sugarcane(100)
    expect(sugarcane.getYieldInKg()).toBeDefined()
})

test('The Sugarcane class calculates the proper yield', () => {
    const sugarcane = new Sugarcane(100)
    expect(sugarcane.getYieldInKg()).toBeCloseTo(453.4, 1)
})

