import { create } from 'zustand';

export const useAuthStore = create((set) => ({
    profile: null,
    toke: null,
    isLogged: false,
    login: (users) => set({profie: userLogged.profile, toke: userLogged.token, isLogged:true }),
    logout: () => set({profile: null, toke: null, isLogged:false }),
}))