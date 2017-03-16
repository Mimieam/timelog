import React, { Component } from 'react'
import { connect } from 'react-redux'
import moment from 'moment'
window.moment = moment

import Timeline from 'antd/lib/timeline';
import 'antd/lib/timeline/style/css'; 

import TimeLineCard from './TimeLineCard'

/*
* TaskList component will return a list of tasks to be added to timelinecard
*/


const mapStoreToProps = (state) => {
    console.log(state)
    return {
        tasks: state.timelog
    }
}

class TaskList extends Component {
  
  render() {
    // this should return a list of task... 
    const _t = this.props.tasks
    _t.filter((x) => {
      console.log(x)
      return moment(x.when)
    }) // what is this supposed to be doing ?
  
    let tasks = this.props.tasks.sort((a, b) => moment(a.when) < moment(b.when))
    
    tasks = tasks.map((x, i) => <Timeline.Item key={i}> {`${x.text}  ${moment(x.when).toString()}`}  </Timeline.Item>)
    // tasks = this.props.tasks.map((x, i) => <Timeline.Item key={i}> {x.text}{moment(x.when).toString()} </Timeline.Item>)

    // potential problem for later ... how to divise the List into weeks and spitting up multi timelinecard
    console.log(moment().format("MMMM").toString())
    return (
      <TimeLineCard
        className={this.props.className}
        title={moment().format("MMMM").toString()}//{this.props.title}
        extra={<a href="#">Settings</a>}
        style={this.props.style} >
      
        {tasks}
      
      </TimeLineCard>
    ) 
  }
}

TaskList.defaultProps = {
  tasks: []
}

TaskList = connect(mapStoreToProps)(TaskList)

export default TaskList