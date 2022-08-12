<template>
  <div class="home">
    <br />
    <img alt="Vue logo" src="../assets/logo.png" />
    <div class="jumbotron">
      <h1 class="display-4">Proyecto Adopcion de Mascotas</h1>
      <p class="lead">Servicio web para la busqueda de mascotas a adoptar.</p>
      <button type="button" class="btn btn-success" @click="redirect">
        Iniciar Sesión
      </button>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "HomeView",
  methods: {
    redirect() {
      this.$router.push({ name: "Login" });
    },
  },
};
</script>
