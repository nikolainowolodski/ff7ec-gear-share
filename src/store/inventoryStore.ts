import { create } from 'zustand';

interface InventoryState {
  characterName: string;
  setCharacterName: (name: string) => void;
}

export const useInventoryStore = create<InventoryState>((set) => ({
  characterName: '',
  setCharacterName: (name: string) => set({ characterName: name }),
}));