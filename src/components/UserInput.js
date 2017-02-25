import React, { Component } from 'react'
import { connect } from 'react-redux'    
import moment from 'moment';

import DatePicker from 'antd/lib/date-picker';
import 'antd/lib/date-picker/style/css';

import Input from 'antd/lib/input';
import 'antd/lib/input/style/css';

import Button from 'antd/lib/button';
import 'antd/lib/button/style/css';
const InputGroup = Input.Group;

import enUS from 'antd/lib/date-picker/locale/en_US';

import { add_task } from '../Actions'


class UserInput extends Component {
    
    submit(e) {
       e.preventDefault();
       const antdInput = this.refs.field;
       const value = antdInput.refs.input.value 
       if (value) {
          this.props.dispatch(add_task({
            text: value,
            when: moment(), // should be getting this from the form field... do that later
            status: 'completed'
          })) 
       } 
       // dispatch value to redux store
       //this.props.callback(field.value);
       console.log(value) 
       antdInput.refs.input.value='';
   }
    render(){
        return (
            <form>
                <InputGroup compact>
                    <Input ref='field' style={{ maxWidth: '50%' }} placeholder="Got something to Log?" />
                    <DatePicker
                        defaultValue={moment()}
                        format={'MM/DD/YY - h:mm:ss a'}
                        locale={enUS}
                        showTime
                    />
                    <Button onClick={this.submit.bind(this)}>Add</Button>
                </InputGroup>
            </form>
        )
    }
}

UserInput = connect()(UserInput)

export default UserInput;  
