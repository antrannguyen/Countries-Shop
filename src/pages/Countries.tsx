import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
// import { AppState } from '../types'
import { requestAPIs } from '../redux/actions'
// import SearchInput from '../components/SearchBar'
import SimpleTable from '../components/TableCountries'
// import CustomizedInputBase from '../components/SearchBar'
// import SearchAppBar from '../components/SearchBar/search'

export default function Countries() {
  const dispatch = useDispatch()
  // const countries = useSelector(
  //   (state: AppState) => state.countries?.dataCountries
  // )
  useEffect(() => {
    dispatch(requestAPIs())
  }, [dispatch])

  return (
    <div>
      {/* <SearchInput /> */}
      {/* <CustomizedInputBase /> */}
      {/* <SearchAppBar /> */}
      <SimpleTable />
      {/* <h1> Countries List</h1>
      {countries?.map((country, index) => (
        <div key={index}>
          <h3> {country.name}</h3>
          <div> {country.population}</div>
          <div>
            {country.languages.map((lang, index) => (
              <li key={index}>{lang.name} </li>
            ))}
          </div>
          <img src={country.flag} height="30" width="40" alt="Flag" />
          <div> {country.region}</div>
        </div>
      ))} */}
    </div>
  )
}
