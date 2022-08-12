<template>
  <div class="card">
    <img
      src="@/assets/logo.png"
      class="card-img-top"
      alt="logo establecimiento"
    />
    <div class="card-body">
      <h5 class="card-title">{{ example.name | capitalize }}</h5>
      <p class="card-text">{{ example.lastname | capitalize }}</p>
    </div>
    <div class="card-footer">
      <small class="text-muted">Creado el {{ example.createdAt }}</small>
    </div>
  </div>
</template>

<script>
export default {
  name: "ExampleCard",
  props: {
    /**
     * Objeto establecimiento enviado
     * como prop desde una vista
     */
    example: Object,
  },
};
</script>
