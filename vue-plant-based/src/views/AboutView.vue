<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
</template>

<script>
import { storeToRefs } from 'pinia';
import { usePlantStore } from '../stores/plantStore';

export default {
  setup() {

    const plantStore = usePlantStore();

        const {
            name,
            plants,
            isLoading,
        } = storeToRefs(plantStore);
        
        plantStore.getPlants();
    
    return {
      name,
      plants,
      isLoading
    }
  },
}
</script>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
