import { useEffect } from 'react'

const Filters = ({ filters, setFilters, countries, setFilteredCountries }) => {

  //? handleChange function will update the global state for each input/select
  const handleChange = (event) => {
    const newObj = {
      ...filters,
      [event.target.name]: event.target.value
    }
    setFilters(newObj)
  }

  // ? This useEffect is going to be triggered whenever the countries state or the filters state updates
  useEffect(() => {
    // This useEffect will trigger when the countries are loaded and when a user updates one of the filters
    // So if search or region dropdown is updated, this will trigger and update the filteredCountries state
    const regexSearch = new RegExp(filters.search, 'i')
    const filteredArray = countries.filter(country => {
      return regexSearch.test(country.name.common) && (country.region === filters.region || filters.region === 'All')
    })
    console.log(filteredArray)
    setFilteredCountries(filteredArray)

  }, [filters, countries])


  const regions = [ ...new Set(countries.map(country => country.region))]

  return (
    <div className="filters mb-4 mt-4 d-flex">
      {/* Region dropdown */}
      <select onChange={handleChange} name="region" value={filters.region}>
        <option value="All">All</option>
        { regions.map(region => <option key={region} value={region}>{region}</option>)}
      </select>
      {/* Search field */}
      <input onChange={handleChange} type="text" name="search" value={filters.search} placeholder="Search" />
    </div>
  )
}

export default Filters