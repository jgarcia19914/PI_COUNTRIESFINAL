import { GET_ACTIVIDAD, GET_COUNTRIES } from './action';
import { GET_BY_NAME } from './action';
import { GET_DETAIL } from './action'; 
import { GET_BY_NAME_ACT } from './action';
import { GET_SEARCH_CONTINET } from './action';



let initialState= {
  allcountries:[],
  countriesCopy:[],
  alldetail:{},
  allActivities: [],
 
};

function rootReducer(state = initialState, action) {
switch (action.type) {

case GET_COUNTRIES:
  console.log(action.payload)
      return {
          ...state,
          allcountries:action.payload,
          countriesCopy: action.payload,
      };
case GET_BY_NAME:
    console.log(action.payload)
    return{
      ...state,
       allcountries:[action.payload],
    };
    case GET_SEARCH_CONTINET:
    console.log(action.payload)
    return{
      ...state,
       allcountries:[action.payload],
    };
    case GET_DETAIL:
      console.log(action.payload)
      return{
        ...state,
           data: action.payload,
          };
  case GET_ACTIVIDAD:
            console.log(action.payload)
           return {
             ...state,
             allActivities:action.payload          
           };
   case GET_BY_NAME_ACT:
      console.log(action.payload)
      return{
        ...state,
        allActivities:[action.payload],
      };
  
    
default:
      return state;
  }
} 
 

  
export default rootReducer