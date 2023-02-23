import {create} from 'zustand';

interface UserStore {
  token?: string;
  setToken: (token?: string) => void;
}

const useUserStore = create<UserStore>(set => ({
  token: undefined,
  setToken: (token?: string) => set({token}),
}));

export default useUserStore;
