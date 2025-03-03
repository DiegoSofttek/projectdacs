import { Button, Row, Col, Input } from 'antd';
import React, {useEffect, useState} from 'react'
import { signInUser } from '../config/authCall';
import { useAuth } from '../hooks/useAuth';
import { useNavigate } from 'react-router-dom';

export default function Login({mail}) {

    //const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    const {user} = useAuth();
    const [userName, setUserName] = useState(mail);
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
      if(user) navigate('/home');
    }, [user]);

    const changeUserName = (inputValue) => {
        //console.log(inputValue);
        //console.log(inputValue.target.value);
        setUserName(inputValue.target.value);
    }

    const changePassword = (inputValue) => {
        setPassword(inputValue.target.value);
    }

    const login = () => {
        // console.log(userName);
        // console.log(password);
        signInUser(userName, password);
    }

  return (
    <div>
      {/* {numbers.map((number, index) => {
        return <Button key={index}>{number}</Button>
      })} */}

      {JSON.stringify(user)}
      {/* {JSON.stringify(user.providerData[0].providerId)} */}
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

      <Button onClick={login}>Login</Button>
    </div>
  )
}
