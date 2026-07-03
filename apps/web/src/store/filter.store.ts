import { create } from "zustand";

interface FilterState {
  category: string;
  minPrice: number;
  maxPrice: number;
  sort: string;

  setCategory: (v: string) => void;
  setPrice: (min: number, max: number) => void;
  setSort: (v: string) => void;
}

export const useFilterStore =
  create<FilterState>((set) => ({
    category: "",

    minPrice: 0,

    maxPrice: 500,

    sort: "",

    setCategory: (category) =>
      set({ category }),

    setPrice: (minPrice, maxPrice) =>
      set({ minPrice, maxPrice }),

    setSort: (sort) =>
      set({ sort }),
  }));