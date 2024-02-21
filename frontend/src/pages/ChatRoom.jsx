import { Button, Modal, Checkbox, Form, Input } from 'antd';
import { PlusCircleOutlined } from '@ant-design/icons';
import { useFormStore } from '../store/FormStore';
import { useState } from 'react';

export default function ChatRoom() {
  //TODO- REPRESENTA UMA SALA DE CHAT INDIVIDUAL, VOCE ESTA EM UMA SALA COM MENSAGENS ETC...

  //! TEM ALGUM PROBLEMA NA IMPORTAÇÃO DA STORE DO ZUSTAND E OS HOOKS DO REACT, ELES ESTÃO PROVAVELMENTE CONFLITANDO CONCERTE

  /*   const setChatName = useFormStore((state) => state.setNomeChat);
  const setChatDesc = useFormStore((state) => state.setDescricaoChat); */

  const [open, setOpen] = useState(false);
  const [modalText, setModalText] = useState('Content of the modal');
  const [confirmLoading, setConfirmLoading] = useState(false);

  const showModal = () => {
    setOpen(true);
  };
  const handleOk = (e) => {
    setConfirmLoading(true);
    //O correto seria enviar os dados aqui enquanto o contador roda

    setChatName(e.target.chatname.value);
    setChatDesc(e.target.descricao.value);

    console.log(e.target.chatname.value, e.target.descricao.value);

    setTimeout(() => {
      setOpen(false);
      setConfirmLoading(false);
      console.log(modalText); //PARA DEBUG
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
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
              autoComplete="off"
            >
              <Form.Item
                label="Nome"
                name="chatname"
                rules={[
                  {
                    required: true,
                    message: "Please input the chat's name",
                  },
                ]}
              >
                <Input />
              </Form.Item>

              <Form.Item label="Descrição (opcional)" name="descricao">
                <Input />
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
