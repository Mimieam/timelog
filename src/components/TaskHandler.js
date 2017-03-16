import moment from 'moment'
/* the task handler receives all queried tasks ( effectively a list of task)
* filters them by weeks
* and return a object map of week -> [array of task for that week]
* {
    week1:  [ {task object}, {task object}, {task object} ]
    week2:  [ {task object}, {task object}, {task object} ]
    week32: [ {task object}, {task object}, {task object} ]
  }
*/
/* filtered by year will filter a list of random tasks by year and return an object map
   {
     year1: [{task object}, {task object}, {task object}].
     year2: [{task object}, {task object}, {task object}].

   }
*/
export const filterByYears = (taskList) => {
  let res = {}
  taskList.map((x) => { 
    let y = moment(x.when).year()
    if (y in res) res[y].push(x)
    else res[y] = [x]
  })
  // console.log(res)
  return res
}

// This function is expecting the output of the filterByYears function 
// Filtered = tasks filtered by years
export const filterByWeeks = (Filtered = {}) => {
  let res = {}
  for (let y in Filtered) {
    let weeks = {}
    Filtered[y].map((t) => {
      let w = t.weekOfTheYear? t.weekOfTheYear: moment(t.when).weeks()
      // console.log(w)
      if ( w in weeks ) {weeks[w].push(t)}
      else weeks[''+w] = [t]
    })
    // console.log(weeks)
    res[y] = weeks
  }
  console.log(res)
  return res
}

 const TaskHandler = (taskList = []) => {
  objList = {}
  
  // filter by years
  // filter by weeks


}

export default TaskHandler;
