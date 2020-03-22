import { takeEvery, put, call } from "redux-saga/effects";
import Axios from 'axios';
import { FETCH_COUNTRYWISE_DATA, FETCH_OVERALL_DATA ,FETCH_OVERALL_DATA_SUCCESS, FETCH_COUNTRYWISE_DATA_SUCCESS, FETCH_DATA_LOADING } from '../Actions/Actions';

let ApiKey = '58366e8aa0msh921d31b09b16b0fp1a3aeajsnad9be48cedcd'

const getCountryWiseData = ()=>{
  console.log('bef')
  let url = "https://coronavirus-monitor.p.rapidapi.com/coronavirus/cases_by_country.php"
  return Axios.get(url, { headers: { "x-rapidapi-key": ApiKey } })
  .then(response => response.data)
  .catch((error) => {
    console.log('error' + error);
  });
}


function* fetchCountryWiseData() {
    // yield put({ type: FETCH_DATA_LOADING });
    const result = yield call(getCountryWiseData);
    console.log(result,'fetchCountryWiseData')
    yield put({ type: FETCH_COUNTRYWISE_DATA_SUCCESS, data:result });

}


function* fetchOverAllData(){
  const response = yield call(
    fetch,
    `https://coronavirus-monitor.p.rapidapi.com/coronavirus/worldstat.php`, 
    { headers: { "x-rapidapi-key": ApiKey } }
  );
    const result = yield call([response, response.json])
    console.log(result,'result')
    yield put({ type: FETCH_OVERALL_DATA_SUCCESS, data:result });
}

export function* saga() {
  yield takeEvery(FETCH_COUNTRYWISE_DATA, fetchCountryWiseData);
  yield takeEvery(FETCH_OVERALL_DATA, fetchOverAllData);
}


