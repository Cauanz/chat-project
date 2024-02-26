import { Button, Modal, Checkbox, Form, Input } from 'antd';
import { PlusCircleOutlined } from '@ant-design/icons';
import { useFormStore } from '../store/FormStore';
import { useRef, useState } from 'react';
import axios from 'axios';

export default function ChatRoom() {
  //* - REPRESENTA UMA SALA DE CHAT INDIVIDUAL, VOCE ESTA EM UMA SALA COM MENSAGENS ETC...

  const [open, setOpen] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);

  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  const [chat, setChat] = useState({
    name: '',
    description: '',
    creator: {
      id: '',
      //SEM NOME POR ENQUANTO
    },
    participants: [],
    messages: [],
  });

  const showModal = () => {
    setOpen(true);
  };

  //! PAREI ENVIANDO O OBJETO PARA O BACK PARA MODIFICAR LÁ E COLOCAR OS DADOS QUE FALTAM ANTES DE IR PARA O DB, ESTOU TENTNADO CRIAR O TOKEN DO USUARIO PARA PEGAR O ID E COLOCAR NO OBJETO
  const handleSubmit = (e) => {
    e.preventDefault();
    setConfirmLoading(true);
    //O correto seria enviar os dados aqui enquanto o contador roda
    setChat((prevState) => ({ ...prevState, name: name, description: description }));

    try {
      const response = axios('http://localhost:3000/user/create', chat);
    } catch (err) {
      console.log(err);
    }
    setTimeout(() => {
      setOpen(false);
      setConfirmLoading(false);
      console.log(chat);
    }, 2000);
  };

  const handleChange = (e) => {
    console.log(e.target.elements.name.value, e.target.description.value);
  };

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
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                  name="name"
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
                  onChange={(e) => {
                    setDescription(e.target.value);
                  }}
                  name="description"
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
