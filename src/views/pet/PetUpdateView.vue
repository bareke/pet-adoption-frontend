<template>
  <div>
    <h1 class="text-center">{{ title }}</h1>
    <div class="container">
      <PetForm :id="id" />
    </div>
  </div>
</template>

<script>
import PetForm from "@/components/forms/PetForm.vue";

export default {
  name: "PetUpdateView",
  components: {
    PetForm,
  },
  data() {
    return {
      id: String,
      title: "Actualizar mascota",
    };
  },
  created() {
    this.id = this.$route.params?.id;
  },
};
</script>
