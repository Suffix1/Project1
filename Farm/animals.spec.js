const {Pig, Cow, Horse} = require('./animals')

test('Cow of 0 days is worth 0', () => {
    const cow = new Cow(0)
    expect(cow.getValueInEuros()).toBe(0)
})

test('Cow of 100 days is worth 0', () => {
    const cow = new Cow(100)
    expect(cow.getValueInEuros()).toBeCloseTo(750, 2)
})




test('Pig of 0 days calculates proper weight', () => {
  const pig = new Pig(0)
  expect(pig.getWeightInKg()).toBe(0)
})

test('Pig of 10 days calculates proper weight', () => {
  const pig = new Pig(10)
  expect(pig.getWeightInKg()).toBe(23)
})

test('Cow of 0 days calculates proper weight', () => {
  const cow = new Cow(0)
  expect(cow.getWeightInKg()).toBe(0)
})

test('Cow of 13 days calculates proper weight', () => {
  const cow = new Cow(13)
  expect(cow.getWeightInKg()).toBe(19.5)
})

test('Horse of 0 days calculates proper weight', () => {
  const horse = new Horse(0)
  expect(horse.getWeightInKg()).toBe(0)
})

test('Horse of 33 days calculates proper weight', () => {
  const horse = new Horse(33)
  expect(horse.getWeightInKg()).toBe(56.1)
})

test('Horse of 10000 days calculates proper weight', () => {
    const horse = new Horse(10000)
    expect(horse.getWeightInKg()).toBe(1000)
  })
