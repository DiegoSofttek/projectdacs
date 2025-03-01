import React, {useState} from 'react'
import { Row, Col, Input, Button } from 'antd'
import { createUser } from '../config/authCall'

export default function CreateUser() {

    const [userName, setUserName] = useState(''); 
    const [password, setPassword] = useState('');

    const changeUserName = (inputValue) => {
        setUserName(inputValue.target.value);
    }

    const changePassword = (inputValue) => {
        setPassword(inputValue.target.value);
    }

    const create = () => {
        // console.log(userName);
        // console.log(password);
        createUser(userName, password);
    }

  return (
    <div>
        <Row>
            <Col xs={24} sm={24} md={24} lg={12} xl={12}>
                <label>Email:</label>
                <Input
                    size='large'
                    placeholder='Email'
                    value={userName}
                    onChange={changeUserName}
                >
                </Input>
            </Col>

            <Col xs={24} sm={24} md={24} lg={12} xl={12}>
                <label>Password:</label>
                <Input.Password
                    size='large'
                    placeholder='Password'
                    value={password}
                    onChange={changePassword}
                >
                </Input.Password>
            </Col>
        </Row>

        <Button onClick={create}>Create User</Button>
    </div>
  )
}
