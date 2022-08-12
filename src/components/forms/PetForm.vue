<template>
  <div>
    <form>
      <div class="form-group">
        <input
          type="text"
          class="form-control"
          id="petInputName"
          aria-describedby="petName"
          placeholder="Nombre de la mascota"
          v-model="pet.name"
        />
      </div>
      <div class="form-group">
        <input
          type="text"
          class="form-control"
          id="petInputType"
          aria-describedby="petType"
          placeholder="Tipo de mascota"
          v-model="pet.type"
        />
      </div>
      <div class="form-group">
        <input
          type="number"
          class="form-control"
          id="petInputAge"
          aria-describedby="agePet"
          placeholder="Edad de la mascota"
          v-model="pet.age"
        />
      </div>
      <div class="form-check">
        <input
          class="form-check-input"
          type="checkbox"
          value=""
          id="petNeutering"
          v-model="pet.neutering"
        />
        <label class="form-check-label" for="defaultCheck1"> Castrado </label>
      </div>
      <div class="form-group">
        <input
          type="text"
          class="form-control"
          id="petInputBreed"
          aria-describedby="petBreed"
          placeholder="Raza de la mascota"
          v-model="pet.breed"
        />
      </div>
      <div class="form-check">
        <input
          class="form-check-input"
          type="radio"
          name="petSex"
          id="m"
          value="m"
          v-model="pet.sex"
        />
        <label class="form-check-label" for="m"> Macho </label>
      </div>
      <div class="form-check">
        <input
          class="form-check-input"
          type="radio"
          name="petSex"
          id="h"
          value="h"
          v-model="pet.sex"
        />
        <label class="form-check-label" for="h"> Hembra </label>
      </div>
      <button
        v-if="id == null"
        type="submit"
        class="btn btn-primary"
        :disabled="inputsEmpty"
        @click="createPet"
      >
        Registrar mascota
      </button>
      <button
        v-if="id !== null"
        type="submit"
        class="btn btn-success"
        :disabled="inputsEmpty"
        @click="updatePet"
      >
        Actualizar mascota
      </button>
    </form>
  </div>
</template>

<script>
export default {
  name: "PetForm",
  props: {
    /**
     * Se asigna null si el formulario
     * no es de actualización
     */
    id: {
      type: String,
      required: false,
      default: null,
    },
  },
  data() {
    return {
      pet: {
        name: "",
        type: "",
        age: Number,
        neutering: null,
        breed: "",
        sex: "",
      },
    };
  },
  async mounted() {
    console.log("id en el formulario", this.id);

    if (this.id) {
      await this.$apollo
        .query({
          query: require("@/graphql/pet/getPet.gql"),
          variables: {
            id: this.id,
          },
        })
        .then((response) => {
          this.pet = response.data.pet;
        });
    }
  },
  methods: {
    createPet() {
      this.$apollo
        .mutate({
          mutation: require("@/graphql/pet/createPet.gql"),
          variables: {
            name: this.pet.name,
            type: this.pet.type,
            age: this.pet.age,
            neutering: this.pet.neutering,
            breed: this.pet.breed,
            sex: this.pet.sex,
          },
        })
        .then((response) => {
          console.log("actualización de empresa:", response.data);
          console.log("agrega aquí más lógica si es necesaria");
        });

      this.$router.push({ name: "PetList" });
    },
    updatePet() {
      this.$apollo
        .mutate({
          mutation: require("@/graphql/pet/updatePet.gql"),
          variables: {
            id: this.pet.id,
            name: this.pet.name,
            type: this.pet.type,
            age: this.pet.age,
            neutering: this.pet.neutering,
            breed: this.pet.breed,
            sex: this.pet.sex,
          },
        })
        .then((response) => {
          console.log("actualización de empresa:", response.data);
          console.log("agrega aquí más lógica si es necesaria");
        });

      this.$router.push({ name: "PetList" });
    },
  },
  computed: {
    inputsEmpty() {
      if (
        this.pet?.name.trim() === "" ||
        this.pet?.type.trim() === "" ||
        typeof this.pet?.age === Number ||
        this.pet?.sex.trim() === ""
      ) {
        return true;
      }
      return false;
    },
  },
};
</script>

<style scoped>
/* Chrome, Safari, Edge, Opera */
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

/* Firefox */
input[type="number"] {
  -moz-appearance: textfield;
}
</style>
