import { Button, Form, Input } from "antd";
import React from "react";
import { useNavigate } from "react-router-dom";

const Createpost = () => {
  const navigate = useNavigate();
  const onFinish = (values) => {
    console.log("Success:", values);
    fetch(`https://gorest.co.in/public/v2/posts`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization:
          "Bearer 5926e500ffec8fc2a39506e1c0505b8fe747159f6b782c1d71c2ee4adc6316c0",
      },
      body: JSON.stringify(values),
    }).then((res) => {
      navigate(`/posts/${values.id}`);
    });
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <Form
      name="basic"
      labelCol={{
        span: 8,
      }}
      wrapperCol={{
        span: 16,
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
        label="User-id"
        name="user_id"
        rules={[
          {
            required: true,
            message: "Please input your user_id!",
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Title"
        name="title"
        rules={[
          {
            required: true,
            message: "Please input your title!",
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Body"
        name="body"
        rules={[
          {
            required: true,
            message: "Please input your body!",
          },
        ]}
      >
        <Input />
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
  );
};

export default Createpost;
