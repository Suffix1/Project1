const priceFruit = (fruit, price) => {
    return {
        key: "",
        ...fruit,
        price,
    }
}

const name = "Mango Fruit"
const flavor = "Sweet"
const mangoFruit = {
    name,
    flavor,
}
console.log(priceFruit(mangoFruit, 0.85))