<template>
  <Navbar />
  <HeroSection />

  <section class="py-5">
    <div class="container">
      <h2 class="text-center mb-4">Our Services</h2>
      <div class="row">
        <ServiceCard
          v-for="service in services"
          :key="service.id"
          :service="service"
        />
      </div>
    </div>
  </section>

  <section class="py-5 bg-light">
    <div class="container">
      <h2 class="text-center mb-4">Pricing</h2>
      <div class="row">
        <PricingCard
          v-for="plan in pricingPlans"
          :key="plan.name"
          :plan="plan"
        />
      </div>
    </div>
  </section>

  <AboutSection />
</template>

<script setup>
import Navbar from '@/components/layout/Navbar.vue'
import HeroSection from '@/components/home/HeroSection.vue'
import ServiceCard from '@/components/services/ServiceCard.vue'
import PricingCard from '@/components/pricing/PricingCard.vue'
import AboutSection from '@/components/about/AboutSection.vue'

import { services } from '@/data/services'
import { pricingPlans } from '@/data/pricing'
</script>