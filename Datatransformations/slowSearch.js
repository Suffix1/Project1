const cars = [
    {brand: 'Toyota', model: 'Aygo'},
    {brand: 'Skoda', model: 'Octavia'},
    {brand: 'Volkswagen', model: 'Passat'},
    {brand: 'Mercedes', model: 'CLS'},
    {brand: 'Seat', model: 'Ibiza'}
]

// Returns the first car object whose brand matches the brand parameter.
function slowSearch(brand) {
    return cars.find(car => car.brand === brand)
}

console.log(slowSearch('Toyota'))