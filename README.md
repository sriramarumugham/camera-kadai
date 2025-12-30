# Camera Kadai - Camera Rental Platform

A full-featured camera rental e-commerce platform built with Medusa.js, featuring end-to-end rental workflows, inventory management, and Razorpay payment integration.

🔗 **Live Site:** [camerakadai.com](https://camerakadai.com)

## The Challenge

Building a camera rental business needs more than a typical e-commerce setup:

- Rental-specific workflows (booking dates, return tracking)
- Real-time inventory availability
- Deposit and rental fee management
- Equipment condition tracking
- Flexible pricing (daily/weekly/monthly rates)

## Why Medusa.js?

Instead of building from scratch or using rigid SaaS platforms, we chose **Medusa.js** - an open-source headless commerce engine.

| Feature          | Shopify | WooCommerce | **Medusa.js** |
| ---------------- | ------- | ----------- | ------------- |
| Open Source      | ❌      | ✅          | ✅            |
| Headless         | Limited | Plugin      | ✅ Native     |
| Custom Workflows | Limited | Complex     | ✅ Easy       |
| Self-Hosted      | ❌      | ✅          | ✅            |
| Transaction Fees | 2%+     | ❌          | ❌            |
| Rental Support   | ❌      | Plugin      | ✅ Custom     |

### Key Benefits

- **No Transaction Fees** - Only pay payment gateway fees
- **Full Customization** - Extend any workflow with custom logic
- **Headless Architecture** - Decoupled frontend for better performance
- **Self-Hosted** - Complete data ownership and control
- **API-First** - Easy integration with any frontend or mobile app

## Architecture

```
┌─────────────────────────────────────────────────────────┐
│                    Cloudflare (CDN)                     │
└───────────────────────┬─────────────────────────────────┘
                        │
┌───────────────────────▼─────────────────────────────────┐
│                   Next.js Storefront                    │
│            (SSR + Static Product Pages)                 │
└───────────────────────┬─────────────────────────────────┘
                        │ REST/GraphQL
┌───────────────────────▼─────────────────────────────────┐
│                    Medusa.js Backend                    │
│  ┌─────────────┐  ┌─────────────┐  ┌─────────────────┐  │
│  │   Products  │  │   Orders    │  │  Custom Rental  │  │
│  │   Module    │  │   Module    │  │     Module      │  │
│  └─────────────┘  └─────────────┘  └─────────────────┘  │
└───────────────────────┬─────────────────────────────────┘
                        │
        ┌───────────────┼───────────────┐
        │               │               │
┌───────▼───────┐ ┌─────▼─────┐ ┌───────▼───────┐
│  PostgreSQL   │ │   Redis   │ │   Razorpay    │
│  (Database)   │ │  (Cache)  │ │  (Payments)   │
└───────────────┘ └───────────┘ └───────────────┘
```

## Custom Rental Features

### Booking System

- Date range selection with availability check
- Conflict detection for overlapping bookings
- Automatic inventory hold during checkout

### Pricing Engine

- Daily, weekly, monthly rental rates
- Weekend/holiday pricing
- Long-term rental discounts
- Security deposit calculation

### Inventory Management

- Real-time stock availability
- Equipment condition tracking
- Maintenance scheduling
- Return processing workflow

### Payment Flow

```
Customer selects dates → Check availability → Calculate rental + deposit
                                                      ↓
                              Razorpay checkout ← Add to cart
                                    ↓
                            Payment captured
                                    ↓
                      Booking confirmed + Inventory reserved
                                    ↓
                         Equipment pickup/delivery
                                    ↓
                    Return + Condition check + Deposit refund
```

## Tech Stack

| Layer        | Technology               |
| ------------ | ------------------------ |
| **Frontend** | Next.js 14, Tailwind CSS |
| **Backend**  | Medusa.js 2.0            |
| **Database** | PostgreSQL               |
| **Cache**    | Redis                    |
| **Payments** | Razorpay                 |
| **Storage**  | Cloudflare R2            |
| **Hosting**  | Self-hosted VPS          |

## Key Integrations

### Razorpay Payment Gateway

- UPI, Cards, Net Banking, Wallets
- Subscription support for long-term rentals
- Automatic refunds for deposits
- Payment links for COD conversion

### Inventory Sync

- Real-time availability updates
- Multi-location stock management
- Low stock alerts
- Damage/maintenance flags

## Why Self-Host?

For a rental business with potentially high-value transactions:

- **Data Privacy** - Customer and payment data stays with you
- **No Platform Lock-in** - Migrate anytime
- **Custom Logic** - Rental workflows need flexibility
- **Cost Control** - Predictable monthly costs vs percentage fees

---

Built with Medusa.js. Open source. Self-hosted. Full control.
