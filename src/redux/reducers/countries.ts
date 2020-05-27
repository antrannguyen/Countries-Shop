import { CountriesActions, CountriesState } from '../../types'

export default function countries(
  state: CountriesState = {
    dataCountries: [],
    inCart: [],
    searchCountry: '',
  },
  action: CountriesActions
): CountriesState {
  switch (action.type) {
  case 'RECEIVE_DATA': {
    const { dataCountries } = action.payload
    return { ...state, dataCountries: [...dataCountries] }
  }
  case 'ADD_COUNTRY': {
    const { country } = action.payload
    console.log('staet', state.inCart)
    if (state.inCart.find((c) => c.name === country.name)) {
      return state
    }
    // Always return new state (e.g, new object) if changed
    return { ...state, inCart: [...state.inCart, country] }
  }
  case 'REMOVE_COUNTRY': {
    const { country } = action.payload
    const index = state.inCart.findIndex((c) => c.name === country.name)
    if (index >= 0) {
      state.inCart.splice(index, 1)
      return { ...state, inCart: [...state.inCart] }
    }
    return state
  }
  case 'SEARCH_COUNTRY': {
    return { ...state, searchCountry: action.payload.searchCountry }
  }
  default:
    return state
  }
}
