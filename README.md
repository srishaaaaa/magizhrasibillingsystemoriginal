# Magizhrasi POS & Billing System

A modern, responsive Point of Sale (POS) and billing system built for **Magizhrasi Kist Collection** (Dharmapuri, Tamil Nadu). The application is designed to streamline retail sales, generate digital bills, and track business metrics.

---

## 🚀 Features

- **Interactive POS Interface**: Full-featured billing dashboard at `/pos/admin/secure/control-panel/` to add items, search the catalog, apply discounts, select order source (Online/Offline), and complete payments.
- **Dynamic Digital Invoices**: Beautiful printable billing invoices at `/invoice/[id]` with print optimization (PDF layout support), customer receipt copy links, and a professional look.
- **Brand Landing Page**: Simple, elegant public-facing page showcasing business directory details, address, business hours, and contacts.
- **Database Integration**: Fully powered by Supabase for real-time order saving, inventory lookup, and customer profiles.

---

## 🛠️ Tech Stack

- **Framework**: [Next.js](https://nextjs.org/) (v16.2.9)
- **Library**: [React](https://react.dev/) (v19)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) (v4.0)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Database / Backend**: [Supabase](https://supabase.com/)

---

## 📂 Project Structure

```
magizhrasi-main/
├── app/
│   ├── globals.css                # Global Tailwind CSS styles and custom variable theme declarations
│   ├── layout.tsx                 # Root application wrapper with font styling
│   ├── page.tsx                   # Public store directory/landing page for Magizhrasi
│   ├── invoice/
│   │   └── [id]/
│   │       └── page.tsx           # Printable digital invoice view page for dynamic order IDs
│   └── pos/
│       ├── actions.ts             # Server actions (e.g. passcode verification)
│       └── admin/
│           └── secure/
│               └── control-panel/
│                   └── magizhrasi/
│                       └── page.tsx # The main POS Dashboard & billing console
├── lib/
│   └── supabase.ts                # Configured client connection for Supabase database
├── public/                        # Static assets (logos, icons)
├── tsconfig.json                  # TypeScript compiler settings
├── eslint.config.mjs              # Linting rules
└── package.json                   # Dependencies and npm scripts
```

---

## ⚙️ Configuration & Environment Setup

Create a `.env.local` file in the root directory (under `magizhrasi-main/`) and populate the following keys:

```ini
# Supabase Configuration
NEXT_PUBLIC_SUPABASE_URL=https://your-project-ref.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
SUPABASE_SERVICE_ROLE_KEY=your-service-role-key
DATABASE_URL=postgresql://postgres.your-project-ref:your-db-password@aws-0-ap-southeast-1.pooler.supabase.com:6543/postgres

# Server Settings
PORT=3000

# Security
STAFF_PASSWORD=Staff@123
ADMIN_PASSWORD=Admin@123
JWT_SECRET=change_this_to_a_long_random_string

# Shop Details
SHOP_NAME=Magizhrasi
SHOP_NAME_TAMIL=மகிழ்ரசி
SHOP_TAGLINE=Kist Collection
OWNER_NAME=P. Mani
OWNER_NAME_TAMIL=பி. மணி
SHOP_ADDRESS=562/432, Annai Sathya Nagar, Pennagaram Main Road, Dharmapuri, Tamil Nadu 636705
SHOP_ADDRESS_TAMIL=562/432, அன்னை சத்யா நகர், பென்னாகரம் மெயின் ரோடு, தர்மபுரி, தமிழ்நாடு 636705
SHOP_PHONE=+91 9597937808
FOOTER_TAGLINE=MEN'S | GIRLS | KIDS | FAMILY WEAR
FOOTER_TAGLINE_TAMIL=ஆண்கள் | பெண்கள் | குழந்தைகள் | குடும்ப ஆடைகள்

# Brand info
POWERED_BY_NAME=CENEXA SYSTEMS
POWERED_BY_URL=https://www.cenexasystems.com/
```

---

## 💻 Getting Started

### 1. Install Dependencies

First, ensure that you are in the application root directory (`magizhrasi-main`), then run:

```bash
npm install
```

### 2. Run the Development Server

Start the local server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the public landing page.

- Public Landing: [http://localhost:3000/](http://localhost:3000/)
- POS Terminal: [http://localhost:3000/magizhrasi](http://localhost:3000/magizhrasi)
- Invoices: `/invoice/[id]` (e.g., [http://localhost:3000/invoice/example-id](http://localhost:3000/invoice/example-id))

### 3. Build for Production

To build a production deployment:

```bash
npm run build
npm start
```

---

## 📝 License

This software is private and proprietary. All rights reserved. Powered by Cenexa Systems.
