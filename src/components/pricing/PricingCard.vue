<template>
  <div class="col-md-4 mb-4" data-aos="flip-left">
    <div class="card text-center h-100 pricing-card">
      <div
        class="card-header fw-bold"
        :class="plan.popular ? 'bg-warning' : 'bg-primary text-white'"
      >
        {{ plan.name }}
        <span v-if="plan.popular" class="badge bg-dark ms-2">
          Most Popular
        </span>
      </div>

      <div class="card-body">
        <h2>${{ plan.price }}</h2>
        <p class="text-muted">per month</p>

        <ul class="list-unstyled">
          <li v-for="feature in plan.features" :key="feature">
            ✔ {{ feature }}
          </li>
        </ul>

        <button class="btn btn-outline-primary mt-3">
          Choose Plan
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({ plan: Object })
</script>

<style scoped>
.pricing-card {
  transition: transform 0.3s ease;
}
.pricing-card:hover {
  transform: scale(1.05);
}
</style>
