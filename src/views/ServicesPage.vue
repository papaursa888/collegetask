<template>
  <Navbar />

  <section class="page-header bg-light text-center">
    <div class="container" data-aos="fade-down">
      <h1 class="fw-bold">Our Services</h1>
      <p class="text-muted mt-2">
        Comprehensive IT solutions designed to support your digital transformation
      </p>
    </div>
  </section>

  <section class="py-5">
    <div class="container">
      <div class="row">
        <ServiceCard
          v-for="service in services"
          :key="service.id"
          :service="service"
        />
      </div>
    </div>
  </section>
</template>

<script setup>
import Navbar from '@/components/layout/Navbar.vue'
import ServiceCard from '@/components/services/ServiceCard.vue'
import { services } from '@/data/services'
</script>

<style scoped>
.page-header {
  padding: 120px 0 60px;
}
</style>