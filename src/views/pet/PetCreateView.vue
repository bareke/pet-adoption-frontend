<template>
  <div>
    <h1 class="text-center">{{ title }}</h1>
    <div class="container">
      <PetForm />
    </div>
  </div>
</template>

<script>
import PetForm from "@/components/forms/PetForm.vue";

export default {
  name: "PetCreateView",
  components: {
    PetForm,
  },
  data() {
    return {
      title: "Registrar mascota",
    };
  },
};
</script>
