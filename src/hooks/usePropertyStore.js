import { create } from "zustand";
import data from "../data/property.json";

const usePropertyStore = create((set) => ({
  property: data,
  update: (state) =>
    set((s) => {
      const filterState = s.property.filter(
        (item) => item.address.state.toLowerCase() === state
      );
      return {
        property: filterState,
      };
    }),
}));

export default usePropertyStore;
