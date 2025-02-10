import React from "react";
import { Button, Checkbox, Form, Input } from "antd";
const { TextArea } = Input; // Destructure TextArea from Input

const ConsultForm = () => {
  const onFinish = (values: any) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo: any) => {

    console.log("Failed:", errorInfo);
  };
  const customMsg: React.ReactElement = (
    <span className="text-white flex gap-1 items-center"><p className="text-[#d33f3f] text-[25px]">*</p>This fiels is required</span>
  );
  const mailMsg: React.ReactElement = (
    <span className="text-white flex gap-1 items-center"><p className="text-[#d33f3f] text-[25px]">*</p>Enter valid mail address</span>
  );
  type FieldType = {
    username?: string;
    email?: string;
    subject?: string;
    description?:string;
    remember?: string;
  };
  return (
    <div className="bg-transparent md:w-[540px] w-full h-auto rounded-xl ">
      <Form
        name="basic"
       className='flex flex-col '
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item<FieldType>
          className='mb-0'
          >
          <Form.Item<FieldType>
            style={{ display: "inline-block", width: "calc(50% - 8px)" ,}}
            name="username"
            rules={[{ required: true, message: customMsg }]}
          >
            <Input className='h-[40px]' placeholder="Name*" />
          </Form.Item>

          <Form.Item<FieldType>
            style={{
              display: "inline-block",
              width: "calc(50% - 8px)",
              margin: "0 8px",
            }}
            name= "email"
           
            rules={[{ required: true, type: "email", message: mailMsg,
             }]}
          >
            <Input className='h-[40px]' placeholder="Email*" />
          </Form.Item>
        </Form.Item>
        <Form.Item<FieldType>
          name="subject"
           

          
        >
          <Input className='h-[40px]' placeholder="Subject" />
        </Form.Item>
        <Form.Item<FieldType> name='description'  rules={[{ required: true, message:customMsg  }]}>
          <TextArea placeholder="How can we help you?*" rows={6} />
        </Form.Item>
        <Form.Item<FieldType>
          name="remember"
          valuePropName="checked"
          
        >
          <Checkbox className="self-left text-white font-semibold" >Subscribe to see the latest, updates view given email address</Checkbox>
        </Form.Item>

        <Form.Item  >
          <Button  className="self-left rounded-full bg-[#00489A] text-[20px] text-white px-[33px] h-[50px] sm:w-[180px] w-full flex justify-center items-center"  type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default ConsultForm;
