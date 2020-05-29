import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { requestAPIs } from '../redux/actions'
import CountriesTable from '../components/CountriesPage'

export default function Countries() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(requestAPIs())
  }, [dispatch])

  return (
    <div>
      <CountriesTable />
    </div>
  )
}
