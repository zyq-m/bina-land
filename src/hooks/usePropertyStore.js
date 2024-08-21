import { create } from "zustand";
import data from "../data/property.json";

const usePropertyStore = create((set) => ({
  property: data,
  update: ({ state, price, name, size }) =>
    set((s) => {
      let filterState = s.property;

      if (name)
        filterState = filterState.filter((item) =>
          item.name.toLowerCase().includes(name.toLowerCase())
        );

      if (state)
        filterState = filterState.filter((item) =>
          item.address.state.toLowerCase().includes(state.toLowerCase())
        );

      if (price)
        filterState = filterState.filter(
          (item) => item.price >= price.min && item.price <= price.max
        );

      if (size) filterState = filterState.filter((item) => item.size <= size);

      return {
        property: !filterState.length ? s.property : filterState,
      };
    }),
}));

export default usePropertyStore;
