<template>
  <div class="container-fluid">
    <br />
    <h1 class="text-center">Lista de mascotas</h1>
    <div v-if="$apollo.loading"></div>
    <div class="row">
      <div
        class="col-xl-2 col-md-4 col-sm-12"
        v-for="pet in allPets.edges"
        :key="pet.node.id"
      >
        <template v-if="pet.node.name">
          <PetCard :pet="pet.node" />
          <br />
          <button
            type="button"
            class="btn btn-success btn-sm mr-4"
            @click="redirect(pet.node.id)"
          >
            Editar mascota
          </button>
          <button
            type="button"
            class="btn btn-danger btn-sm"
            @click="removeEnteprise(pet.node.id)"
          >
            Eliminar mascota
          </button>
          <hr />
        </template>
      </div>
    </div>
  </div>
</template>

<script>
import PetCard from "@/components/cards/PetCard.vue";

export default {
  name: "PetList",
  components: {
    PetCard,
  },
  data() {
    return {
      // Variable que recibe los resultados
      // de la consulta definida en la sección apollo
      allPets: Object,
      // Variable que recibe el error de la consulta
      error: null,
    };
  },
  methods: {
    redirect(idPet) {
      if (idPet) {
        this.$router.push({
          name: "PetUpdateView",
          params: { id: idPet },
        });
      } else {
        this.$router.push({ name: "PetCreateView" });
      }
    },
    findPet(id) {
      return this.allPets.edges.find((pet) => pet.node.id === id);
    },
  },
  /**
   * Consulta simple que debe definir el mismo nombre en la sección data
   */
  apollo: {
    allPets: {
      // Consulta
      query: require("@/graphql/pet/getAllPets.gql"),
      // Asigna el error a la variable definida en data
      error(error) {
        this.error = JSON.stringify(error.message);
      },
    },
  },
};
</script>
