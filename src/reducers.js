import uuid from 'node-uuid'
import moment from 'moment'

import { combineReducers } from 'redux'
import { ADD_TASK, EDIT_TASK, DELETE_TASK, SET_STATUS_TASK } from './Actions'


function timelog(state=[], action) {
  switch (action.type) {
    case ADD_TASK:
      const _when = action.data.when
      return [
        ...state,
        {
          id: uuid.v4(),
          text: action.data.text,
          when: _when,
          status: action.data.status,
          month: _when.month() + 1, // moment month is from 0 - 11 
          weekOfTheMonth: _when.week() - moment(_when).startOf('month').week() + 1,
          weekOfTheYear: _when.weeks()
        }
      ]
    case EDIT_TASK:
      return Object.assign({}, state, action.data)
    case DELETE_TASK:  
      return state.filter((x)=> x!== action.id )      
    case SET_STATUS_TASK:
      return Object.assign({}, state, {status: action.status})
    default:
      return state
  }
}

const appReducers = combineReducers({
  // visibilityFilter,
  timelog
})


/* Good Morning :) - Today we are integrating redux to your app*/
export default appReducers
