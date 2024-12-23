import { create } from 'zustand'

interface SearchStore {
    searchTerm: string;
    setSearchTerm: (val: string) => void;
}
export const useSearchStore = create<SearchStore>((set) => ({
    searchTerm: '',
    setSearchTerm: (val) => set(() => ({ searchTerm: val }))
}))
