import {combineReducers} from 'redux';

import FoodReducer from './foods-reducer';
import UserReducer from './users-reducer';

const rootReducers = combineReducers({
  foods: FoodReducer,
  users: UserReducer
});

export default rootReducers;