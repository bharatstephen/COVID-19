import { FETCH_COUNTRYWISE_DATA_SUCCESS, FETCH_OVERALL_DATA_SUCCESS, FETCH_DATA_LOADING } from '../Actions/Actions';

const initialState = {
countryWiseData:[],
overAllData:{},
spinner:false,
countryCount:undefined
};

const reducer = (state = initialState, action) => {
console.log(action.data,'val')
  switch (action.type) {
    // case FETCH_DATA_LOADING:
    // return{
    //   spinner:true
    // }
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
    default:
    return state;
    }

};

export default reducer;
