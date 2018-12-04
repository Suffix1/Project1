const {Farm} = require('/index')

test('A new Farm can be created', () => {
    const farm = new Farm()
    expect(farm).toBeTruthy
})