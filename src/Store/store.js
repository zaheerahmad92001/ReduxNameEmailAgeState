import { combineReducers,createStore } from "redux";
import UserReducer from '../Reducers/UserReducer';

const rootReducer = combineReducers({
  ReducerName:UserReducer,
  
});

const ConfigureStore = ()=>{ 
return createStore(rootReducer)
};

export default ConfigureStore;
