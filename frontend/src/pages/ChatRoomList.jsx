import { Button, Modal, Checkbox, Form, Input, ConfigProvider } from 'antd';
import { PlusCircleOutlined } from '@ant-design/icons';
import { useFormStore } from '../store/FormStore';
import { useRef, useState } from 'react';
import axios from 'axios';

export default function ChatRoomList() {
  //*- LISTA DE CHATS QUE VAI FICAR NA ESQUERDA COM TODOS OS CHATS CRIADOS OU DISPONIVEIS PARA ENTRAR OU SOMENTE OS QUE VOCE JA ESTA
  //*- E O BOTÃO PARA CRIAR NOVO CHAT, CHATROOM VAI TER MUITA COISA ENTÃO TRANSFERI PARA CÁ

  const chatRooms = [
    'Chat Room 1',
    'Chat Room 2',
    'Chat Room 3',
    'Chat Room 4',
    'Chat Room 5',
    'Chat Room 6',
    'Chat Room 7',
    'Chat Room 8',
    'Chat Room 9',
    'Chat Room 10',
    'Chat Room 1',
    'Chat Room 2',
    'Chat Room 3',
    'Chat Room 4',
    'Chat Room 5',
    'Chat Room 6',
    'Chat Room 7',
    'Chat Room 8',
    'Chat Room 9',
    'Chat Room 10',
  ]; //! EXEMPLO PARA DEBUG

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

  const handleSubmit = (e) => {
    e.preventDefault();
    setConfirmLoading(true);
    //OS DADOS SÃO ENVIADOS DEPOIS NO SETTIMEOUT O LOADING É DESATIVADO

    setChat((prevState) => ({ ...prevState, name: name, description: description }));

    //TODO CRIAR ROTA PARA CRIAR CHAT
    try {
      const token = localStorage.getItem('token');
      axios('http://localhost:3000/chat/create', chat, {
        headers: { Authorization: `Bearer ${token}` },
      });
    } catch (err) {
      console.log(err);
    }
    setTimeout(() => {
      setOpen(false);
      setConfirmLoading(false);
      console.log(chat);
    }, 2000);
  };

  const handleCancel = () => {
    console.log('Clicked cancel button');
    setOpen(false);
  };

  return (
    <>
      <div className="flex h-full w-full">
        <div className="grid grid-cols-1 gap-4 overflow-y-auto w-full">
          <div className="sticky top-0 z-50 bg-white shadow-md p-4 rounded-md flex items-center">
            <ConfigProvider
              theme={{
                token: {
                  colorPrimary: '#225bfe',
                },
              }}
            >
              <Button
                type="primary"
                className="w-14 h-14 bg-sky-700 rounded-3xl flex justify-center items-center mr-1"
                onClick={showModal}
                id="createButton"
              >
                <PlusCircleOutlined style={{ fontSize: '40px' }} />
              </Button>
            </ConfigProvider>
            <label htmlFor="createButton" className="font-bold uppercase cursor-pointer">
              Criar chat
            </label>
          </div>
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

          {/* Lógica para mostrar chats */}

          {/* Replace this with your chat room cards */}
          {chatRooms.map((chatRoom, index) => (
            <div key={index} className="bg-white shadow-md p-4 rounded-md">
              {chatRoom}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
