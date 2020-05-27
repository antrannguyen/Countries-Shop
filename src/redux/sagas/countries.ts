import { put, takeLatest } from 'redux-saga/effects'

import { REQUEST_APIS, RECEIVE_DATA } from '../../types'

function* fetchingData() {
  try {
    const url = 'https://restcountries.eu/rest/v2/all'

    const cache = yield caches.open('getCountriesData')
    let cacheReponse = yield cache.match(url)

    if (!cacheReponse || !cacheReponse.ok) {
      yield cache.add(url)
      cacheReponse = yield cache.match(url)
    }
    const reponse = yield cacheReponse?.json()

    yield put({
      type: RECEIVE_DATA,
      payload: {
        dataCountries: reponse,
      },
    })
  } catch (e) {
    console.log(e)
  }
}

export default [takeLatest(REQUEST_APIS, fetchingData)]
