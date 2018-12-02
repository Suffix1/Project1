const peoples = [
    {id: 1, name: 'James', nationality: 'GB'},
    {id: 2, name: 'Adam', nationality: 'CA'},
    {id: 3, name: 'Larry', nationality: 'US'},
    {id: 4, name: 'Fred', nationality: 'NL'},
    {id: 5, name: 'Anna', nationality: 'NL'},
    {id: 6, name: 'Emily', nationality: 'DE'},
    {id: 7, name: 'Lenny', nationality: 'US'},
    {id: 8, name: 'Cara', nationality: 'NL'},
    {id: 9, name: 'Nathalie', nationality: 'NL'},
]

const clubs = [
    {name: 'Book Club', members: [9,3,6,2]},
    {name: 'Auto Club', members: [1,2,3]},
    {name: 'Country Club', members: [7,5,8]},
    {name: 'Food Club', members: [5,1,6,7]},
    {name: 'Yoga Club', members: [1,4,5,3,7]},
    {name: 'Garage Band', members: [1,3,8,9]},
    {name: 'Pool Club', members: [6,4,5,8,9]},
]

const clubsMembers = clubs.map(club => club.members)
console.log(clubsMembers[0])

const peopleNats = peoples.map(people => people.nationality)




console.log(peopleNats)
const bookClub = clubsMembers[0]
console.log(bookClub)
const bookMember = '9'
console.log(bookMember)
const bookNat = peopleNats['bookMember']
console.log(bookNat)
console.log(peopleNats[0])
console.log(console === global.console)
