import { Button, Modal, Checkbox, Form, Input } from 'antd';
import { PlusCircleOutlined } from '@ant-design/icons';
import { useFormStore } from '../store/FormStore';
import { useRef, useState } from 'react';

export default function ChatRoom() {
  //TODO- REPRESENTA UMA SALA DE CHAT INDIVIDUAL, VOCE ESTA EM UMA SALA COM MENSAGENS ETC...

  //! TEM ALGUM PROBLEMA NA IMPORTAÇÃO DA STORE DO ZUSTAND E OS HOOKS DO REACT, ELES ESTÃO PROVAVELMENTE CONFLITANDO CONCERTE
  //!NADA ESTA FUNCIONANDO, NAO SEI PEGAR OS VALORES DOS INPUTS, NAO SABEMOS PORQUE EU PRECISAMOS DOS STATES DOS INPUTS MAIS, NAO SEI EM QUE PARTE DO PROJETO ESTAMOS

  /*   const setChatName = useFormStore((state) => state.setNomeChat);
  const setChatDesc = useFormStore((state) => state.setDescricaoChat); */

  const [open, setOpen] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);

  const [chatName, setChatName] = useState('');
  const [chatDesc, setChatDesc] = useState('');
  const chatNameRef = useRef(undefined);
  const chatDescRef = useRef(undefined);

  const showModal = () => {
    setOpen(true);
  };
  const handleSubmit = (e) => {
    setConfirmLoading(true);
    //O correto seria enviar os dados aqui enquanto o contador roda

    setChatName(chatNameRef.current.value);
    setChatDesc(chatDescRef.current.value);

    /*     setChatName(e.target.chatname.value);
    setChatDesc(e.target.descricao.value); */

    console.log(chatNameRef.current.value, chatDescRef.current.value);

    setTimeout(() => {
      setOpen(false);
      setConfirmLoading(false);

      setChatName('');
      setChatDesc('');
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
            htmlType="submit"
            confirmLoading={confirmLoading}
            onCancel={handleCancel}
            footer={null}
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
                rules={[
                  {
                    required: true,
                    message: "Please input the chat's name",
                  },
                ]}
              >
                <Input ref={chatNameRef} />
              </Form.Item>

              <Form.Item label="Descrição (opcional)">
                <Input ref={chatDescRef} />
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
              >
                <Button type="primary" htmlType="submit" onClick={handleSubmit}>
                  Submit
                </Button>
              </Form.Item>
            </Form>
          </Modal>
        </div>
      </div>
    </>
  );
}
