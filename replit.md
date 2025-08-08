# Overview

This is a modern full-stack Todo application built with React, TypeScript, Express.js, and PostgreSQL. The application features a beautiful, responsive UI with light/dark mode theming, built using shadcn/ui components and Tailwind CSS. The frontend uses React with TypeScript for type safety, while the backend is an Express.js server with Drizzle ORM for database operations. The application supports CRUD operations for todo items with local storage persistence on the frontend and is designed to scale with a proper database backend.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
- **Framework**: React 18 with TypeScript for type safety and modern development
- **Routing**: Wouter for lightweight client-side routing
- **State Management**: React hooks (useState, useEffect) with custom hooks for todo management and theme handling
- **Data Fetching**: TanStack Query (React Query) for server state management and caching
- **UI Components**: shadcn/ui component library built on Radix UI primitives
- **Styling**: Tailwind CSS with CSS variables for theming support
- **Build Tool**: Vite for fast development and optimized production builds

## Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ES modules
- **Database ORM**: Drizzle ORM with PostgreSQL dialect
- **Storage**: Currently using in-memory storage with interface abstraction for easy database migration
- **API Structure**: RESTful API with /api prefix for all endpoints
- **Development**: Hot reload with Vite integration in development mode

## Data Storage Solutions
- **Development Storage**: In-memory storage using Map data structures
- **Production Ready**: Drizzle ORM configured for PostgreSQL with Neon Database
- **Schema Management**: Centralized schema definitions in shared directory
- **Migrations**: Drizzle Kit for database migrations and schema evolution
- **Local Persistence**: Browser localStorage for client-side todo persistence

## Authentication and Authorization
- **Current State**: Basic user schema defined but not implemented
- **Schema**: User table with id, username, and password fields
- **Session Management**: express-session with connect-pg-simple for PostgreSQL session store
- **Security**: Prepared for password hashing and secure session management

## External Dependencies
- **Database**: Neon Database (@neondatabase/serverless) for serverless PostgreSQL
- **UI Library**: Extensive Radix UI component primitives for accessible components
- **Form Handling**: React Hook Form with Zod resolvers for form validation
- **Date Handling**: date-fns for date manipulation and formatting
- **Development Tools**: Replit integration for development environment
- **Styling**: Inter font from Google Fonts for typography
- **Icons**: Lucide React for consistent iconography

## Design Patterns
- **Component Architecture**: Modular component design with clear separation of concerns
- **Custom Hooks**: Encapsulated business logic in reusable hooks (useTodos, useTheme)
- **Type Safety**: Comprehensive TypeScript usage with Zod schema validation
- **Theme System**: CSS custom properties with class-based dark mode switching
- **Storage Abstraction**: Interface-based storage pattern for easy backend switching
- **Error Handling**: Graceful error boundaries and user feedback systems