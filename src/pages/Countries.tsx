import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { AppState } from '../types'
import { requestAPIs } from '../redux/actions'

export default function Countries() {
  const dispatch = useDispatch()
  const countries = useSelector(
    (state: AppState) => state.countries?.dataCountries
  )
  useEffect(() => {
    dispatch(requestAPIs())
  }, [dispatch])

  // const languages = () => {
  //   countries?.map((country) => {
  //     country.languages.map((lang) => console.log(lang.name))
  //   })
  // }

  // console.log('langhgy', languages())

  return (
    <div>
      <h1> Countries List</h1>
      {countries?.map((country, index) => (
        <div key={index}>
          <h3> {country.name}</h3>
          <div> {country.population}</div>
          <div>
            {country.languages.map((lang, index) => (
              <div key={index}>{lang.name} </div>
            ))}
          </div>
          <img src={country.flag} height="30" width="40" alt="Flag" />
          <div> {country.region}</div>
        </div>
      ))}
    </div>
  )
}
