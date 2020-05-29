import React, { useContext } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Paper from '@material-ui/core/Paper'
import Button from '@material-ui/core/Button'

import { AppState } from '../../types'
import { useSelector } from 'react-redux'
import SearchAppBar from '../../components/SearchBar'
import { addCountry } from '../../redux/actions/countries'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import ThemeContext from '../../components/Context'

export default function CountriesTable() {
  const dispatch = useDispatch()
  const useStyles = makeStyles({
    table: {
      minWidth: 450,
    },
  })
  const { themes } = useContext(ThemeContext)

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
            <TableCell>Name</TableCell>
            <TableCell>Languages</TableCell>
            <TableCell>Population</TableCell>
            <TableCell>Region</TableCell>
            <TableCell>Add Items</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {countries
            .filter((country) => {
              return country.name
                .toLowerCase()
                .includes(searchKey.toLowerCase())
            })
            .map((country, index) => (
              <TableRow key={index}>
                <TableCell component="th" scope="row">
                  <img
                    src={country.flag}
                    height="30"
                    width="40"
                    alt={`Flag of ${country.name}`}
                  />
                </TableCell>
                <TableCell>
                  <Link to={`/name/${country.name}`}>{country.name}</Link>
                </TableCell>
                <TableCell>
                  {country.languages.map((lang, index) => (
                    <li key={index}>{lang.name}</li>
                  ))}
                </TableCell>
                <TableCell>{country.population}</TableCell>
                <TableCell>{country.region}</TableCell>
                <TableCell>
                  <Button
                    style={{ backgroundColor: themes.background }}
                    variant="contained"
                    color="primary"
                    onClick={() => dispatch(addCountry(country))}
                  >
                    Add
                  </Button>
                </TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}
