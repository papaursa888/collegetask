<template>
  <Navbar />

  <section class="page-header bg-light text-center">
    <div class="container" data-aos="fade-down">
      <h1 class="fw-bold">About Us</h1>
      <p class="text-muted mt-2">
        Empowering businesses through modern ERP technology
      </p>
    </div>
  </section>

  <section class="py-5">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-md-6" data-aos="fade-right">
          <h2 class="fw-bold">Who We Are</h2>
          <p>
            We are a Jakarta-based ERP SaaS startup focused on helping businesses
            manage operations efficiently using cloud technology.
          </p>
          <p>
            Our platform is designed for scalability, flexibility, and ease of use,
            serving SMEs to enterprise-level organizations.
          </p>
        </div>

        <div class="col-md-6" data-aos="fade-left">
          <div class="card shadow-sm">
            <div class="card-body">
              <h5 class="fw-bold">Company Overview</h5>
              <ul class="list-unstyled mt-3">
                <li>📍 Head Office: Jakarta, Indonesia</li>
                <li>☁ Cloud-based ERP SaaS</li>
                <li>🚀 Startup-focused innovation</li>
                <li>🤝 Trusted business partner</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="bg-light py-5">
    <div class="container text-center" data-aos="zoom-in">
      <h3 class="fw-bold">Our Mission</h3>
      <p class="mt-3">
        To make enterprise-grade ERP systems affordable, accessible,
        and easy to use for growing businesses.
      </p>
    </div>
  </section>
</template>

<script setup>
import Navbar from '@/components/layout/Navbar.vue'
</script>

<style scoped>
.page-header {
  padding: 120px 0 60px;
}
</style>
