import { Button, Modal, Checkbox, Form, Input, ConfigProvider } from 'antd';
import { PlusCircleOutlined } from '@ant-design/icons';
// import { useFormStore } from '../store/FormStore';
import { useEffect, useRef, useState } from 'react';
import axios from 'axios';

export default function ChatRoomList({ onSubmit, setChatName, setChatDescription, name, description, rooms, onSelectRoom }) {
  //*- LISTA DE CHATS QUE VAI FICAR NA ESQUERDA COM TODOS OS CHATS CRIADOS OU DISPONIVEIS PARA ENTRAR OU SOMENTE OS QUE VOCE JA ESTA
  //*- E O BOTÃO PARA CRIAR NOVO CHAT, CHATROOM VAI TER MUITA COISA ENTÃO TRANSFERI PARA CÁ

  //TODO - Precisa de refatoração de estilo e UI


  const [open, setIsModalOpen] = useState(false);


  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <div className="flex h-full w-full">
        <div className="gap-4 overflow-y-auto w-full">
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
          {rooms.map((room) => (
            <div key={room._id} className="bg-white shadow-md p-4 rounded-md cursor-pointer" onClick={() => onSelectRoom(room._id)}>
              <p>{room.name}</p>
              <p>Descrição: {room.description}</p>
            </div>
          ))}
        </div>
      </div>

      <Modal
        title="Criar novo Chat"
        visible={open}
        onCancel={handleCancel}
        footer={null}
      >
        <form onSubmit={onSubmit}>
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
              value={name}
              onChange={(e) => {
                setChatName(e.target.value);
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
              value={description}
              onChange={(e) => {
                setChatDescription(e.target.value);
              }}
              name="description"
            ></textarea>
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Criar
            </button>
          </div>
        </form>
      </Modal>
    </>
  );
}
