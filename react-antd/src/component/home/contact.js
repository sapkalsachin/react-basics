import React from "react";
import { Form, Input, Button, Checkbox } from "antd";
const { TextArea } = Input;
function AppContact() {
  return (
    <div className="block contactBlock">
      <div className="container-fluid">
        <div className="titleHolder">
          <h2>Get in touch</h2>
          <p>dolor sit amet, consectetuer something to be written here</p>
        </div>
        <Form
          name="normal_login"
          className="login-form"
          initialValues={{ remember: true }}
        >
          <Form.Item
            name="fullname"
            rules={[
              { required: true, message: "Please input your full name!" },
            ]}
          >
            <Input placeholder="Full name" />
          </Form.Item>
          <Form.Item
            name="email"
            rules={[{ required: true, message: "Please input your e-mail!" }]}
          >
            <Input type="email" placeholder="Email" />
          </Form.Item>

          <Form.Item name="telephone">
            <Input type="telephone" placeholder="Telephone" />
          </Form.Item>

          <Form.Item
            name="subject"
            rules={[
              {
                required: true,
                message: "Please input your subject for the mail!",
              },
            ]}
          >
            <Input type="subject" placeholder="Subject" />
          </Form.Item>

          <Form.Item name="message">
            <TextArea placeholder="Message" />
          </Form.Item>

          <Form.Item
            name="agreement"
            valuePropName="checked"
            rules={[
              {
                validator: (_, value) =>
                  value
                    ? Promise.resolve()
                    : Promise.reject(new Error("Should accept agreement")),
              },
            ]}
            
          >
            <Checkbox>
              I have read the <a href="#blank">agreement</a>
            </Checkbox>
          </Form.Item>

          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="login-form-button"
            >
              Submit
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
}

export default AppContact;
