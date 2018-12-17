const movies = [
    {
      title: 'The Godfather',
      rating: 9.2,
      released: 1972,
      votes: 100
    },
    {
      title: 'The Shawshank Redemption',
      rating: 9.2,
      released: 1994,
      votes: 101
    },
    {
      title: 'The Dark Knight',
      rating: 8.9,
      released: 2008,
      votes: 200
    },
    {
      title: 'Star Wars: Episode IV - A New Hope',
      rating: 8.6,
      released: 1977,
      votes: 999
    }
  ]
  
  const moviesByYear = movies.sort((a, b) => {
    return b.released - a.released
  })
  
  console.log(moviesByYear)
  
  const moviesByRating = moviesByYear.sort((a, b) => {
    return b.rating - a.rating
  })
  
 // console.log(moviesByRating)