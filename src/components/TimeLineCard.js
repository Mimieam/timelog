import React, { Component} from 'react'

import Timeline from 'antd/lib/timeline';
import 'antd/lib/timeline/style/css'; 

import Card from 'antd/lib/card';
import 'antd/lib/card/style/css';


class TimeLineCard extends Component {
  render() {
    return (
      <Card className={this.props.className} title={this.props.title} extra={<a href="#">More</a>} style={this.props.style}>
        <Timeline>
          {this.props.children}
        </Timeline>
      </Card>
    )
  }
}

export default TimeLineCard