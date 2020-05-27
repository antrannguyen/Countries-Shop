import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { requestAPIs } from '../redux/actions'
import SimpleTable from '../components/TableCountries'

export default function Countries() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(requestAPIs())
  }, [dispatch])

  return (
    <div>
      <SimpleTable />
    </div>
  )
}
