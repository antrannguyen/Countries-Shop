import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Paper from '@material-ui/core/Paper'

import { AppState } from '../../types'
import { useSelector } from 'react-redux'
import SearchAppBar from '../SearchBar'

// const country = useSelector((state: AppState) => state.countries?.searchCountry)
// console.log('countries', countries)
// console.log('country', country)

export default function SimpleTable() {
  const useStyles = makeStyles({
    table: {
      minWidth: 450,
    },
  })

  const countries = useSelector(
    (state: AppState) => state.countries.dataCountries
  )

  const searchKey = useSelector(
    (state: AppState) => state.countries.searchCountry
  )
  const classes = useStyles()

  return (
    <TableContainer component={Paper}>
      <SearchAppBar />
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Flag</TableCell>
            <TableCell align="right">Name</TableCell>
            <TableCell align="right">Languages</TableCell>
            <TableCell align="right">Population</TableCell>
            <TableCell align="right">Region</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {countries
            .filter((country) => {
              return country.name
                .toLowerCase()
                .includes(searchKey.toLowerCase())
            })
            .map((row, index) => (
              <TableRow key={index}>
                <TableCell component="th" scope="row">
                  <img
                    src={row.flag}
                    height="30"
                    width="40"
                    alt={`Flag of ${row.name}`}
                  />
                </TableCell>
                <TableCell align="right">{row.name}</TableCell>
                <TableCell align="right">
                  {row.languages.map((lang, index) => (
                    <li key={index}>{lang.name}</li>
                  ))}
                </TableCell>
                <TableCell align="right">{row.population}</TableCell>
                <TableCell align="right">{row.region}</TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}
