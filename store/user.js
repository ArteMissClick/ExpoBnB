import { create } from "zustand";

export const useUserStore = create((set) => ({
  name: "Utilisateur",
  email: "user@example.com",
  updateUser: (name, email) => set({ name, email }),
}));
