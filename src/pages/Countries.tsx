import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { requestAPIs } from '../redux/actions'
import CountriesTable from '../components/TableCountries'
// import TemporaryDrawer from '../components/CartPageDrawer'

export default function Countries() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(requestAPIs())
  }, [dispatch])

  return (
    <div>
      {/* <TemporaryDrawer /> */}
      <CountriesTable />
    </div>
  )
}
