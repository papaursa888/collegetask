<template>
  <div class="col-md-4 mb-4" data-aos="flip-left">
    <div
      class="card h-100 pricing-card text-center"
      :class="{ 'border-warning shadow-lg': plan.popular }"
    >
      <!-- Header -->
      <div
        class="card-header fw-bold text-white"
        :class="plan.popular ? 'bg-warning' : 'bg-primary'"
      >
        <h4 class="mb-0">{{ plan.name }}</h4>
        <small v-if="plan.popular" class="text-dark fw-semibold">
          Most Popular
        </small>
      </div>

      <!-- Body -->
      <div class="card-body">
        <h2 class="fw-bold">${{ plan.price }}</h2>
        <p class="text-muted">{{ plan.billing }}</p>

        <p class="small fst-italic">
          {{ plan.description }}
        </p>

        <!-- Services -->
        <div class="text-start mt-3">
          <h6 class="fw-bold">✔ Services Included</h6>
          <ul class="small">
            <li v-for="item in plan.servicesIncluded" :key="item">
              {{ item }}
            </li>
          </ul>
        </div>

        <!-- Support -->
        <div class="text-start mt-3">
          <h6 class="fw-bold">🛠 Support</h6>
          <ul class="small">
            <li v-for="item in plan.support" :key="item">
              {{ item }}
            </li>
          </ul>
        </div>

        <!-- Limitations -->
        <div class="text-start mt-3">
          <h6 class="fw-bold text-muted">⚠ Limitations</h6>
          <ul class="small text-muted">
            <li v-for="item in plan.limitations" :key="item">
              {{ item }}
            </li>
          </ul>
        </div>

        <!-- CTA -->
        <button
          class="btn mt-3 w-100"
          :class="plan.popular ? 'btn-warning' : 'btn-outline-primary'"
        >
          {{ plan.name === 'Star' ? 'Contact Sales' : 'Choose Plan' }}
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  plan: Object
})
</script>

<style scoped>
.pricing-card {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.pricing-card:hover {
  transform: translateY(-8px);
}
</style>
