import { combineReducers } from 'redux'
import { ADD_TASK, EDIT_TASK, DELETE_TASK, SET_STATUS_TASK } from './Actions'



function timelog(state=[], action) {
  switch (action.type) {
    case ADD_TASK:
      return [
        ...state,
        {
          text: action.data.text,
          when: action.data.when,
          status: action.data.status
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
