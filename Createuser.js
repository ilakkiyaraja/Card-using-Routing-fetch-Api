import { Button, Form, Input, Select } from "antd";
// import { useHistory } from "react-router-dom";

import React from "react";
import "antd/dist/antd.css";
import { useNavigate } from "react-router-dom";

const App = () => {
  const { Option } = Select;
  const navigate = useNavigate();

  const onFinish = (values) => {
    console.log("Success:", values);
    fetch(`https://gorest.co.in/public/v2/users`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization:
          "Bearer 5926e500ffec8fc2a39506e1c0505b8fe747159f6b782c1d71c2ee4adc6316c0",
      },
      body: JSON.stringify(values),
    }).then((res) => {
      navigate(`/users/${values.id}`);
    });
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div>
      <Form
        name="basic"
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 12,
        }}
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label="Id"
          name="id"
          style={{ marginTop: "30px" }}
          rules={[
            {
              required: true,
              message: "Please input your id!",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Username"
          name="name"
          style={{ marginTop: "30px" }}
          rules={[
            {
              required: true,
              message: "Please input your username!",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Email"
          name="email"
          style={{ marginTop: "30px" }}
          rules={[
            {
              required: true,
              message: "Please input your email!",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Status"
          name="status"
          style={{ marginTop: "30px" }}
          rules={[
            {
              required: true,
              message: "Please input your status!",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="gender"
          label="Gender"
          rules={[
            {
              required: true,
              message: "Please select gender!",
            },
          ]}
        >
          <Select placeholder="select your gender">
            <Option value="male">Male</Option>
            <Option value="female">Female</Option>
            <Option value="other">Other</Option>
          </Select>
        </Form.Item>

        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default App;
