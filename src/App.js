import React, { Component } from 'react';
// import { connect } from 'react-redux'  

import logo from './logo.svg';
import './App.css';

import Button from 'antd/lib/button';
import 'antd/lib/button/style/css';

// import Timeline from 'antd/lib/timeline';
// import 'antd/lib/timeline/style/css'; 

// import Card from 'antd/lib/card';
// import 'antd/lib/card/style/css';

// import Icon from 'antd/lib/icon';
// import 'antd/lib/icon/style/css';

// import { Rate } from 'antd'
// import 'antd/lib/rate/style/css';

// import { Tag } from 'antd'
// import 'antd/lib/tag/style/css';

import UserInput from './components/UserInput'
import TimelineCard from './components/TimeLineCard'
import TaskList from './components/TaskList'
import Task from './components/Task'


class App extends Component {
  constructor(props){
    super(props)
  }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>TimeLog</h2>
        </div>

        <UserInput/>

        <hr />

        <TaskList className="App-intro" title="Week1" style={{ width: "85%", textAlign: 'initial' }}/>

        <TimelineCard className="App-intro" title="Week1" style={{ width: "85%", textAlign: 'initial' }}>
          <Task status="complete" category={["personal","home", "school", "unknown"]}>
            AwesomeSauce
          </Task>
          <Task>Network problems being solved 2015-09-01</Task>
        </TimelineCard>

        {/*<Card className="App-intro" title="Week 1 " extra={<a href="#">More</a>} style={{ width: 400, textAlign: 'initial' }}>
          <Timeline>
            <Timeline.Item>Create a services site 2015-09-01 <Rate disabled defaultValue={2} /></Timeline.Item>
            <Timeline.Item>Solve initial network problems 2015-09-01</Timeline.Item>
            <Timeline.Item dot={<Icon type="clock-circle-o" style={{ fontSize: '16px' }} />} color="red">Technical testing 2015-09-01</Timeline.Item>
            <Timeline.Item>Technical testing 2015-09-01</Timeline.Item>
            <Timeline.Item>Network problems being solved 2015-09-01</Timeline.Item>
          </Timeline>
        </Card>*/}
        {/*<Card className="App-intro" title="Week 1 " extra={<a href="#">More</a>} style={{ width: 400, textAlign: 'initial' }}>
          <Timeline>
            <Timeline.Item><Tag color="red">red</Tag>Create a services site 2015-09-01 </Timeline.Item>
            <Timeline.Item>Solve  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente, modi nesciunt explicabo deleniti maxime ea deserunt dolor hic molestiae tempore nobis quibusdam beatae, sit laudantium expedita architecto! Quae, sit, vitae. iniloremtial network problems 2015-09-01</Timeline.Item>
            <Timeline.Item dot={<Icon type="cloud-o" style={{ fontSize: '16px' }} />} color="red">Technical testing 2015-09-01</Timeline.Item>
            <Timeline.Item >Technical testing 2015-09-01</Timeline.Item>
            <Timeline.Item>Network iniloremtial
              iniloremtial  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore, quasi commodi dolorum natus aliquid architecto consectetur officia, minus laudantium doloremque repellendus nihil possimus, temporibus voluptates at, saepe nostrum tempora ea! ipsum dolor sit amet, consectetur adipisicing elit. Officia vel atque ipsam labore enim accusamus aliquam eligendi, repudiandae necessitatibus totam. Inventore et cupiditate aliquam laudantium, praesentium dolorem ipsa rem, deserunt. ipsum dolor sit amet, consectetur adipisicing elit. Veritatis, nesciunt provident ducimus harum autem temporibus? Facere veniam, odio expedita suscipit iste, autem modi cumque id nam dignissimos nostrum corrupti! Repellendus. ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam debitis, quod molestias earum qui soluta ipsam accusantium aspernatur id rerum blanditiis nostrum repellat, perspiciatis deserunt error. Delectus, sint esse aut? problems being solved 2015-09-01<Rate defaultValue={5} /></Timeline.Item>
          </Timeline>
        </Card>*/}
      </div>
    );
  }
}

export default App;

