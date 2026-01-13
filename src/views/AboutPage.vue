<template>
  <Navbar />

  <section class="page-header bg-light text-center">
    <div class="container" data-aos="fade-down">
      <h1 class="fw-bold">About CYVERSE</h1>
      <p class="text-muted mt-2">
        Your trusted partner for cloud and IT solutions
      </p>
    </div>
  </section>

  <section class="py-5">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-md-6" data-aos="fade-right">
          <h2 class="fw-bold">Who We Are</h2>
          <p>
            CYVERSE is a technology company based in Jakarta, Indonesia,
            providing cloud services, SaaS platforms, and IT manpower solutions
            to businesses across industries.
          </p>
          <p>
            We focus on delivering secure, scalable, and reliable technology
            solutions that support business growth and digital transformation.
          </p>
        </div>

        <div class="col-md-6" data-aos="fade-left">
          <div class="card shadow-sm">
            <div class="card-body">
              <h5 class="fw-bold">Company Information</h5>
              <ul class="list-unstyled mt-3">
                <li>🏢 Company Name: CYVERSE</li>
                <li>📍 Location: Jakarta, Indonesia</li>
                <li>☁ Core Services: Cloud, SaaS, IT Solutions</li>
                <li>👨‍💻 Expertise: ERP, Hosting, Outsourcing</li>
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
        To empower businesses with reliable technology solutions that drive
        efficiency, scalability, and long-term success.
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