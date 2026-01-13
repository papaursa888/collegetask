<template>
  <div class="col-md-4 mb-4" data-aos="zoom-in">
    <div class="card h-100 service-card">
      <div class="card-body">
        <h5 class="card-title fw-bold">{{ service.title }}</h5>
        <p class="card-text">{{ service.description }}</p>
        <ul class="small">
          <li v-for="feature in service.features" :key="feature">
            ✔ {{ feature }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({ service: Object })
</script>

<style scoped>
.service-card {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}
.service-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 15px 30px rgba(0,0,0,0.15);
}
</style>
