import { Button, Row, Col } from 'antd'
import React, { useEffect, useState } from 'react'
import { useAuth } from '../hooks/useAuth'
import { LogoutOutlined } from '@ant-design/icons';
import { readData } from '../config/realtimeCalls';
import { readDataFirestore } from '../config/firestoreCalls';

export default function Navbar() {

    const {logout, user} = useAuth();
    const [localUser, setLocalUser] = useState(null);

    useEffect(() => {
      //console.log(user);
      readUser();
    },[user]);

    const readUser = async () =>{
      const luser = await readData('users', 'email', user.email);

      if(luser.val()){

        //Nos crea un arreglo de las llaves de los usuarios
        //Object.keys(user.val()[0]);
        setLocalUser(luser.val()[Object.keys(luser.val())[0]]);
      }

      //console.log(luser.val());

      const luser2 = await readDataFirestore('users', 'email', user.email);
      //console.log(luser2);

      if(!luser2.empty){
        console.log(luser2.docs[0].data);
      }
    }

  return (
    <div style={{display: 'flex', justifyContent: 'space-evenly'}}>
      <Row xs={24} sm={24} md={24} lg={24} xl={24}>
        <Col xs={24}>
          {/* {JSON.stringify(localUser)} */}
          {localUser&& <>{localUser.name}</>}
        </Col>
        <Col xs={24} sm={24} md={24} lg={12} xl={12}>
            {/* <Button onClick={logout}>Log Out</Button> */}
            <LogoutOutlined onClick={logout}>Log Out</LogoutOutlined>
        </Col>
      </Row>
    </div>
  )
}
