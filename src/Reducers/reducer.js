import { FETCH_COUNTRYWISE_DATA_SUCCESS, LOGOUT, 
  FETCH_OVERALL_DATA_SUCCESS, SEND_LOGIN_DATA_SUCCESS , FETCH_DATA_LOADING, SET_USERNAME, SET_PASSWORD, 
  SEND_REGISTRATION_DATA_SUCCESS, SEND_REGISTRATION_DATA_FAILURE, DISPLAY_LOGIN_PAGE, 
  DISPLAY_SIGNIN_PAGE, ON_LOGOUT_SUCCESS, SEND_LOGIN_DATA_FAILURE, SIDEBAR_TOGGLE, ON_USER_LOGIN, SEND_REGISTRATION_DATA, ON_LOGOUT,ON_LOGOUT_FAILURE
} from '../Actions/Actions';

export const initialState = {
countryWiseData:[],
overAllData:{},
countryCount:undefined,
spinner:false,
isLoggedIn:false,
userName:'',
password:'',
registrationSuccess:false,
registrationFailure:false,
errorMessageRegistration:undefined,
showLogin:true,
showSignup:false,
loginFailure:false,
errorMessageLogin:undefined,
toggleSideBar:false
};

export default function reducer (state = initialState, action) {
  switch (action.type) {
    case SEND_REGISTRATION_DATA:
    case ON_USER_LOGIN:
    return{
      ...state,
      spinner:true
    }
    case FETCH_COUNTRYWISE_DATA_SUCCESS:
      return{
        ...state,
        countryWiseData : action.data.countries_stat,
        countryCount : action.data.countries_stat.length
      }
      case FETCH_OVERALL_DATA_SUCCESS:
      return{
        ...state,
        overAllData : action.data
      }
      case SET_USERNAME:
      return{
        ...state,
        userName:action.data
      }
      case SET_PASSWORD:
      return{
        ...state,
        password:action.data
      }
      case SEND_LOGIN_DATA_SUCCESS:
      return{
        ...state,
        isLoggedIn:true,
        loginFailure:false,
        spinner:false
      }
      case ON_LOGOUT:
      return{
        ...state,
        spinner:true
      }
      case ON_LOGOUT_SUCCESS:
      return{
        ...state,
        userName:'',
        password:'',
        isLoggedIn:false,
        spinner:false
      }
      case ON_LOGOUT_FAILURE:
      return{
        ...state,
        spinner:false
      }
      case SEND_REGISTRATION_DATA_SUCCESS:
      return{
        ...state,
        registrationSuccess:validateRegistrationResponse(action.data),
        errorMessageRegistration:'',
        registrationFailure:false,
        spinner:false
      }
      case SEND_REGISTRATION_DATA_FAILURE:
      return{
        ...state,
        registrationFailure:true,
        errorMessageRegistration:action.errorData,
        spinner:false
      }
      case DISPLAY_LOGIN_PAGE:
      return{
        ...state,
        showLogin:true,
        showSignup:false,
        registrationFailure:false,
        registrationSuccess:false
      }
      case DISPLAY_SIGNIN_PAGE:
      return{
        ...state,
        userName:'',
        password:'',
        showSignup:true,
        showLogin:false,
        loginFailure:false,
      }
      case SEND_LOGIN_DATA_FAILURE:
      return{
        ...state,
        loginFailure:true,
        errorMessageLogin:action.errorData,
        spinner:false
      }
      case SIDEBAR_TOGGLE:
      return{
        ...state,
        toggleSideBar:!state.toggleSideBar        
      }
    default:
    return state;
    }

}


export const validateRegistrationResponse=(data)=>{
    return data.hasOwnProperty('id')
}
