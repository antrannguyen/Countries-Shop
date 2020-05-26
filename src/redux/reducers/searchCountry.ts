import { CountriesActions, CountriesState } from '../../types'

export default function searchCountry(
  state: CountriesState = {
    dataCountries: [],
    inCart: [],
    searchCountry: '',
  },
  action: CountriesActions
): CountriesState {
  switch (action.type) {
  case 'SEARCH_COUNTRY': {
    return { ...state, searchCountry: action.payload.searchCountry }
  }
  default:
    return state
  }
}
