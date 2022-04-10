import { combineReducers } from "redux";
import appReducer from "./app/app.reducer";
import tadaReducer from './tada/tada.reducer';

const rootReducer = () =>
  combineReducers({
    app: appReducer,
    tada: tadaReducer,
  });

export default rootReducer;