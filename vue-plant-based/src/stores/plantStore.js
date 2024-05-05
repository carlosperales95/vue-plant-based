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
        const res = await fetch(`https://trefle.io/api/v1/plants?token=LfcDOdIZXk36w9xBzf3m_gCxjEPQ2IwjN7SsKDCr3NM`);
        const data = await res.json();
        
        if (data) {
            Object.entries(data).forEach(c => {
                const plant = {
                    ...p[0]
                };
                this.courses.push(plant);
            });
            console.log(data[0]);
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