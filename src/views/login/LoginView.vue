<template>
  <div class="container text-left bg-light">
    <form>
      <div class="form-group">
        <label for="exampleInputEmail1">Correo</label>
        <input
          type="email"
          class="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
        />
        <small id="emailHelp" class="form-text text-muted"></small>
      </div>
      <div class="form-group">
        <label for="exampleInputPassword1">Contraseña</label>
        <input
          type="password"
          class="form-control"
          id="exampleInputPassword1"
        />
      </div>
      <div class="form-group form-check">
        <input type="checkbox" class="form-check-input" id="exampleCheck1" />
        <label class="form-check-label" for="exampleCheck1"
          >Recordar la sesión</label
        >
      </div>
      <button type="button" class="btn btn-primary" @click="redirect">
        Iniciar Sesión
      </button>
    </form>
  </div>
</template>

<script>
export default {
  name: "LoginView",
  methods: {
    redirect() {
      this.$router.push({ name: "PetList" });
    },
  },
};
</script>
