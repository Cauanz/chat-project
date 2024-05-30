import { create } from 'zustand';

export const useFormStore = create((set) => ({
  // formName: '',
  // formDesc: '',
  room: '',

  // setNomeChat: (name) => set(() => ({ formName: name })),
  // setDescricaoChat: (desc) => set(() => ({ formDesc: desc })),
  messages: [],
  setRoom: (room) => set({ room }),
  addMessage: (message) => set((state) => ({ messages: [...state.messages, message]})),
  clearMessages: () => set({ messages: [] })
}));