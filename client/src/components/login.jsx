import React from "react";
import { Form, Input, Button, Card, Typography } from "antd";

const { Title } = Typography;

const LoginPage = () => {
  const onFinish = (values) => {
    console.log("Success:", values);
  };

  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
      <Card style={{ width: 350, padding: 20, textAlign: "center", boxShadow: "0px 4px 10px rgba(0,0,0,0.15)" }}>
        <Title level={2}>Tattistom</Title>
        <Title level={3}>Login</Title>
        <Form name="login" layout="vertical" onFinish={onFinish}>
          <Form.Item name="email" label="Email" rules={[{ required: true, message: "Please enter your email!" }]}>
            <Input placeholder="Enter your email" />
          </Form.Item>

          <Form.Item name="password" label="Password" rules={[{ required: true, message: "Please enter your password!" }]}>
            <Input.Password placeholder="Enter your password" />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit" block>
              Login
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
};

export default LoginPage;
