<template>
  <div>
    <h1 class="text-center">Lista de ejemplos</h1>
    <br />
    <button
      type="button"
      class="btn btn-primary btn-lg btn-block"
      @click="redirectExampleAdd"
    >
      Crear ejemplo
    </button>
    <br />
    <div v-if="$apollo.loading"></div>
    <div class="row">
      <div
        class="col-xl-4 col-md-6 col-sm-12"
        v-for="example in allExamples.edges"
        :key="example.node.id"
      >
        <template v-if="example.node.name">
          <ExampleCard :example="example.node" />
          <br />
          <button
            type="button"
            class="btn btn-success btn-sm mr-4"
            @click="redirectExampleEdit(example.node.id)"
          >
            Editar ejemplo
          </button>
          <button
            type="button"
            class="btn btn-danger btn-sm"
            @click="removeEnteprise(example.node.id)"
          >
            Eliminar ejemplo
          </button>
          <hr />
        </template>
      </div>
    </div>
  </div>
</template>

<script>
import ExampleCard from "@/components/cards/ExampleCard.vue";

export default {
  name: "ExampleList",
  components: {
    ExampleCard,
  },
  data() {
    return {
      // Variable que recibe los resultados
      // de la consulta definida en la sección apollo
      allEnterprises: Object,
      // Variable que recibe el error de la consulta
      error: null,
    };
  },
  methods: {
    redirectExampleAdd() {
      this.$router.push({ name: "ExampleAdd" });
    },
    /**
     * Redirige a la vista de editar empresa
     * pasando el id de la empresa por parametro en la url
     */
    redirectExampleEdit(idEnterprise) {
      console.log("enviar id por url", idEnterprise);

      this.$router.push({
        name: "ExampleEdit",
        params: { id: idEnterprise },
      });
    },
    /**
     * Elimina una empresa y actualiza el cache con refetchQueries
     */
    // async removeEnteprise(idEnterprise) {
    //   await this.$apollo.mutate({
    //     // Establece la consulta a realizar
    //     mutation: require("@/graphql/example/deleteEnterprise.gql"),
    //     // Define la variable
    //     variables: {
    //       id: idEnterprise,
    //     },
    //     // Actualiza el cache de GraphQL para visualizar la eliminación
    //     // al momento de cargar la vista
    //     refetchQueries: [
    //       { query: require("@/graphql/example/allEnterprises.gql") },
    //     ],
    //   });
    // },
  },
  /**
   * Consulta simple que debe definir el mismo nombre en la sección data
   */
  apollo: {
    allExamples: {
      // Consulta
      query: require("@/graphql/example/allExamples.gql"),
      // Asigna el error a la variable definida en data
      error(error) {
        this.error = JSON.stringify(error.message);
      },
    },
  },
};
</script>
