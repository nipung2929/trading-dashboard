# 💼 Digital Wallet Hub

A fully deployed modern React-based frontend dashboard connected to a secure backend, designed to simulate a digital wallet interface.

## 🚀 Live Project

🔗 [home.digitalwallethub.site](https://home.digitalwallethub.site)

## 🛠️ Tech Stack

- **Frontend**: React, TailwindCSS, Axios, Vite
- **Backend**: Node.js, Express, MongoDB
- **Deployment**:
  - **Frontend**: Vercel
  - **Backend**: AWS Elastic Beanstalk (with HTTPS & SSL via Route 53 and ACM)
  - **Domain**: Hostinger + AWS Route 53 DNS

## 📦 Features

- Secure backend APIs via HTTPS
- Live financial data rendering
- Fully responsive UI
- Hosted on a custom domain

## ⚙️ Setup (Local)

```bash
# Clone the repo
git clone https://github.com/your-username/digital-wallet-hub.git
cd digital-wallet-hub

# Install frontend dependencies
cd frontend
npm install

# Run the frontend
npm run dev

# (In another terminal) Install backend dependencies
cd ../backend
npm install

# Start the backend
npm start
