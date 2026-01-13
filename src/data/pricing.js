// src/data/pricing.js

export const pricingPlans = [
  {
    id: 1,
    name: 'Moon',
    price: 40,
    billing: 'per month',
    description: 'Starter plan for small teams and early-stage businesses',
    recommendedFor: 'Startups & Small Businesses',
    servicesIncluded: [
      'Basic ERP SaaS (Finance & Accounting)',
      'Basic Inventory Management',
      'Cloud Storage (Up to 50 GB)',
      'Shared Cloud Hosting',
      'Standard Security & Backup'
    ],
    support: [
      'Email Support',
      'Business Hours Support'
    ],
    limitations: [
      '1 Company',
      'Up to 10 Users',
      'Limited Customization'
    ],
    popular: false
  },
  {
    id: 2,
    name: 'Sun',
    price: 80,
    billing: 'per month',
    description: 'Best value plan for growing businesses',
    recommendedFor: 'SMEs & Growing Companies',
    servicesIncluded: [
      'Full ERP SaaS (Finance, HR, Inventory, Sales)',
      'CRM & Sales Management',
      'Cloud Storage (Up to 200 GB)',
      'Dedicated Cloud Hosting Resources',
      'Automated Backup & Monitoring'
    ],
    support: [
      'Priority Email Support',
      'Chat Support',
      'Faster Response Time'
    ],
    limitations: [
      'Up to 3 Companies',
      'Up to 50 Users',
      'Limited API Access'
    ],
    popular: true
  },
  {
    id: 3,
    name: 'Star',
    price: 100,
    billing: 'per month',
    description: 'Advanced plan for enterprises and high-scale operations',
    recommendedFor: 'Enterprises & Large Organizations',
    servicesIncluded: [
      'Enterprise ERP SaaS (All Modules)',
      'Advanced Reporting & Business Intelligence',
      'Unlimited Cloud Storage',
      'High Availability Cloud Hosting',
      'API & System Integration'
    ],
    support: [
      '24/7 Technical Support',
      'Dedicated Account Manager',
      'SLA-based Support'
    ],
    limitations: [
      'Unlimited Companies',
      'Unlimited Users',
      'Full Customization Options'
    ],
    popular: false
  }
]
