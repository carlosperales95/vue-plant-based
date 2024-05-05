import { defineStore } from 'pinia';

export const usePlantStore = defineStore('plantStore', {
  state: () => ({
    name: 'Carlos',
    plants: [],
    isLOading: false,
    
  }),
  getters: {
    totalCount: (state) => {
        return state.plants.length;
    },
    
},
actions: {
    async getPlants() {
        this.plants = [];
        this.isLoading = true;
        const res = await fetch(` http://localhost:3000/plants`);
        const data = await res.json();
        
        if (data) {
            Object.entries(data).forEach(p => {
                const plant = {
                    ...p[0]
                };
                this.plants.push(plant);
            });
            console.log(data);
        }
        this.isLoading = false;
    },
    async getCourse(id) {
        this.isLoading = true;
        const res = await fetch(`${import.meta.env.VITE_API_URL}/courses/${id}.json`);
        
        if(res.error) console.log(res.error);
        const data = await res.json();
        this.selectedCourse = data;
        this.isLoading = false
    },
}
});