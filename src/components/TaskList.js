import React, { Component } from 'react'
import TimeLineCard from './TimeLineCard'
import Task from './Task'

import Timeline from 'antd/lib/timeline';
import 'antd/lib/timeline/style/css'; 

import Icon from 'antd/lib/icon';
import 'antd/lib/icon/style/css';

import { connect } from 'react-redux'

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
    //this should return a list of task... so 
    const tasks = this.props.tasks.map((x, i) => <Timeline.Item key={i}> {x.text}{x.when} </Timeline.Item>)

    return (
      <TimeLineCard
        className={this.props.className}
        title={this.props.title}
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