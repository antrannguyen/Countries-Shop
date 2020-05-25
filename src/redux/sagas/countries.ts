import { call, put, takeLatest } from 'redux-saga/effects'

import { REQUEST_APIS, RECEIVE_DATA } from '../../types'
import { fetchCountries } from '../../Data/fetchCountries'

function* doSomethingWhenFetchingData() {
  try {
    const dataCountries = yield call(fetchCountries)
    yield put({
      type: RECEIVE_DATA,
      payload: {
        dataCountries: dataCountries,
      },
    })
  } catch (e) {
    console.log(e)
  }
}

export default [takeLatest(REQUEST_APIS, doSomethingWhenFetchingData)]
