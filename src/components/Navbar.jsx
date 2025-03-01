import { Button, Row, Col } from 'antd'
import React from 'react'
import { useAuth } from '../hooks/useAuth'

export default function Navbar() {

    const {logout} = useAuth();

  return (
    <div style={{float: 'right', textAlign: 'right'}}>
      <Row>
        <Col xs={24} sm={24} md={24} lg={12} xl={12}>
            <Button onClick={logout}>Log Out</Button>
        </Col>
      </Row>
    </div>
  )
}
