import { Button, Modal, Checkbox, Form, Input } from 'antd';
import { PlusCircleOutlined } from '@ant-design/icons';
import { useFormStore } from '../store/FormStore';
import { useRef, useState } from 'react';

export default function ChatRoom() {
  //TODO- REPRESENTA UMA SALA DE CHAT INDIVIDUAL, VOCE ESTA EM UMA SALA COM MENSAGENS ETC...

  const [open, setOpen] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);

  const [chatName, setChatName] = useState('');
  const [chatDesc, setChatDesc] = useState('');

  const showModal = () => {
    setOpen(true);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setConfirmLoading(true);
    //O correto seria enviar os dados aqui enquanto o contador roda

    console.log(chatName, chatDesc);

    setTimeout(() => {
      setOpen(false);
      setConfirmLoading(false);

      setChatName('');
      setChatDesc('');
    }, 2000);
  };

  //! NÃO SEI COMO PEGAR OS VALORES DO FORM, TALVEZ CRIAR UM DOCUMENTO JÁ AQUI, E DEPOIS SÓ ADICIONAR O RESTO, ID'S, OUTROS OBJETOS ETC...

  /*   const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'name') {
      setChatName(value);
    } else if (name === 'description') {
      setChatDesc(value);
    }
  }; */

  /*   const handleChange = (e) => {
    setChatName(e.target.name.value);
    setChatDesc(e.target.description.value);

    console.log(e.target.name.value, e.target.description.value);
  }; */

  const handleCancel = () => {
    console.log('Clicked cancel button');
    setOpen(false);
  };
  return (
    <>
      <div className="flex-1 bg-red-600">
        <div className="floating-div fixed bottom-4 right-4 flex justify-center items-center">
          <Button type="primary" className="w-14 h-14 rounded-3xl flex justify-center items-center" onClick={showModal}>
            <PlusCircleOutlined style={{ fontSize: '40px' }} />
          </Button>
          <Modal
            title="Criar novo Chat"
            open={open}
            htmlType="submit"
            confirmLoading={confirmLoading}
            onCancel={handleCancel}
            footer={null}
          >
            <form>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                  Nome
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="name"
                  type="text"
                  placeholder="Digite o nome"
                  required
                  onChange={handleChange}
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="description">
                  Descrição
                </label>
                <textarea
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="description"
                  placeholder="Digite a descrição"
                  onChange={handleChange}
                ></textarea>
              </div>
              <div className="flex items-center justify-between">
                <button
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  type="submit"
                  onClick={handleSubmit}
                >
                  Criar
                </button>
              </div>
            </form>
          </Modal>
        </div>
      </div>
    </>
  );
}
