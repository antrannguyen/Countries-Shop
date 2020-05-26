import {
  REQUEST_APIS,
  RECEIVE_DATA,
  SEARCH_COUNTRY,
  ADD_COUNTRY,
  REMOVE_COUNTRY,
  CountriesActions,
  ReceiveDataAction,
  CountriesData,
  SearchCountrytAction,
  AddCountrytAction,
  RemoveCountryAction,
} from '../../types'

// Countries
export function requestAPIs(): CountriesActions {
  return {
    type: REQUEST_APIS,
  }
}

export function receiveData(data: CountriesData[]): ReceiveDataAction {
  return {
    type: RECEIVE_DATA,
    payload: {
      dataCountries: data,
    },
  }
}

export function searchCountry(searchCountry: string): SearchCountrytAction {
  return {
    type: SEARCH_COUNTRY,
    payload: {
      searchCountry: searchCountry,
    },
  }
}

export function addCountry(country: CountriesData): AddCountrytAction {
  return {
    type: ADD_COUNTRY,
    payload: {
      country: country,
    },
  }
}

export function removeCountry(country: CountriesData): RemoveCountryAction {
  return {
    type: REMOVE_COUNTRY,
    payload: {
      country: country,
    },
  }
}
