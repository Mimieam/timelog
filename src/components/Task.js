import React, { Component} from 'react'

import Timeline from 'antd/lib/timeline';
import 'antd/lib/timeline/style/css'; 

import { Tag } from 'antd'
import 'antd/lib/tag/style/css';

import Icon from 'antd/lib/icon';
import 'antd/lib/icon/style/css';

const TaskIcon = (props)=> <Icon type={props.type} style={{ color: `${props.color}` , fontSize: `${props.size}` }} />
TaskIcon.defaultProps = {
  type: 'check-circle-o',
  size: '16px',
  color: '#FB9633'
}

/* Task Tag Component - a child of Task - will display any tag added to the current task*/
const TaskTag = (props)=> <Tag color={props.color}> {props.type} </Tag>
TaskTag.defaultProps = {
  type: 'work',
  color: '#0CC'
}

let TaskTagColorMap = {
  home:"#0CC",
  school:"#A7E040",
  work:"#108CE5",
  personal:"#FB9633",
}

class Task extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    let statusColor = "#108CE5"
    if (this.props.status === 'completed') {
      statusColor = "#A7E040"
    }
    else if (this.props.status === 'inProgress') {
      statusColor = '#FB9633'
    }
    let status = 'undefined'
    const tags = this.props.category.map((_tagName, index) => {
      return <TaskTag key={index} color={TaskTagColorMap[_tagName]} type = {_tagName} />
    })
    return (
      <Timeline.Item>
          {this.props.children}
          {/*{tags} */}
      </Timeline.Item>
    )
  }
}

Task.prototypes = {
  category: React.PropTypes.array
}
Task.defaultProps = {
  category: [],
  statusColor: '#108CE5',
  icon: 'check-circle-o'
  
};

export default Task