import { Button, Modal, Checkbox, Form, Input } from 'antd';
import { PlusCircleOutlined } from '@ant-design/icons';
import { useState } from 'react';

export default function ChatRoom() {
  //TODO- REPRESENTA UMA SALA DE CHAT INDIVIDUAL, VOCE ESTA EM UMA SALA COM MENSAGENS ETC...

  //TODO - Terminar essas merdas de CSS dos componentes e focar na parte legal, API, conexões, DB etc...

  const [open, setOpen] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [modalText, setModalText] = useState('Content of the modal');
  const showModal = () => {
    setOpen(true);
  };
  const handleOk = () => {
    setModalText('The modal will be closed after two seconds');
    setConfirmLoading(true);
    setTimeout(() => {
      setOpen(false);
      setConfirmLoading(false);
    }, 2000);
  };
  const handleCancel = () => {
    console.log('Clicked cancel button');
    setOpen(false);
  };

  /* Form DATA */
  const onFinish = (values) => {
    console.log('Success:', values);
  };
  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };
  return (
    <>
      <div className="flex-1 bg-red-600">
        <div className="floating-div fixed bottom-4 right-4 flex justify-center items-center">
          <Button type="primary" className="w-14 h-14 rounded-3xl flex justify-center items-center" onClick={showModal}>
            <PlusCircleOutlined style={{ fontSize: '40px' }} />
          </Button>
          <Modal
            title="Title"
            open={open}
            onOk={handleOk}
            htmlType="submit"
            confirmLoading={confirmLoading}
            onCancel={handleCancel}
          >
            <Form
              name="basic"
              labelCol={{
                span: 8,
              }}
              wrapperCol={{
                span: 16,
              }}
              style={{
                maxWidth: 600,
              }}
              initialValues={{
                remember: true,
              }}
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
              autoComplete="off"
            >
              <Form.Item
                label="Nome"
                name="username"
                rules={[
                  {
                    required: true,
                    message: "Please input the chat's name",
                  },
                ]}
              >
                <Input />
              </Form.Item>

              <Form.Item label="Descrição" name="password">
                <Input.Password />
              </Form.Item>

              <Form.Item
                name="remember"
                valuePropName="checked"
                wrapperCol={{
                  offset: 8,
                  span: 16,
                }}
              ></Form.Item>

              <Form.Item
                wrapperCol={{
                  offset: 8,
                  span: 16,
                }}
              ></Form.Item>
            </Form>
          </Modal>
        </div>
      </div>
    </>
  );
}
