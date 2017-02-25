import React, { Component} from 'react'
import moment from 'moment';

import DatePicker from 'antd/lib/date-picker';
import 'antd/lib/date-picker/style/css';

import Input from 'antd/lib/input';
import 'antd/lib/input/style/css';
const InputGroup = Input.Group;

import enUS from 'antd/lib/date-picker/locale/en_US';


class UserInput extends Component {
    
    submit(e) {
       e.preventDefault();
       const antdInput = this.refs.field;
       const value = antdInput.refs.input.value 
       /* Well I'm falling alseep... this sounds like a good time to stop */
       //this.props.callback(field.value);
       console.log(value) 
       e.target.value = '';
   }
    render(){
        return (
            <form onSubmit={this.submit.bind(this)}>
                <InputGroup compact>
                    <Input ref='field' style={{ maxWidth: '50%' }} defaultValue="input content" />
                    <DatePicker
                        defaultValue={moment()}
                        format={'MM/DD/YY - h:mm:ss a'}
                        locale={enUS}
                        showTime
                    />
                    <button type='submit'>Add</button>
                </InputGroup>
            </form>
        )
    }
}

export default UserInput;  /* ok my friend   just showed up so i wont get anything done now... */
