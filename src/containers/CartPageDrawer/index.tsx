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
import { removeCountry } from '../../redux/actions/countries'
import { useDispatch } from 'react-redux'
import ThemeContext from '../../components/Context'

export default function CartPageDrawer() {
  const dispatch = useDispatch()
  const useStyles = makeStyles({
    table: {
      minWidth: 450,
    },
  })
  const classes = useStyles()
  const { themes } = useContext(ThemeContext)

  const searchKey = useSelector(
    (state: AppState) => state.countries.searchCountry
  )
  const inCart = useSelector((state: AppState) => state.countries.inCart)

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="left">Flag</TableCell>
            <TableCell align="right">Name</TableCell>
            <TableCell align="right">Delete Items</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {inCart
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
                <TableCell align="right">{country.name}</TableCell>

                <TableCell align="right">
                  <Button
                    style={{ backgroundColor: themes.background }}
                    variant="contained"
                    color="primary"
                    onClick={() => dispatch(removeCountry(country))}
                  >
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}
