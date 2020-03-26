import { takeEvery, put, call, select } from "redux-saga/effects";
import Axios from 'axios';
import { FETCH_COUNTRYWISE_DATA, FETCH_OVERALL_DATA ,FETCH_OVERALL_DATA_SUCCESS, 
  FETCH_COUNTRYWISE_DATA_SUCCESS, FETCH_DATA_LOADING, 
  SEND_REGISTRATION_DATA, SEND_REGISTRATION_DATA_SUCCESS, 
  SEND_REGISTRATION_DATA_FAILURE, ON_USER_LOGIN,
  SEND_LOGIN_DATA_SUCCESS, SEND_LOGIN_DATA_FAILURE, ON_LOGOUT, ON_LOGOUT_SUCCESS, ON_LOGOUT_FAILURE,SEND_LOGIN_DATA_LOADING } from '../Actions/Actions';

// let ApiKey = '58366e8aa0msh921d31b09b16b0fp1a3aeajsnad9be48cedcd'

// const getCountryWiseData = ()=>{
//   console.log('bef')
//   let url = "https://coronavirus-monitor.p.rapidapi.com/coronavirus/cases_by_country.php"
//   return Axios.get(url, { headers: { "x-rapidapi-key": ApiKey } })
//   .then(response => response.data)
//   .catch((error) => {
//     console.log('error' + error);
//   });
// }


// function* fetchCountryWiseData() {
//     // yield put({ type: FETCH_DATA_LOADING });
//     const result = yield call(getCountryWiseData);
//     console.log(result,'fetchCountryWiseData')
//     yield put({ type: FETCH_COUNTRYWISE_DATA_SUCCESS, data:result });

// }


// function* fetchOverAllData(){
//   const response = yield call(
//     fetch,
//     `https://coronavirus-monitor.p.rapidapi.com/coronavirus/worldstat.php`, 
//     { headers: { "x-rapidapi-key": ApiKey } }
//   );
//     const result = yield call([response, response.json])
//     console.log(result,'result')
//     yield put({ type: FETCH_OVERALL_DATA_SUCCESS, data:result });
// }

const triggerRegistrationApi = (action)=>{
  let url = "http://3.7.29.98:8001/users/profile/"
  return Axios.post(url, { 
    name:action.data.userName,
    email:action.data.emailId,
    password:action.data.password
  })
  .then(response => response.data)
}

function* sendRegistrationData(type, action) {
  try{
  const response= yield call(triggerRegistrationApi, type, action);
    yield put({ type: SEND_REGISTRATION_DATA_SUCCESS, data:response });
}
  catch ( error ){
    let errorMsg;
    error.response && error.response.status === 404 ? errorMsg = 'Kindly Try After Sometime' : errorMsg = error.response && error.response.data.email[0]
    yield put({ type: SEND_REGISTRATION_DATA_FAILURE, errorData:errorMsg} ) ;
  }
}

const triggerLoginApi = (action)=>{
  let url = "http://3.7.29.98:8001/users/login/"
  return Axios.post(url, {
    username : action.userName,
    password : action.password
  })
  .then(response => {
    return response.data
  })
}

function* sendLoginData(action) {
  try{
    const response= yield call(triggerLoginApi, action);
    if(response.token){
      sessionStorage.setItem('Token', response.token)
      action.history.push('/dashboard');
    }
    yield put({ type: SEND_LOGIN_DATA_SUCCESS, data:action.history})
}
  catch ( error ){
    let errorMsg;
    error.response && error.response.status === 404 ? errorMsg = 'Kindly Try After Sometime' : errorMsg = error.response && error.response.data.non_field_errors[0]
    yield put({ type: SEND_LOGIN_DATA_FAILURE, errorData:errorMsg} ) ;
  }
}

const logout = ()=>{
  let url = "http://3.7.29.98:8001/users/logout/"
  let token = sessionStorage.getItem('Token')
  return Axios.get(url, {headers:{ "Authorization": `Token ${token}` }})
  .then(response => response.data)
}

function* userLogout(action) {
  try{
    const res = yield call (logout)
    if(res === 'Logged Out Successfully'){
      sessionStorage.removeItem('Token');
      action.history.push('/');
    }
    yield put({ type: ON_LOGOUT_SUCCESS,  data:action})
}
  catch ( error ){
    yield put({ type: ON_LOGOUT_FAILURE, errorData:error} ) ;
  }
}

export function* saga() {
  // yield takeEvery(FETCH_COUNTRYWISE_DATA, fetchCountryWiseData);
  // yield takeEvery(FETCH_OVERALL_DATA, fetchOverAllData);
  yield takeEvery(SEND_REGISTRATION_DATA, sendRegistrationData);
  yield takeEvery(ON_USER_LOGIN, sendLoginData);
  yield takeEvery(ON_LOGOUT, userLogout);

}


