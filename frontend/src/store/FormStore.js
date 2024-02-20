import { create } from 'zustand';

const useStore = create((set) => ({
  formName: '',
  formDesc: '',

  setNomeChat: (name) => set(() => ({ formName: name })),
  setDescricaoChat: (desc) => set(() => ({ formDesc: desc })),
}));
