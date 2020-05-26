import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { searchCountry } from '../../redux/actions'
import { AppState, CountriesData } from '../../types'

export default function SearchInput() {
  const [searchInput, setSearchInput] = useState('')
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(searchCountry(searchInput))
  }, [dispatch, searchInput])

  const countries = useSelector(
    (state: AppState) => state.countries?.dataCountries
  )

  const filterSearch = countries.filter((country: { name: string }) =>
    country.name.toLocaleLowerCase().includes(searchInput.toLocaleLowerCase())
  )

  console.log('filter', filterSearch)

  const yeahCountry = () => {
    return filterSearch.map((country: CountriesData, index: number) => (
      <div key={index}>
        <h3> {country.name}</h3>
        <div> {country.population}</div>
        <div>
          {country.languages.map((lang: { name: string }, index: number) => (
            <li key={index}>{lang.name} </li>
          ))}
        </div>
        <img src={country.flag} height="30" width="40" alt="Flag" />
        <div> {country.region}</div>
      </div>
    ))
  }

  const handleSearchCountry = (event: React.ChangeEvent<HTMLInputElement>) =>
    setSearchInput(event.target.value)

  return (
    <div>
      <h2>Search</h2>
      <input onChange={handleSearchCountry} />
      {yeahCountry()}
      <div> {JSON.stringify(filterSearch)}</div>
    </div>
  )
}
