import React from "react";
import { Row, Col, Form, Input, Button, Checkbox } from "antd";
import { LockOutlined, UserOutlined } from '@ant-design/icons';


const Login = () => {
    return (
        <Row justify={"center"} align={"middle"} style={{ height: "100vh" }}>
            <Col span={8} offset={4}>
               <Form
                    name="login"
                    className="shadow-2-down"
                    initialValues={{ remember: true }}
                    align={"middle"}
                    style={{maxWidth: "350px", border: "1px solid #ccc", padding: "20px", borderRadius: "15px", boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.15)"}}
                    onFinish={(values) => {
                        console.log(values);
                    }}
                >
                    <h1>Tattistom</h1>
                    <Form.Item
                         name="username"
                         rules={[{ required: true, message: 'Please input your Username!' }]}
                    >
                        <Input prefix={<UserOutlined />} placeholder="Username" />
                    </Form.Item>
                    <Form.Item
                         name="password"
                         rules={[{ required: true, message: 'Please input password!' }]}
                    >
                        <Input prefix={<LockOutlined />} placeholder="Password" />
                    </Form.Item>
                    <Form.Item name="remember" valuePropName="checked" label={null}>
                        <Checkbox>Remember me</Checkbox>
                    </Form.Item>
                    <Form.Item label={null}>
                        <Button type="primary" htmlType="submit" style={{width: "100%"}}>
                            Submit
                        </Button>
                    </Form.Item>
                    
                    
               </Form>
            </Col>
        </Row>
    )
}

export default Login;