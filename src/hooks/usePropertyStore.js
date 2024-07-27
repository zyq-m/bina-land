import { create } from "zustand";
import data from "../data/property.json";

const usePropertyStore = create((set) => ({
  property: data,
  update: (country) =>
    set((s) => {
      const selected = s.property.filter(
        (d) => d.address.country.toLowerCase() == country
      )[0];
      const remaining = s.property.filter(
        (d) => d.address.country.toLowerCase() !== country
      );

      remaining.unshift(selected);

      return {
        property: remaining,
      };
    }),
}));

export default usePropertyStore;
