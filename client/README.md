# 🧑‍💻 Admin Dashboard – Full Stack Application

This is a modern **full stack admin dashboard** built using powerful technologies on both frontend and backend. It is designed to manage users, display analytics, and provide a clean and scalable admin interface.

---

## 🚀 Tech Stack

### Frontend – `React + Vite`
- **React 19** – Modern UI framework
- **Vite 6** – Lightning-fast build tool
- **Tailwind CSS 4** – Utility-first CSS for rapid UI development
- **Radix UI** – Unstyled and accessible UI components
- **TanStack React Query v5** – Powerful asynchronous data management
- **React Hook Form + Zod** – Scalable forms with schema validation
- **React Router v7** – Flexible routing for single-page applications

### Backend – `NestJS`
- **NestJS 11** – Progressive Node.js framework for building efficient server-side applications
- **TypeScript** – Strong typing and modern JavaScript
- **Class Validator / Zod** – Input validation for robust APIs
- **Global Pipes & DTOs** – Clean architecture for request handling and validation

---

## 📁 Project Structure

admin-dashboard/
├── apps/
│ ├── client/ # React + Vite frontend
│ └── server/ # NestJS backend
├── node_modules/
├── package.json # Monorepo root (optional with pnpm or nx)
└── README.md


> If you're not using a monorepo, you can keep the frontend and backend as separate folders with their own `node_modules` and configs.

---

## 📦 Package Managers

- **pnpm** – Fast, disk-efficient package manager (recommended)
- You can also use `npm` or `yarn`, but `pnpm` offers performance benefits, especially in monorepos.

---

## 🛠 Development

### Start Frontend


cd apps/client
pnpm install
pnpm dev


### Start Backend
cd apps/server
pnpm install
pnpm start:dev
