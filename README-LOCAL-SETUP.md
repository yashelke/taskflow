# TaskFlow - Local Setup Instructions

## Overview
TaskFlow is a beautiful, modern todo application built with React, Vite, and Tailwind CSS. It features an animated landing page, dark/light mode toggle, and comprehensive task management functionality.

## Prerequisites
- Node.js (version 18 or higher)
- npm or yarn package manager

## Installation Steps

1. **Extract the project files**
   ```bash
   tar -xzf taskflow-project.tar.gz
   cd workspace
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   - Navigate to `http://localhost:5173` (or the port shown in your terminal)
   - You should see the TaskFlow landing page

## Features

### Landing Page
- Animated logo with floating particles
- Rotating feature showcase
- Smooth transitions and hover effects
- Dark/light mode toggle
- Gradient backgrounds and modern design

### Todo Application
- ✨ Create, edit, and delete tasks
- ✅ Mark tasks as complete/incomplete
- 🔍 Filter tasks (All, Active, Completed)
- 📊 Task statistics display
- 💾 Local storage persistence
- 🌙 Dark/light mode support
- 📱 Fully responsive design
- ⚡ Beautiful animations and transitions

## Project Structure

```
├── client/
│   ├── src/
│   │   ├── components/         # React components
│   │   │   ├── LandingPage.tsx # Animated landing page
│   │   │   ├── TodoApp.tsx     # Main todo application
│   │   │   ├── TaskInput.tsx   # Task creation component
│   │   │   ├── TaskList.tsx    # Task list display
│   │   │   ├── TaskItem.tsx    # Individual task component
│   │   │   ├── TaskStats.tsx   # Statistics and filters
│   │   │   └── ThemeProvider.tsx # Theme management
│   │   ├── hooks/              # Custom React hooks
│   │   │   ├── useTodos.ts     # Todo management logic
│   │   │   └── useTheme.ts     # Theme management
│   │   ├── types/              # TypeScript type definitions
│   │   └── pages/              # Page components
│   ├── index.html
│   └── package.json
├── tailwind.config.ts          # Tailwind CSS configuration
├── vite.config.ts             # Vite build configuration
└── README-LOCAL-SETUP.md      # This file
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Customization

### Themes
The application supports both light and dark modes. Theme preferences are automatically saved to localStorage.

### Colors
You can customize the color scheme by modifying the CSS variables in `client/src/index.css`.

### Animations
Animation settings can be adjusted in the Tailwind configuration and component files.

## Troubleshooting

### Common Issues

1. **Port already in use**
   - The dev server will automatically try the next available port
   - You can specify a port: `npm run dev -- --port 3000`

2. **Dependencies not installing**
   - Try deleting `node_modules` and `package-lock.json`, then run `npm install` again
   - Make sure you're using Node.js version 18 or higher

3. **Build errors**
   - Ensure all dependencies are installed
   - Check that you're in the correct directory (`workspace`)

## Browser Support
- Chrome (recommended)
- Firefox
- Safari
- Edge

## Performance
The application is optimized for performance with:
- Vite for fast development and builds
- React lazy loading where appropriate
- Optimized Tailwind CSS
- Local storage for data persistence

## Contributing
This is a standalone project. Feel free to modify and enhance it according to your needs.

## License
Open source - feel free to use and modify as needed.

---

Enjoy using TaskFlow! 🚀