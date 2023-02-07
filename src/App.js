import { useState, useEffect } from 'react'
import axios from 'axios'

// Import components
import Card from './components/Card'
import Filters from './components/Filters'

const App = () => {

  // ! State
  const [ countries, setCountries ] = useState([])
  const [ filteredCountries, setFilteredCountries ] = useState([])
  const [ filters, setFilters ] = useState({
    region: 'All',
    search: ''
  })

  // ! Execution
  // Get Countries
  useEffect(() => {
    // Can't async the function in the useEffect argument so function defined inside the useEffect function
    const getData = async () => {
      const { data } = await axios('https://restcountries.com/v3/all')
      setCountries(data)
    }
    getData()
  }, [])

  // ! JSX
  return (
    <div className="container">
      {/* Filters */}
      <Filters filters={filters} setFilters={setFilters} countries={countries} setFilteredCountries={setFilteredCountries} />
      {/* Country list */}
      <div className="row">
        {
          filteredCountries.map(country => {
            return <Card key={country.cca2} {...country} />
          })
        }
      </div>
    </div>
  )
}

export default App