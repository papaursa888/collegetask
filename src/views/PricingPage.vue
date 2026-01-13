<template>
  <Navbar />

  <section class="page-header bg-light text-center">
    <div class="container" data-aos="fade-down">
      <h1 class="fw-bold">Pricing</h1>
      <p class="text-muted mt-2">
        Transparent pricing for SaaS and ERP solutions
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
      <h3>Need Custom IT Solutions?</h3>
      <p class="mb-4">
        Contact CYVERSE for cloud infrastructure, SaaS development,
        or manpower outsourcing pricing.
      </p>
      <button class="btn btn-light btn-lg">
        Contact CYVERSE
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
