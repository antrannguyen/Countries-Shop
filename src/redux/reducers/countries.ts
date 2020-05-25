import { CountriesActions, CountriesState } from '../../types'

export default function countries(
  state: CountriesState = {
    dataCountries: [],
  },
  action: CountriesActions
): CountriesState {
  switch (action.type) {
  case 'RECEIVE_DATA':
    const { dataCountries } = action.payload

    console.log('dataCountries', dataCountries)

    return { ...state, dataCountries: [...dataCountries] }
  default:
    return state
  }
}
