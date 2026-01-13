<template>
  <Navbar />

  <section class="page-header bg-light text-center">
    <div class="container" data-aos="fade-down">
      <h1 class="fw-bold">Pricing Plans</h1>
      <p class="text-muted mt-2">
        Flexible pricing for businesses of all sizes
      </p>
    </div>
  </section>

  <section class="py-5">
    <div class="container">
      <div class="row justify-content-center">
        <PricingCard
          v-for="plan in pricingPlans"
          :key="plan.name"
          :plan="plan"
        />
      </div>
    </div>
  </section>

  <section class="bg-primary text-white py-5">
    <div class="container text-center" data-aos="fade-up">
      <h3>Need a custom ERP solution?</h3>
      <p class="mb-4">
        Contact us for enterprise pricing and tailored ERP implementation.
      </p>
      <button class="btn btn-light btn-lg">
        Contact Sales
      </button>
    </div>
  </section>
</template>

<script setup>
import Navbar from '@/components/layout/Navbar.vue'
import PricingCard from '@/components/pricing/PricingCard.vue'
import { pricingPlans } from '@/data/pricing'
</script>

<style scoped>
.page-header {
  padding: 120px 0 60px;
}
</style>
