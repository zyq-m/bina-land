import { create } from "zustand";
import api from "../../axios";

const usePropertyStore = create((set) => ({
	property: [],
	filters: {},
	states: [],
	setFilters: (newfilters) =>
		set((state) => ({
			filters: { ...state.filters, ...newfilters },
		})),
	selectedState: (selected) => set(() => ({ states: selected })),
	fetchProperty: async () => {
		try {
			const { filters } = usePropertyStore.getState();
			const res = await api.get("/property/search", { params: filters });
			set({ property: res.data.property });
		} catch (error) {
			console.log(error);
		}
	},
}));

export default usePropertyStore;
