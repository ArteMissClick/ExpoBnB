import { create } from "zustand";

export const useLocationsStore = create((set) => ({
  locations: [],
  filteredLocations: [],
  error: null,
  loading: false,
  lastUpdate: "",
  setLocations: (list) =>
    set({ locations: list, filteredLocations: list, lastUpdate: new Date().toLocaleString("fr-FR"), error: null }),
  setFilteredLocations: (list) => set({ filteredLocations: list }),
  setError: (error) => set({ error }),
  setLoading: (loading) => set({ loading }),
}));
