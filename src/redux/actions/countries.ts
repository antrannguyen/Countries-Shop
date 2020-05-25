// import { Dispatch } from 'redux'

import {
  REQUEST_APIS,
  RECEIVE_DATA,
  CountriesActions,
  ReceiveDataAction,
  CountriesData,
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

// An Example of Async action processed by redux-thunk middleware
// export function fetchCountries(data: CountriesData) {
//   return (dispatch: Dispatch) => {
//     return fetch('https://restcountries.eu/rest/v2/all')
//       .then((resp) => resp.json())
//       .then((data) => {
//         dispatch(receiveData(data))
//       })
//   }
// }
