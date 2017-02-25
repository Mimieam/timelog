
/*
 * action types
 */


export const ADD_TASK = "ADD_TASK"
export const EDIT_TASK = "EDIT_TASK"
export const DELETE_TASK = "DELETE_TASK"
export const SET_STATUS_TASK = "SET_STATUS_TASK"

/*
 * action creators
 */

export function add_task(data) {
    return {
        type: ADD_TASK,
        data: data
    }
}
export function edit_task(data) {
    return {
        type: EDIT_TASK,
        data: data
    }
}
export function delete_task(id) {
    return {
        type: DELETE_TASK,
        id: id
    }   
}
export function set_status_task(status) {
    return {
        type: SET_STATUS_TASK,
        status: status
    }
}



