import { create } from 'zustand';

export const useFormStore = create((set) => ({
  formName: '',
  formDesc: '',

  setNomeChat: (name) => set(() => ({ formName: name })),
  setDescricaoChat: (desc) => set(() => ({ formDesc: desc })),
}));
