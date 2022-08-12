<template>
  <div class="card" style="width: 18rem">
    <img :src="image" class="card-img-top" alt="imagen mascota" />
    <div class="card-body">
      <h5 class="card-title">Nombre: {{ pet.name | capitalize }}</h5>
      <p class="card-text">Tipo: {{ pet.type | capitalize }}</p>
      <p class="card-text">Actualizado el {{ new Date(pet.updateAt) }}</p>
    </div>
    <div class="card-footer">
      <small class="text-muted">Creado el {{ new Date(pet.createdAt) }}</small>
    </div>
  </div>
</template>

<script>
export default {
  name: "PetCard",
  props: {
    /**
     * Objeto mascota enviado
     * como prop desde una vista
     */
    pet: Object,
  },
  computed: {
    image() {
      return this.pet.type === "gato"
        ? require("@/assets/cat_default.png")
        : require("@/assets/dog_default.png");
    },
  },
};
</script>
