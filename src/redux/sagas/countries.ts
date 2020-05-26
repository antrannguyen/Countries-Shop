import { call, put, takeLatest } from 'redux-saga/effects'

import { fetchCountries } from '../../Data/fetchCountries'
import { REQUEST_APIS, RECEIVE_DATA } from '../../types'

function* fetchingData() {
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

export default [takeLatest(REQUEST_APIS, fetchingData)]
