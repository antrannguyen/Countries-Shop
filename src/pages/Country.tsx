import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'

import { AppState } from '../types'
import { useSelector } from 'react-redux'
import { useHistory, useParams } from 'react-router-dom'

export default function CountriesTable() {
  const useStyles = makeStyles({
    flag: {
      marginLeft: '30%',
      marginTop: '2%',
    },
    content: {
      textAlign: 'left',
      marginBottom: 30,
    },
  })
  const classes = useStyles()
  const history = useHistory()
  const { name } = useParams()

  const countries = useSelector(
    (state: AppState) => state.countries.dataCountries
  )

  return (
    <div className={classes.flag}>
      {countries
        .filter((country) => {
          return country.name.toLowerCase().includes(name.toLowerCase())
        })
        .map((country, index) => (
          <div>
            <img
              src={country.flag}
              height="180"
              width="250"
              alt={`Flag of ${country.name}`}
            />
            <div className={classes.content}>
              <h2>{country.name}</h2>
              <div>
                <h3>Languages</h3>
                {country.languages.map((lang, index) => (
                  <li key={index}>{lang.name}</li>
                ))}
              </div>
              <h3>Population</h3>
              <div>{country.population}</div>
              <h3>Region</h3>
              <div>{country.region}</div>
            </div>
            <div>
              <Button
                variant="contained"
                color="primary"
                onClick={() => history.goBack()}
              >
                Main page
              </Button>
            </div>
          </div>
        ))}
    </div>
  )
}
