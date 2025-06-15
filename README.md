# Admin Dashboard

Modern, responsive admin dashboard built with React, TypeScript, and NestJS. Features a sleek UI with drag-and-drop functionality, data tables, and comprehensive dashboard components.

## 🚀 Tech Stack

### Frontend
- **React 19** - Latest React with modern features
- **TypeScript** - Type-safe development
- **Vite** - Lightning-fast build tool
- **Tailwind CSS 4** - Utility-first CSS framework
- **Radix UI** - Accessible, unstyled UI components
- **React Hook Form + Zod** - Form validation and management
- **TanStack Query** - Server state management
- **TanStack Table** - Powerful data tables
- **DND Kit** - Drag and drop functionality
- **React Router 7** - Client-side routing

### Backend
- **NestJS** - Progressive Node.js framework
- **TypeScript** - Type-safe server development
- **Class Validator** - Request validation
- **Class Transformer** - Object transformation

### UI Components & Icons
- **Lucide React** - Beautiful, customizable icons
- **Tabler Icons** - Additional icon set
- **Sonner** - Toast notifications
- **Next Themes** - Dark/light mode support

## 📋 Prerequisites

- Node.js (v18 or higher)
- npm or yarn
- Git

## 🛠️ Installation

### 1. Clone the repository
```bash
git clone <repository-url>
cd admin-dashboard
```

### 2. Install Backend Dependencies
```bash
cd backend
npm install
```

### 3. Install Frontend Dependencies
```bash
cd ../frontend
npm install
```

## 🚀 Getting Started

### Development Mode

#### Start Backend Server
```bash
cd backend
npm run start:dev
```
The backend will run on `http://localhost:3000` (or your configured port)

#### Start Frontend Development Server
```bash
cd frontend
npm run dev
```
The frontend will run on `http://localhost:5173`

### Production Mode

#### Build Backend
```bash
cd backend
npm run build
npm run start:prod
```

#### Build Frontend
```bash
cd frontend
npm run build
npm run preview
```

## 📁 Project Structure

```
admin-dashboard/
├── backend/                 # NestJS Backend
│   ├── src/
│   ├── test/
│   ├── package.json
│   └── ...
├── frontend/               # React Frontend
│   ├── src/
│   ├── public/
│   ├── package.json
│   └── ...
└── README.md
```

## 🎯 Features

### Frontend Features
- ✅ Modern React 19 with TypeScript
- ✅ Responsive design with Tailwind CSS
- ✅ Dark/Light mode support
- ✅ Drag and drop functionality
- ✅ Advanced data tables with sorting, filtering
- ✅ Form validation with React Hook Form + Zod
- ✅ Toast notifications
- ✅ Modal dialogs and dropdowns
- ✅ Accessible UI components
- ✅ Server state management with TanStack Query

### Backend Features
- ✅ RESTful API with NestJS
- ✅ TypeScript for type safety
- ✅ Request validation and transformation
- ✅ Modular architecture
- ✅ Built-in testing setup

## 🧪 Testing

### Backend Tests
```bash
cd backend

# Unit tests
npm run test

# Test coverage
npm run test:cov

# E2E tests
npm run test:e2e

# Watch mode
npm run test:watch
```

### Frontend Linting
```bash
cd frontend
npm run lint
```

## 🔧 Development Scripts

### Backend
- `npm run start:dev` - Start development server with hot reload
- `npm run start:debug` - Start with debugging enabled
- `npm run build` - Build for production
- `npm run format` - Format code with Prettier
- `npm run lint` - Lint and fix code

### Frontend
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Lint code

## 🎨 UI Components

The project uses a comprehensive set of UI components:
- **Layout**: Responsive grid, flex utilities
- **Navigation**: Tabs, accordion, dropdown menus
- **Forms**: Input fields, select, checkbox, labels
- **Feedback**: Toast notifications, tooltips
- **Data Display**: Tables, avatars, separators
- **Interaction**: Dialogs, toggles, drag & drop

## 🌙 Theme Support

Built-in dark and light mode support using `next-themes` with system preference detection.

## 📱 Responsive Design

Fully responsive design that works seamlessly across:
- Desktop computers
- Tablets
- Mobile devices

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the UNLICENSED License.

## 🆘 Support

If you have any questions or need help with setup, please open an issue in the repository.

---

Built with ❤️ using modern web technologies