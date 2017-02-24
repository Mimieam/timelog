import React, { Component} from 'react'
import moment from 'moment';

import DatePicker from 'antd/lib/date-picker';
import 'antd/lib/date-picker/style/css';

import Input from 'antd/lib/input';
import 'antd/lib/input/style/css';
const InputGroup = Input.Group;

import enUS from 'antd/lib/date-picker/locale/en_US';


const UserInput = () => {
    return (
        <InputGroup compact>
            <Input style={{ width: '50%' }} defaultValue="input content" />
            <DatePicker
                defaultValue={moment()}
                format={'MM/DD/YY - h:mm:ss a'}
                locale={enUS}
                showTime
            />
        </InputGroup>
    )
}

export default UserInput;  /* ok my friend just showed up so i wont get anything done now... */
