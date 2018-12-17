const techStartups = [
    {
      name: 'Autheos',
      industry: 'ecommerce'
    },
    {
      name: 'Bunq',
      industry: 'finance'
    },
    {
      name: 'Ligo',
      industry: 'legal'
    },
    {
      name: 'Florin',
      industry: 'finance'
    }
  ]
  
  const finTechStartups = techStartups.filter((startup) => {
    return startup.industry === 'finance'
  })
  
  console.log(finTechStartups)